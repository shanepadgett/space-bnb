const Button = ({text}) => (
  <div>
    <button className='btn btn-block btn-primary'>{text}</button>

    <style jsx>{`
      button {
        background-color: #Ec407A;
        font-size: 1rem;
      }
    `}</style>
  </div>
)

export default Button
