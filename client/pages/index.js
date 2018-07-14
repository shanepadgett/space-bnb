import { Component } from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Row,
  Col
} from 'reactstrap'
import Link from 'next/link'
import planetConfig from '../lib/threeJS/sceneSubjects/planetConfig'
import PlanetMenu from '../components/Planet/PlanetMenu'
import EventBus from 'eventing-bus'
import events from '../lib/constants/eventConstants'
import Logo from '../components/Global/Logo'

class Index extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      selection: '',
      showMenu: false
    }
  }

  componentDidMount () {
    if (this.state.selection !== 'earth') {
      EventBus.publish(events.selectPlanet, 'earth')
      this.setState({
        selection: 'earth',
        showMenu: false
      })
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

    this.setState({
      selection: planetName,
      showMenu: true
    })
  }

  render () {
    return (
      <div>
        <Row className='d-flex justify-content-between w-100 m-0'>
          <Logo />
          <Link href='/reservations'>
            <Button outline color='secondary mt-3 mr-4'>Reservations</Button>
          </Link>
        </Row>
        <PlanetMenu
          selection={this.state.selection}
          showMenu={this.state.showMenu}
        />
        <div className='dropdown-wrapper'>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className='btn btn-outline-danger'>
              <i className='fas fa-angle-right' />
              Select Planet
              <i className='fas fa-angle-left' />
            </DropdownToggle>
            <DropdownMenu className='drop-down'>
              <DropdownItem header>Planets</DropdownItem>
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
            background: rgba(0, 0, 0, 0.5);
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
                color: #FC5C65;
              }
              50% {
                -webkit-transform: translateX(-10px);
                color: #000;
              }
            }
            @keyframes bounceRight {
              0%, 100% {
                transform: translateX(-5px);
                color: #FC5C65;
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
                color: #FC5C65;
              }
              50% {
                -webkit-transform: translateX(10px);
                color: #000;
              }
            }
            @keyframes bounceLeft {
              0%, 100% {
                transform: translateX(5px);
                color: #FC5C65;
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
