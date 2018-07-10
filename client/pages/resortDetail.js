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
      <div>
        <h1>{this.props.resort.name}</h1>
      </div>
    )
  }
}

export default ResortDetail
