import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Planet = new Schema({
  name: {
    type: String,
    required: true
  },
  baseImageSrc: {
    type: String,
    required: true
  },
  bumpMapSrc: String,
  specMapSrc: String,
  resorts: [{
    type: Schema.Types.ObjectId,
    ref: 'Resort'
  }]
})

export default mongoose.model('Planet', Planet)
