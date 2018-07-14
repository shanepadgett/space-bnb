// import Resort from '../db/models/resort'
import { User } from '../db/models'

export const createUser = ({body}, res, _) => {
  User.create(body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

export const getUser = (req, res, _) => {
  User.findOne({email: req.params.email})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}
