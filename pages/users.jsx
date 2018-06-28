import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'

class Users extends Component {
  static async getInitialProps ({ req }) {
    const response = await axios.get('http://localhost:3000/api/users')
    const data = response.data
    return {
      AllUsers: data
    }
  }

  render () {
    return (
      <div>
        {this.props.AllUsers.map(user => <li key={user._id}>{user.name}</li>)}
        <Link href='/hello'>
          <p>Hello</p>
        </Link>
      </div>
    )
  }
}

export default Users
