import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReservationSchema = new Schema({
  departDate: {
    type: Date,
    required: true
  },
  returnDate: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
