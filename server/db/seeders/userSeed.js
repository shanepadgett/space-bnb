import mongoose from 'mongoose'
import faker from 'faker'

const generateUsers = idArr => {
  const userSeeds = []

  for (let i = 0; i < idArr.length; i++) {
    const user = {
      _id: idArr[i],
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      image: faker.internet.avatar()
    }

    userSeeds.push(user)
  }

  return userSeeds
}

const getUserIds = () => {
  const idArr = []
  for (let i = 0; i < 30; i++) {
    idArr.push(new mongoose.Types.ObjectId())
  }

  return idArr
}

export default { generateUsers, getUserIds }
