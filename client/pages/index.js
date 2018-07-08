import { Component } from 'react'
import Link from 'next/link'
import { Button } from 'reactstrap'
import EventBus from 'eventing-bus'
import events from '../lib/constants/eventConstants'

class Index extends Component {
  onPlanetSelectButtonPressed (planetName, e) {
    e.preventDefault()
    EventBus.publish(events.selectPlanet, planetName)
  }

  render () {
    return (
      <div>
        <Link href='/about'><Button color='primary'>About</Button></Link>
        <Button color='secondary' onClick={this.onPlanetSelectButtonPressed.bind(this, 'venus')}>Venus</Button>
        <Button color='secondary' onClick={this.onPlanetSelectButtonPressed.bind(this, 'mercury')}>Mercury</Button>
      </div>
    )
  }
}

export default Index
