import Link from 'next/link'

const NavBrand = () => (
  <div>
    <Link href='/'><img src='/static/images/rocket-icon.svg' className='mt-2 mb-2' /></Link>
    <style jsx>{`
      img {
        width: 60px;
        height: 60px;
        cursor: pointer;
        color: white;
      }
    `}</style>
  </div>
)

export default NavBrand
