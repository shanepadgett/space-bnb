import User from '../models/user'

const user = (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age
  })
  newUser
    .save()
    .then(savedData => {
      res.json(savedData)
    })
    .catch(e => next(e))
}

export const getUser = (req, res, next) => {
  User.find({}, (error, events) => {
    if (error) throw error
    res.json(events)
  })
}

export default user
