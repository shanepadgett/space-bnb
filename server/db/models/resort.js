import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ResortSchema = new Schema({
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
  amenities: [String],
  images: [String],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
})

const Resort = mongoose.model('Resort', ResortSchema)

export default Resort
