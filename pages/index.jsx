import Link from 'next/link'
import Button from '../components/Button'

const Index = () => (
  <div>
    <Button />
    <Link href='/users'>
      <p>Users</p>
    </Link>
  </div>
)

export default Index
