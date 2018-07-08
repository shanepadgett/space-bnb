import PageHead from './PageHead'
import Space from '../components/Space'

const Layout = ({children}) => (
  <div>
    <PageHead title='SpaceBNB' />
    <Space />
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
