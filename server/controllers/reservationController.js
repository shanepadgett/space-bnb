// import Resort from '../db/models/resort'
import { Reservation } from '../db/models'
import mongoose from 'mongoose'

export const createReservation = ({body}, res, _) => {
  const reqData = {...body}
  reqData.user = new mongoose.Types.ObjectId(body.user)
  reqData.planet = new mongoose.Types.ObjectId(body.planet)
  reqData.resort = new mongoose.Types.ObjectId(body.resort)
  reqData.rocket = new mongoose.Types.ObjectId(body.rocket)
  reqData.suit = new mongoose.Types.ObjectId(body.suit)

  Reservation.create(reqData)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
