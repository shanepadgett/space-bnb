import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Suit = new Schema({
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
  features: [
    {
      text: String
    }
  ],
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

export default mongoose.model('Suit', Suit)
