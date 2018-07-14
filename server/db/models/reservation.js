import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  departure: {
    type: Date,
    required: true
  },
  return: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  resort: {
    type: String,
    required: true
  },
  transport: {
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
