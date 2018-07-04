import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Review = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  rating: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
})

export default mongoose.model('Review', Review)
