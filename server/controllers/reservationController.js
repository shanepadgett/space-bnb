// import Resort from '../db/models/resort'
import { Reservation, User } from '../db/models'
import mongoose from 'mongoose'

export const createReservation = ({ body }, res, _) => {
  body.user = new mongoose.Types.ObjectId(body.user)
  Reservation.create(body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

export const getReservations = (req, res, _) => {
  if (req.params.email) {
    User.findOne({ email: req.params.email })
      .then(user => {
        return Reservation.findOne({ user: user }).populate('user')
      })
      .then(reservation => {
        res.json(reservation)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    Reservation.find({})
      .populate('user')
      .then(reservation => res.json(reservation))
      .catch(err => res.json(err))
  }
}
