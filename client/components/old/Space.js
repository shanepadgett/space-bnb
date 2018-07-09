const Space = () => (
  <div className='space.js'>
    <div id='space' />
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title' />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container card-wrapper'>
      <div className='row'>
        <div className='offset-md-6 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title' />
              <h6 className='card-subtitle mb-2 text-muted'>Information</h6>
              <p className='card-text'>
                Distance from Sun: 67.24 million mi
                <br /> Radius: 3,760 mi
                <br /> Orbital period: 225 days
                <br /> Mass: 4.867 × 10^24 kg (0.815 M⊕)
                <br /> Equatorial rotation velocity: 6.52 km/h (1.81 m/s)
                <br /> Average orbital speed‎: ‎35.02 km/s
                <br /> Surface gravity‎: ‎8.87 m/s2; 0.904 g
                <br /> Surface area‎: ‎4.6023×108 km2
                <br />
              </p>
              <button type='button' className='btn btn-outline-danger visit-btn'>
                <i className='fas fa-angle-right' />
                <span className='visit-span' />
                <i className='fas fa-angle-left' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='planet-button-wrapper container'>
      <div className='row'>
        <div className='col-12'>
          <div className='btn-group' role='group' aria-label='Button group with nested dropdown'>
            <div className='btn-group' role='group'>
              <button id='btnGroupDrop1' type='button' className='btn btn-outline-danger' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                <i className='fas fa-angle-right' /> Select Planet
                <i className='fas fa-angle-left' />
              </button>
              <div className='dropdown-menu' aria-labelledby='btnGroupDrop1' x-placement='bottom-start' style={{position: 'absolute', willChange: 'transform', top: 0, left: 0, transform: 'translate3d(0px, 177px, 0px)'}}>
                <a className='dropdown-item planet-btn' data-name='mercury' href='#'>Mercury</a>
                <a className='dropdown-item planet-btn' data-name='venus' href='#'>Venus</a>
                <a className='dropdown-item planet-btn' data-name='earth' href='#'>Earth</a>
                <a className='dropdown-item planet-btn' data-name='moon' href='#'>Moon</a>
                <a className='dropdown-item planet-btn' data-name='mars' href='#'>Mars</a>
                <a className='dropdown-item planet-btn' data-name='jupiter' href='#'>Jupiter</a>
                <a className='dropdown-item planet-btn' data-name='saturn' href='#'>Saturn</a>
                <a className='dropdown-item planet-btn' data-name='uranus' href='#'>Uranus</a>
                <a className='dropdown-item planet-btn' data-name='neptune' href='#'>Neptune</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Space
