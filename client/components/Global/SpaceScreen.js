import React, { Component } from 'react'

export default class SpaceScreen extends Component {
  constructor (props) {
    super(props)

    this.resizeScreen = this.resizeScreen.bind(this)
    this.state = {
      height: '100vh',
      width: '100vw'
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeScreen)
    this.resizeScreen()
  }

  resizeScreen () {
    this.setState({
      height: document.innerHeight,
      width: document.innerWidth
    })
    console.log(this.state)
  }

  render () {
    const styles = {
      width: this.state.width,
      height: this.state.height,
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -9995,
      backgroundColor: 'rgba(9, 9, 9, 0.8)'
    }
    return (
      <div>
        <div className='space-screen' style={styles} />
        <style global jsx>{` 
            .space-screen {
              width: 100vw;
              height: 100vh;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              z-index: -9995;
              background-color: rgba(9, 9, 9, 0.8);
              }
        `}</style>
      </div>
    )
  }
}
