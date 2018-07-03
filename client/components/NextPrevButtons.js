import Button from '../elements/Button'

const NextPrevButtons = () => (
  <div className='row'>
    <div className='col-3 offset-5'>
      <Button text='Prev' />
    </div>
    <div className='col-3 offset-1'>
      <Button text='Next' />
    </div>
  </div>
)

export default NextPrevButtons
