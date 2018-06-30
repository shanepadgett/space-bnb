import PageHead from './PageHead'

const Layout = ({children}) => (
  <div>
    <PageHead title='SpaceBNB' />
    <h1>Hello H1</h1>
    {children}
  </div>
)

export default Layout
