import Link from 'next/link'
import Navbar from '../components/Navbar'

const Index = () => (
  <div>
    <Navbar />
    <Link href='/users'>
      <p>Users</p>
    </Link>
  </div>
)

export default Index
