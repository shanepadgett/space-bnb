import PageHead from './PageHead'

const Layout = ({children}) => (
  <div>
    <PageHead title='SpaceBNB' />
    {children}
    <style global jsx>{`
      body {
        background-color: #111111;
        font-family: 'Montserrat', sans-serif;
      }
    `}</style>
  </div>
)

export default Layout
