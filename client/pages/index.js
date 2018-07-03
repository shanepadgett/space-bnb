import Link from 'next/link'
import Header from '../components/Header'

const Index = () => (
  <div>
    <Header headerText='Select Travel Dates' />
    <h1 className='text-center'>Select Travel Dates</h1>
    <Link href='/users'>
      <p>Users</p>
    </Link>

    <style jsx>{`
      h1 {
        color: white;
      }
    `}</style>
  </div>
)

export default Index
