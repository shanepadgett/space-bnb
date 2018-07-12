import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  planet: {
    type: Schema.Types.ObjectId,
    ref: 'Planet'
  },
  resort: {
    type: Schema.Types.ObjectId,
    ref: 'Resort'
  },
  rocket: {
    type: Schema.Types.ObjectId,
    ref: 'Rocket'
  },
  suit: {
    type: Schema.Types.ObjectId,
    ref: 'Suit'
  }
})

const Reservation = mongoose.model('Reservation', ReservationSchema)

export default Reservation
