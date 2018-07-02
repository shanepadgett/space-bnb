import PageHead from './PageHead'

const Layout = ({children}) => (
  <div>
    <PageHead title='SpaceBNB' />
    {children}
    <style global jsx>{`
      body {
        background-color: #111111;
      }
    `}</style>
  </div>
)

export default Layout
