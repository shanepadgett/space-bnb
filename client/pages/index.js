import Link from 'next/link'
import Header from '../components/Header'

const Index = () => (
  <div>
    <Header headerText='Select Travel Dates' />
    <Link href='/users'>
      <p>Users</p>
    </Link>
  </div>
)

export default Index
