import mongoose from 'mongoose'
import faker from 'faker'

const imgArr = [
  'https://cnet4.cbsistatic.com/img/Y62BsY2G9ZDzsjs3vxWC-8-8_jY=/970x0/2017/09/29/b0b65195-ec68-4394-922b-a7c3611d2e22/elon-musk-mars-colony.jpg',
  'https://3.bp.blogspot.com/-eQJLYrVBBC4/VoQC0BLcORI/AAAAAAAABZU/AZgHRD5CYxE-acaD52EVG_UC_AofD2UFwCPcBGAYYCw/w1200-h630-p-k-no-nu/Mars%2Bbase%2B1-03%2Bby%2BBryan%2BVersteeg%2B%25282013%2529.jpg',
  'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0OS85Njcvb3JpZ2luYWwvbWFycy1jb2xvbnktaGFiaXRhdC5qcGc=',
  'https://stillnessinthestorm.com/wp-content/uploads/2017/07/mauricio-pampin-mars5-1.jpg'
]

const generateResorts = (resortIdArr) => {
  const resortSeeds = []

  for (let i = 0; i < resortIdArr.length; i++) {
    const amenitiesArr = []

    for (let k = 0; k < ((Math.random() * 10) + 4); k++) {
      amenitiesArr.push(faker.commerce.productAdjective())
    }

    const imagesArr = []

    for (let j = 0; j < 4; j++) {
      imagesArr.push(imgArr[Math.floor(Math.random() * imgArr.length)])
    }

    const review = {
      _id: resortIdArr[i],
      name: faker.company.companyName(),
      price: faker.commerce.price(2000, 20000, 0),
      summary: faker.lorem.paragraphs(3),
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
