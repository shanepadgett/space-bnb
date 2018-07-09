import { Component } from 'react'
import Link from 'next/link'
import { Button } from 'reactstrap'
import EventBus from 'eventing-bus'
import events from '../lib/constants/eventConstants'
import planetConfig from '../lib/threeJS/sceneSubjects/planetConfig'

class Index extends Component {
  onPlanetSelectButtonPressed (planetName, e) {
    e.preventDefault()
    EventBus.publish(events.selectPlanet, planetName)
  }

  render () {
    return (
      <div>
        <Link href='/about'><Button color='primary'>About</Button></Link>
        {Object.keys(planetConfig).map(key => {
          return <Button key={key} color='secondary' onClick={this.onPlanetSelectButtonPressed.bind(this, key)}>{key}</Button>
        })}
      </div>
    )
  }
}

export default Index
