import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Rocket = new Schema({
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  features: [String],
  image: {
    type: String,
    required: true
  },
  renderUrl: {
    type: String,
    required: true
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
})

export default mongoose.model('Rocket', Rocket)
