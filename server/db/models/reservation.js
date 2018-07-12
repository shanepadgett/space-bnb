import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  planet: {
    type: String,
    required: true
  },
  resort: {
    type: String,
    required: true
  },
  rocket: {
    type: String,
    required: true
  },
  suit: {
    type: String,
    required: true
  }
})

const Reservation = mongoose.model('Reservation', ReservationSchema)

export default Reservation
