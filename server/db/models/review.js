import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
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

const Review = mongoose.model('Review', ReviewSchema)

export default Review
