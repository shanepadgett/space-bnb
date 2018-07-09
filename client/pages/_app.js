import 'bootswatch/dist/lux/bootstrap.css'
import App, {Container} from 'next/app'
import Layout from '../layout'

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
