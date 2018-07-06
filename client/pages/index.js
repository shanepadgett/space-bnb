import React from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Index = ({ resorts }) => (
  <div>
    <Header headerText='Select Travel Dates' />
    <h1 className='text-center'>Select Travel Dates</h1>
    {resorts.map(resort => <img key={resort._id} src={resort.images[0]} />)}
    <style jsx>{`
      h1 {
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
