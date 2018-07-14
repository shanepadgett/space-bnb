import mongoose from 'mongoose'
import faker from 'faker'

const generateReviews = (reviewIdArr, userIdArr) => {
  const reviewSeeds = []

  for (let i = 0; i < reviewIdArr.length; i++) {
    const rand = Math.floor(Math.random() * userIdArr.length)
    const userId = userIdArr[rand]
    const review = {
      _id: reviewIdArr[i],
      user: mongoose.Types.ObjectId(userId),
      rating: faker.random.number({min: 1, max: 5}),
      summary: faker.lorem.paragraph()
    }

    reviewSeeds.push(review)
  }

  return reviewSeeds
}

const getReviewIds = () => {
  const idArr = []
  const rand = Math.floor(Math.random() * 5) + 1
  for (let i = 0; i < rand; i++) {
    idArr.push(new mongoose.Types.ObjectId())
  }

  return idArr
}

export default { generateReviews, getReviewIds }
