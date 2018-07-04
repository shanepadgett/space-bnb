import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Planet = new Schema({
  name: String,
  resorts: [{
    name: String,
    price: Number,
    summary: String,
    amenities: [{
      text: String
    }],
    images: [{
      src: String
    }],
    reviews: [{
      name: String,
      image: String,
      rating: Number,
      summary: String
    }]
  }]
})

export default mongoose.model('Planet', Planet)
