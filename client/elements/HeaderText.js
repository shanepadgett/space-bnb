const HeaderText = ({ text }) => (
  <div className='text-center'>
    <p className='m-0'>
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
