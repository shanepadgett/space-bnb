const HeaderText = ({ text }) => (
  <div className='d-flex'>
    <p className='m-0 my-auto'>
      {text || 'No Text Sent'}
    </p>

    <style jsx>{`
      p {
        font-size: 2rem;
        color: white;
      }
    `}</style>
  </div>
)

export default HeaderText
