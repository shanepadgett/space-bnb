import axios from 'axios'

const handleOnClick = () => {
  axios.post('api/user', {
    name: 'John Guy',
    age: 41
  })
}

const Button = () => (
  <button onClick={handleOnClick}>Add John</button>
)

export default Button
