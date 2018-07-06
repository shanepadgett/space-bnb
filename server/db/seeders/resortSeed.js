import mongoose from 'mongoose'
import faker from 'faker'

const generateResorts = (resortIdArr) => {
  const resortSeeds = []

  for (let i = 0; i < resortIdArr.length; i++) {
    const amenitiesArr = [
      faker.commerce.productAdjective(),
      faker.commerce.productAdjective(),
      faker.commerce.productAdjective()
    ]

    const imagesArr = []

    for (let j = 0; j < 4; j++) {
      imagesArr.push(`${faker.image.city()}?t=${Math.floor(Math.random() * 1530853934590)}`)
    }

    const review = {
      _id: resortIdArr[i],
      name: faker.company.companyName(),
      price: faker.commerce.price(2000, 20000, 0),
      summary: faker.lorem.sentences(3),
      amenities: amenitiesArr,
      images: imagesArr,
      reviews: []
    }

    resortSeeds.push(review)
  }

  return resortSeeds
}

const getResortIds = () => {
  const idArr = []
  const rand = Math.floor(Math.random() * 10) + 1
  for (let i = 0; i < rand; i++) {
    idArr.push(new mongoose.Types.ObjectId())
  }

  return idArr
}

export default { generateResorts, getResortIds }
