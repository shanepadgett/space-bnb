import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Link from 'next/link'

const Index = ({ resorts }) => (
  <div>
    <Link href='/about'><a>About</a></Link>
    <style jsx>{`
      h1 {
        color: white;
      }
      a {
        color: white;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async ({ req }) => {
  if (req) {
    const baseUrl = req.headers.host
    const res = await axios.get(`http://${baseUrl}/api/resorts`)
    const data = res.data
    return { resorts: data }
  } else {
    const res = await axios.get('api/resorts')
    const data = res.data
    return { resorts: data }
  }
}

export default Index
