import { Component } from 'react'
import { Container, Row } from 'reactstrap'
import ResortDetailImages from '../components/ResortDetail/ResortDetailImages'
import ResortDetails from '../components/ResortDetail/ResortDetails'
import axios from 'axios'

class ResortDetail extends Component {
  static async getInitialProps ({ query }) {
    const resortRes = await axios.get(`/api/resort/${query.resortId}`)
    const resort = resortRes.data

    return { resort }
  }

  render () {
    return (
      <div className=''>
        <div className='reservation-bg fixed-to-bg'>
          <img src={this.props.resort.images[0]} className='fixed-to-bg' />
        </div>
        <Container>
          <Row>
            <h1 className='text-light text-center w-100'>
              {this.props.resort.name}
            </h1>
          </Row>
          <ResortDetailImages images={this.props.resort.images} />
          <ResortDetails
            summary={this.props.resort.summary}
            amenities={this.props.resort.amenities}
            reviews={this.props.resort.reviews}
          />
        </Container>
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
