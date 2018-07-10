import mongoose from 'mongoose'
import bluebird from 'bluebird'
import dotenv from 'dotenv'
import { User, Review, Suit, Rocket, Planet, Resort } from './models'
import {
  UserSeed,
  ReviewSeed,
  ResortSeed,
  SuitSeed,
  RocketSeed,
  PlanetSeed
} from './seeders'

dotenv.config()

const dev = process.env.NODE_ENV !== 'production'
const dbUrl = dev ? process.env.MONGODB_URI_DEV : process.env.MONGODB_URI_PROD

mongoose.connect(dbUrl, err => {
  if (err) throw err
  console.log('DB open')
})

mongoose.Promise = bluebird

mongoose.Model.seed = function (entities) {
  return this.create(entities)
}

// Get red IDs
const userIds = UserSeed.getUserIds()
const allReviewIds = []
const allResortIds = []

// Create data
const userData = UserSeed.generateUsers(userIds)

const seedPlanets = () => {
  return Planet.remove().exec()
    .then(() => {
      const planetData = PlanetSeed.generatePlanets()
      planetData.forEach(planet => {
        const resortIds = ResortSeed.getResortIds()
        planet.resorts = resortIds
        Array.prototype.push.apply(allResortIds, resortIds)
      })
      return Planet.seed(planetData)
    })
}

const seedResorts = () => {
  return Resort.remove().exec()
    .then(() => {
      const resortData = ResortSeed.generateResorts(allResortIds)
      resortData.forEach(resort => {
        const resortReviewIds = ReviewSeed.getReviewIds()
        resort.reviews = resortReviewIds
        Array.prototype.push.apply(allReviewIds, resortReviewIds)
      })
      return Resort.seed(resortData)
    })
}

const seedSuits = () => {
  return Suit.remove().exec().then(() => {
    const suitData = SuitSeed.generateSuits()
    suitData.forEach(suit => {
      const suitReviewIds = ReviewSeed.getReviewIds()
      suit.reviews = suitReviewIds
      Array.prototype.push.apply(allReviewIds, suitReviewIds)
    })
    return Suit.seed(suitData)
  })
}

const seedRockets = () => {
  return Rocket.remove().exec().then(() => {
    const rocketData = RocketSeed.generateRockets()
    rocketData.forEach(rocket => {
      const rocketReviewIds = ReviewSeed.getReviewIds()
      rocket.reviews = rocketReviewIds
      Array.prototype.push.apply(allReviewIds, rocketReviewIds)
    })
    return Rocket.seed(rocketData)
  })
}

const seedReviews = () => {
  return Review.remove().exec()
    .then(() => {
      const reviewData = ReviewSeed.generateReviews(allReviewIds, userIds)
      return Review.seed(reviewData)
    })
}

// Clear and seed the DB
User.remove()
  .exec()
  .then(() => {
    return User.seed(userData)
  })
  .then(() => seedPlanets())
  .then(() => seedResorts())
  .then(() => seedSuits())
  .then(() => seedRockets())
  .then(() => seedReviews())
  .then(() => {
    mongoose.disconnect()
  })
