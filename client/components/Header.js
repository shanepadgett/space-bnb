import HeaderBrand from '../elements/HeaderBrand'
import HeaderText from '../elements/HeaderText'
import Button from '../elements/Button'

const Header = ({ headerText, totalPrice }) => (
  <div className='header'>
    <div className='container-fluid'>
      <div className='row d-flex justify-content-between'>
        <div className='pl-3'>
          <HeaderBrand />
        </div>

        <HeaderText text={`Total Price $${totalPrice || 0}`} />

        <HeaderText text={headerText} />

        <div className='d-flex'>
          <div className='float-left my-auto'>
            <Button text='Prev' />
          </div>
          <div className='float-right pl-5 pr-3 my-auto'>
            <Button text='Next' />
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
