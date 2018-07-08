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
          {/* <script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossorigin='anonymous' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q' crossorigin='anonymous' />
          <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl' crossorigin='anonymous' />
          <script src='http://threejs.org/build/three.min.js' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/tween.js/16.3.5/Tween.min.js' />
          <script src='static/js/planets.js' /> */}
        </Layout>
      </Container>
    )
  }
}
