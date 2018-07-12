// import Resort from '../db/models/resort'
import { Reservation } from '../db/models'

export const createReservation = ({body}, res, _) => {
  Reservation.create(body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
