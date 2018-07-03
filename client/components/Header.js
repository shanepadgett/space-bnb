import HeaderBrand from '../elements/HeaderBrand'
import HeaderText from '../elements/HeaderText'
import Button from '../elements/Button'

const Header = ({ totalPrice }) => (
  <div className='header'>
    <div className='container-fluid'>
      <div className='d-flex flex-row'>
        <div className='col-4'>
          <HeaderBrand />
        </div>

        <div className='col-4 my-auto'>
          <HeaderText text={`Total Price $${totalPrice || 0}`} />
        </div>

        <div className='col-4 my-auto'>
          <div className='d-flex justify-content-end'>
            <div className='float-left my-auto'>
              <Button text='Prev' />
            </div>
            <div className='float-right pl-5'>
              <Button text='Next' />
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .float-left {
        float: left;
      }
      .float-right {
        float: right;
      }
    `}</style>
  </div>
)

export default Header
