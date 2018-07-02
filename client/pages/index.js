import Link from 'next/link'
import Button from '../elements/Button'

const Index = () => (
  <div className='container'>
    <Button text='The Button' />
    <Link href='/users'>
      <p>Users</p>
    </Link>
  </div>
)

export default Index
