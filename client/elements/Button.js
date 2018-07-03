const Button = ({text}) => (
  <div>
    <button className='btn btn-block btn-primary'>{text}</button>

    <style jsx>{`
      button {
        background-color: transparent;
        border: 2px solid #Ec407A;
        font-size: 1rem;
      }
      button:hover {
        background-color: #Ec407A;
      }
    `}</style>
  </div>
)

export default Button
