const Button = ({text, onClickHandler}) => (
  <div>
    <button className='btn btn-block btn-primary' onClick={onClickHandler}>{text}</button>

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
