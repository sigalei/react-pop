export const imports = {
  'docs/ReactPop.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-react-pop" */ 'docs/ReactPop.mdx'),
}
