import { Component } from 'react'
import PageHead from './PageHead'
import threeEntryPoint from '../lib/threeJS/index'

class Layout extends Component {
  componentDidMount () {
    threeEntryPoint(this.threeRootElement)
  }

  render () {
    return (
      <div>
        <PageHead title='SpaceBNB' />
        <div ref={(element) => { this.threeRootElement = element }} />
        {this.props.children}
        <style global jsx>{`
          body {
            font-family: 'Montserrat', sans-serif;
            overflow-x: hidden;
          }
          canvas {
            width: 100vw;
            height: 100vh;
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -9999;
          }
          .reservation-bg {
            background: rgba(9, 9, 9, 0.8);
            height: 100%;
          }
          .fixed-to-bg {
            width: 100vw;
            height: 100vh;
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -9995;
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
