import mongoose from 'mongoose'
import faker from 'faker'

const generateResorts = (resortIdArr) => {
  const resortSeeds = []

  for (let i = 0; i < resortIdArr.length; i++) {
    const amenitiesArr = []

    for (let k = 0; k < ((Math.random() * 10) + 4); k++) {
      amenitiesArr.push(faker.commerce.productAdjective())
    }

    const resort = {
      _id: resortIdArr[i],
      name: faker.company.companyName(),
      price: faker.commerce.price(2000, 20000, 0),
      summary: faker.lorem.paragraphs(3),
      amenities: amenitiesArr,
      reviews: []
    }

    resortSeeds.push(resort)
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
