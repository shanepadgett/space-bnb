import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Resort = new Schema({
  name: {
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
  amenities: [
    {
      text: String
    }
  ],
  images: [
    {
      src: String
    }
  ],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
})

export default mongoose.model('Resort', Resort)
