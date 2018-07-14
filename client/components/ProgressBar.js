import React, { Component } from 'react'
import { Progress } from 'reactstrap'
// import Animate from 'react-move/Animate'
// import { easeExpOut } from 'd3-ease'

export default class ProgressBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      addProgress: false
    }
  }

  componentDidMount () {
    this.setState({ addProgress: !this.state.addProgress })
  }

  render () {
    return (
      <div>
        {/* <Animate
          start={() => ({
            x: 0
          })}

          update={() => ({
            x: [this.state.addProgress ? 200 : 0],
            timing: { duration: 750, ease: easeExpOut }
          })}
        >
          {(state) => {
            const { x } = state

            return (
              <div>
                <Progress
                  className='mb-3'
                  value={this.props.progressValue}
                  style={{
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`
                  }}
                />
              </div>
            )
          }}
        </Animate> */}
        <Progress className='mb-3' value={this.props.progressValue} />
        <style global jsx>{`           
          .progress {
            background-color: transparent !important;
            height: 2px !important;
          }
          .progress-bar {
            background: -webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);
            height: 2px;
          }
        `}</style>
      </div>
    )
  }
}
