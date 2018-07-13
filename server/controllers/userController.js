// import Resort from '../db/models/resort'
import { User } from '../db/models'

export const createUser = ({body}, res, _) => {
  User.create(body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
