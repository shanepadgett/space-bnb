import React, { Component } from 'react'
import ResortCard from '../components/ResortCard'
import ProgressBar from '../components/ProgressBar'
import NavButtons from '../components/NavButtons'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'

const imgArr = [
  'https://cnet4.cbsistatic.com/img/Y62BsY2G9ZDzsjs3vxWC-8-8_jY=/970x0/2017/09/29/b0b65195-ec68-4394-922b-a7c3611d2e22/elon-musk-mars-colony.jpg',
  'https://3.bp.blogspot.com/-eQJLYrVBBC4/VoQC0BLcORI/AAAAAAAABZU/AZgHRD5CYxE-acaD52EVG_UC_AofD2UFwCPcBGAYYCw/w1200-h630-p-k-no-nu/Mars%2Bbase%2B1-03%2Bby%2BBryan%2BVersteeg%2B%25282013%2529.jpg',
  'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0OS85Njcvb3JpZ2luYWwvbWFycy1jb2xvbnktaGFiaXRhdC5qcGc=',
  'https://stillnessinthestorm.com/wp-content/uploads/2017/07/mauricio-pampin-mars5-1.jpg'
]

export default class Resort extends Component {
  static async getInitialProps () {
    const resortsRes = await axios.get('/api/resorts')
    const resorts = resortsRes.data
    resorts.forEach(resort => {
      resort.images = imgArr
    })
    return { resorts }
  }

  render () {
    return (
      <div className='reservation-bg'>
        <NavButtons />
        <ProgressBar />
        <h1 className='text-center display-4 m-2 text-secondary'>Select Resort</h1>
        <Row>
          <Col xs={{size: 2, offset: 5}}>
            <hr className='bg-dark' />
          </Col>
        </Row>
        <div className='resort-wrapper'>
          <Container>
            <Row>
              { this.props.resorts.map(resort => <ResortCard resort={resort} />) }
            </Row>
          </Container>
        </div>

        <style jsx>{`
          .resort-wrapper {
            margin-top: 20px;
          }
        `}</style>
      </div>
    )
  }
}