import Link from 'next/link'

const About = () => (
  <div>
    <h1>About page</h1>
    <Link href='/'><a>Home</a></Link>
    <style jsx>{`
    h1 {
      color: white;
    }
  `}</style>
  </div>
)

export default About
