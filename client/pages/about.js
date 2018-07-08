import Link from 'next/link'
import { Button } from 'reactstrap'

const About = () => (
  <div>
    <h1>About page</h1>
    <Link href='/'><Button color='danger'>Home</Button></Link>
  </div>
)

export default About
