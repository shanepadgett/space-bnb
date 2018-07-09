import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import DateSelector from './DateSelector'

export default class DateWrapper extends Component {
  render () {
    return (
      <div>
        <Jumbotron className='pt-0'>
          <Container>
            <h1 className='display-3'>Mercury</h1>
            <p className='lead'>Select your dates of travel:</p>
            <DateSelector />
            <p className='mt-3'>Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods. Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and never exceeds 28° away from the Sun. When viewed from Earth, this proximity to the Sun means the planet can only be seen near the western or eastern horizon during the early evening or early morning. At this time it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which reoccurs over the so-called synodic period approximately every 116 days.
            </p>
          </Container>
        </Jumbotron>
        <style global jsx>{` 
              .jumbotron {
                background: transparent !important;
              }
              .display-3 {
                color: #fff;
              }

        `}</style>
      </div>
    )
  }
}
