import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PlanetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  resorts: [{
    type: Schema.Types.ObjectId,
    ref: 'Resort'
  }]
})

const Planet = mongoose.model('Planet', PlanetSchema)

export default Planet
