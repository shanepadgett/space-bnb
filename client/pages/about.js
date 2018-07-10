import { Component } from 'react'
import SpaceScreen from '../components/SpaceScreen'
import DateWrapper from '../components/SelectDates/DateWrapper'
import ProgressBar from '../components/ProgressBar'
import NavButtons from '../components/NavButtons'
import moment from 'moment'
import EventBus from 'eventing-bus'
import events from '../lib/constants/eventConstants'

export default class About extends Component {
  constructor (props) {
    super(props)

    this.state = {
      startDate: moment(),
      endDate: moment()
    }
    this.setStartDate = this.setStartDate.bind(this)
    this.setEndDate = this.setEndDate.bind(this)
  }

  static async getInitialProps ({ query }) {
    return { query }
  }

  componentDidMount () {
    EventBus.publish(events.choosePlanet, this.props.query.name)
  }

  setStartDate (date) {
    this.setState({
      startDate: date
    })
  }

  setEndDate (date) {
    this.setState({
      endDate: date
    })
    console.log(
      this.state.startDate.format('MM-DD-YYYY'),
      this.state.endDate.format('MM-DD-YYYY')
    )
  }
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div>
        <SpaceScreen />
        <NavButtons
          dates={{
            name: this.props.query.name,
            start: this.state.startDate.format('MM-DD-YYYY'),
            end: this.state.endDate.format('MM-DD-YYYY')
          }}
        />
        <ProgressBar />
        <DateWrapper
          selection={this.props.query.name}
          setEndDate={this.setEndDate}
          setStartDate={this.setStartDate}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </div>
    )
  }
}
