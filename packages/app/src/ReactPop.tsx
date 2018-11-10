import * as React from 'react'
import styledComponents from 'styled-components'

export interface ReactPopProps {
  element: string
}

export interface Container {}

export interface DOMRect {
  x: number,
  y: number,
  height: number
}

export interface Pop {
  position: DOMRect
}

const Container = styledComponents<Container, any>('div')`
  height: 600px;
`

const Element = styledComponents<Element, any>('div')`
  position: relative;
  margin-top: 20%;
`

const Pop = styledComponents<Pop, any>('span')`
  top: ${props => props.position.y - props.position.height - 100}px
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
    position: false
  }
  componentDidMount() {
    const { element } = this.props
    const elementPosition = document.getElementById(element).getClientRects()
    console.log(elementPosition)
    this.setState({ position: elementPosition[0] })
  }

  render() {
    const { position } = this.state

    return (
      <Container>
        <Element id="element1">
          testando se o popup aparece no elemento 1
        </Element>
        <Element id="element2">ou se aparece no elemento 2</Element>
        <Pop position={position}>pop 1</Pop>
      </Container>
    )
  }
}
