import mongoose from 'mongoose'
import faker from 'faker'

// const rocketReviewSummaries = [
//   'An excellent ride!',
//   'Didnt really like this one. It was kind of lame.',
//   'Fast and furious! Cant recommend this ride enough!',
//   'It was so bad I thought it was going to explode the whole trip.'
// ]

// const suitReviewSummaries = [
//   'Easily the best suit ive ever used.',
//   'I was uncomfortable, sweaty, and miserable. Not recommended.',
//   'Great fit, awesome features...cant recommend enough!'
// ]

// const resortReviewSummaries = [
//   'What a view! Ive been to this planet 3 times and this was definitely the best!',
//   'It stank dude. Seriously, my dad paid for me to sleep in a sewer. Gross',
//   'The atmosphere is amazing, the food is great, the activities are numerous...what else could you ask for!?'
// ]

const generateReviews = (reviewIdArr, userIdArr) => {
  const reviewSeeds = []

  for (let i = 0; i < reviewIdArr.length; i++) {
    const rand = Math.floor(Math.random() * userIdArr.length)
    const userId = userIdArr[rand]
    const review = {
      _id: reviewIdArr[i],
      user: mongoose.Types.ObjectId(userId),
      rating: faker.random.number({min: 1, max: 5}),
      summary: faker.lorem.sentence()
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
