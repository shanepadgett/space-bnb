import { Component } from 'react'
import SpaceScreen from '../components/SpaceScreen'
import DateWrapper from '../components/SelectDates/DateWrapper'
import ProgressBar from '../components/ProgressBar'
import NavButtons from '../components/NavButtons'
import moment from 'moment'

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

  setStartDate (date) {
    this.setState({
      startDate: date
    })
  }

  setEndDate (date) {
    this.setState({
      endDate: date
    })
    console.log(this.state)
  }
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div>
        <SpaceScreen />
        <NavButtons />
        <ProgressBar />
        <DateWrapper selection={this.props.query.name} setEndDate={this.setEndDate} setStartDate={this.setStartDate} startDate={this.state.startDate} endDate={this.state.endDate} />
      </div>
    )
  }
}
