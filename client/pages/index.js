import { Component } from 'react'
import Link from 'next/link'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import EventBus from 'eventing-bus'
import events from '../lib/constants/eventConstants'
import planetConfig from '../lib/threeJS/sceneSubjects/planetConfig'

class Index extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  onPlanetSelectButtonPressed (planetName, e) {
    e.preventDefault()
    EventBus.publish(events.selectPlanet, planetName)
  }

  render () {
    return (
      <div>
        <div className='dropdown-wrapper'>
          {/* <Link href='/about'><Button color='primary'>About</Button></Link> */}
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className='btn btn-outline-danger'>
              <i className='fas fa-angle-right' />
              Select Planet
              <i className='fas fa-angle-left' />
            </DropdownToggle>
            <DropdownMenu className='drop-down'>
              {Object.keys(planetConfig).map(key => {
                return (
                  <DropdownItem
                    key={key}
                    color='secondary'
                    onClick={this.onPlanetSelectButtonPressed.bind(this, key)}
                  >
                    {key.charAt(0).toUpperCase().concat(key.slice(1))}
                  </DropdownItem>
                )
              })}
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <style global jsx>{` 
          .dropdown-wrapper {
            text-align: center;
            position: absolute; 
            bottom: 100px; 
            left: 0;
            width: 100%;
          }
          
          .card-wrapper {
            position: absolute; 
            width: 100%;
            right: 0;
            top: 100px;
            display: none;
          }
          
          .card {
            background: rgba(0, 0, 0, 0.5);
          }
          
          .card-title {
            color: #fff;
          }
          
          .dropdown-menu {
            width: 100%;
            background: rgba(0, 0, 0, 0.5) !important;            
          }

          .dropdown-item {            
            color: #fff !important;
          }

          .dropdown-item:hover {            
            background: rgba(63, 63, 63, 0.5) !important;
          }

          
          .planet-btn {
            color: #fff;
            border-radius: 2px;
          }
          
          .btn-outline-danger:hover {
            color: #000;
          }
          
          .fa-angle-right {
              -webkit-animation-duration: 2s;
              animation-duration: 2s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
              -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              -webkit-animation-iteration-count: infinite;
              -webkit-animation-name: bounceRight;
              animation-name: bounceRight;
            }
            @-webkit-keyframes bounceRight {
              0%, 100% {
                -webkit-transform: translateX(-5px);
                color: #CB5A54;
              }
              50% {
                -webkit-transform: translateX(-10px);
                color: #000;
              }
            }
            @keyframes bounceRight {
              0%, 100% {
                transform: translateX(-5px);
                color: #CB5A54;
              }
              50% {
                transform: translateX(-10px);
                color: #000;
              }
            }
          
          .fa-angle-left {
              -webkit-animation-duration: 2s;
              animation-duration: 2s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
              -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
              animation-iteration-count: infinite;
              -webkit-animation-iteration-count: infinite;
              -webkit-animation-name: bounceLeft;
              animation-name: bounceLeft;
            }
            @-webkit-keyframes bounceLeft {
              0%, 100% {
                -webkit-transform: translateX(5px);
                color: #CB5A54;
              }
              50% {
                -webkit-transform: translateX(10px);
                color: #000;
              }
            }
            @keyframes bounceLeft {
              0%, 100% {
                transform: translateX(5px);
                color: #CB5A54;
              }
              50% {
                transform: translateX(10px);
                color: #000;
              }
            }
        `}</style>
      </div>
    )
  }
}

export default Index
