import React, { Component } from 'react'
import ResortCard from '../components/ResortCard'
import ProgressBar from '../components/ProgressBar'
import ResortNav from '../components/Resort/ResortNav'
import axios from 'axios'
import { Container, Row, Jumbotron } from 'reactstrap'
import Logo from '../components/Global/Logo'
import resortImages from '../lib/configs/resortImages'

export default class Resort extends Component {
  constructor (props) {
    super(props)

    this.selectResort = this.selectResort.bind(this)
    this.state = {
      resortName: null
    }
  }

  static async getInitialProps ({ query }) {
    const resortsRes = await axios.get(`/api/resorts/${query.name}`)
    const resorts = resortsRes.data
    resorts.forEach(resort => {
      resort.images = resortImages[query.name]
    })
    return { query, resorts }
  }

  selectResort (name) {
    this.setState({
      resortName: name
    })
  }

  render () {
    return (
      <div className='bg-reservation'>
        <Logo />
        <ResortNav />
        <ProgressBar progressValue='40' />
        <Jumbotron className='pt-4 mb-0'>
          <Container>
            <h1 className='display-4'>{this.props.query.name}</h1>
            <p className='lead'>Select your resort:</p>
            <Row>
              {this.props.resorts.map(resort => <ResortCard key={resort._id} resort={resort} global={this.props.query} />)}
            </Row>
          </Container>
        </Jumbotron>
        <style global jsx>{`
          .bg-reservation {
            background-color: rgba(9, 9, 9, 0.8);
            min-height: 100%;
            min-width: 100%;
          } 
          .btn-outline-danger {
              border: 1px solid #FC5C65 !important;
              color: #FC5C65 !important;
            }
            
            .btn-outline-danger:hover {
              color: #000 !important;
              background: #FC5C65 !important;
              border: 1px solid #FC5C65 !important;
            }
            .jumbotron {
              background: transparent !important;
            }
            .display-4,
            .planet-nickname {
              color: #fff;
            }
            hr {
              display: block;
              height: 1px;
              border: 0;
              border-top: 1px solid #fff !important;
              margin: 1em 0;
              padding: 0; 
          }
        `}</style>
      </div>
    )
  }
}
