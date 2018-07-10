import { Component } from 'react'
import axios from 'axios'

class ResortDetail extends Component {
  static async getInitialProps ({ query }) {
    const resortRes = await axios.get(`/api/resort/${query.resortId}`)
    const resort = resortRes.data

    return { resort }
  }

  render () {
    return (
      <div className='reservation-bg fixed-to-bg'>
        <img src={this.props.resort.images[0]} className='fixed-to-bg' />
        <h1 className='text-light'>{this.props.resort.name}</h1>

        <style jsx>{`
          img {
            opacity: 0.2;
            filter: blur(10px);
            transform: scale(1.1);
          }          
        `}</style>
        <style global jsx>{`
          .reservation-bg {
            background: rgba(0, 0, 0, 1);
          }          
        `}</style>
      </div>
    )
  }
}

export default ResortDetail
