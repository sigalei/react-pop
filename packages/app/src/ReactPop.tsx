import * as React from 'react'
import styledComponents from 'styled-components'
require('isomorphic-fetch')

export interface ReactPopProps {
  api: string
}

export interface Container {}

export interface DOMRect {
  x: number
  y: number
  height: number
}

export interface Pop {
  position: DOMRect
  content: string
  elementId: string
  location: string
}

export interface PopData {
  popups: Pop[]
}

const Pop = styledComponents<Pop, any>('span')`
  top: ${props => props.position.y - 10}px
  left: ${props => props.position.x}px
  background-color: #2096f3;
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  color: white;
  position: absolute;
  text-align: center;
  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #2096f3 transparent transparent transparent;
  }
`

export default class ReactPop extends React.Component<ReactPopProps, {}> {
  state = {
    position: false,
    content: false,
    location: false
  }

  getHorizontalPosition(element: HTMLElement) {
    return element.offsetLeft
  }

  getVerticalPosition(element: HTMLElement) {
    return element.offsetTop - element.offsetHeight
  }

  getPosition(data: PopData) {
    const element = document.getElementById(data.popups[0].elementId)

    return {
      x: this.getHorizontalPosition(element),
      y: this.getVerticalPosition(element)
    }
  }

  componentDidMount() {
    const { api } = this.props
    fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ popups { name elementId text } }' })
    })
      .then(res => res.json())
      .then(({ data }) => {
        const position = this.getPosition(data)
        this.setState({
          position,
          content: data.popups[0].text,
          location: data.popups[0].location
        })
      })
  }

  renderPop = () => {
    const { position, content, location } = this.state

    if (position) return <Pop position={position} location={location}>{content}</Pop>
    return false
  }

  render() {
    const { position } = this.state

    return this.renderPop()
  }
}
