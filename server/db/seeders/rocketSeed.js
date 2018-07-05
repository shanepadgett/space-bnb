import faker from 'faker'

const rockets = [
  {
    model: 'Falcon',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRcHKWvAFDWPHRgZRib512fjWBRoTmhoyPAKi9pjQN98ldyo7yg',
    features: [
      'Top Speed: 10,000kph',
      'Max Gs: 8',
      'Seat space: 8ft'
    ]
  },
  {
    model: 'Falcon Heavy',
    imgSrc: 'http://nick-stevens.com/wp-content/uploads/2017/03/renderz0400xx.jpg',
    features: [
      'Top Speed: 10,000kph',
      'Max Gs: 8',
      'Seat space: 8ft'
    ]
  },
  {
    model: 'Falcon X',
    imgSrc: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3MC83NTAvb3JpZ2luYWwvbmV3Z2xlbm4tN20tbGFyZ2UtODc5eDQ4NS5qcGc=',
    features: [
      'Top Speed: 10,000kph',
      'Max Gs: 8',
      'Seat space: 8ft'
    ]
  },
  {
    model: 'Atlas',
    imgSrc: 'https://copenhagensuborbitals.com/wp-content/uploads/2016/12/spicamission_rocketspace.jpg',
    features: [
      'Top Speed: 10,000kph',
      'Max Gs: 8',
      'Seat space: 8ft'
    ]
  },
  {
    model: 'Juniper5',
    imgSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ngl-in-flight-1523980138.jpg?resize=768:*',
    features: [
      'Top Speed: 10,000kph',
      'Max Gs: 8',
      'Seat space: 8ft'
    ]
  },
  {
    model: 'LM42',
    imgSrc: 'http://www.spaceflightinsider.com/wp-content/uploads/2017/05/Phantom-Express_XS-1_1280x720.jpg',
    features: [
      'Top Speed: 10,000kph',
      'Max Gs: 8',
      'Seat space: 8ft'
    ]
  }
]

const generateRockets = () => {
  const rocketSeeds = []

  for (let i = 0; i < rockets.length; i++) {
    const rocket = {
      model: rockets[i].model,
      price: faker.commerce.price(2000, 10000, 0),
      summary: faker.lorem.sentences(5),
      features: rockets[i].features,
      image: rockets[i].imgSrc,
      renderUrl: faker.internet.url,
      reviews: []
    }

    rocketSeeds.push(rocket)
  }

  return rocketSeeds
}

export default { generateRockets }
