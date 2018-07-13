// import Resort from '../db/models/resort'
import { Reservation } from '../db/models'
import mongoose from 'mongoose'

export const createReservation = ({body}, res, _) => {
  body.user = new mongoose.Types.ObjectId(body.user)
  Reservation.create(body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
