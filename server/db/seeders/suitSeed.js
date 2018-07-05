import faker from 'faker'

const suits = [
  {
    model: 'HyperX',
    imgSrc: 'https://static.turbosquid.com/Preview/2016/02/15__04_18_02/A7L_Apollo_and_Skylab_Spacesuit_36000.jpgc9ab2f47-6545-4e97-8cf5-3fd62b054aabOriginal-1.jpg',
    features: [
      '8 Hours Oxygen',
      'Temps < -180C',
      'Mylar Coated Felt'
    ]
  },
  {
    model: 'Talon-5',
    imgSrc: 'https://cdnb.artstation.com/p/assets/images/images/002/624/325/large/jonny-mars-artstaion-moden-space-suit-full-render.jpg?1463770722',
    features: [
      '8 Hours Oxygen',
      'Temps < -180C',
      'Mylar Coated Felt'
    ]
  },
  {
    model: 'The Jumper',
    imgSrc: 'https://i.pinimg.com/236x/33/3c/2e/333c2e2c8f4b17b02165135d8cb17808--diving-suit-chris-delia.jpg',
    features: [
      '8 Hours Oxygen',
      'Temps < -180C',
      'Mylar Coated Felt'
    ]
  },
  {
    model: 'Active Fit',
    imgSrc: 'https://i.pinimg.com/736x/f0/ac/64/f0ac64a191369557d52ff43a8c9a6c8e--dead-space-xbox.jpg',
    features: [
      '8 Hours Oxygen',
      'Temps < -180C',
      'Mylar Coated Felt'
    ]
  },
  {
    model: 'Opal-X',
    imgSrc: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10309864.jpg',
    features: [
      '8 Hours Oxygen',
      'Temps < -180C',
      'Mylar Coated Felt'
    ]
  },
  {
    model: 'JFM5000',
    imgSrc: 'https://cdna.artstation.com/p/assets/images/images/007/076/696/large/jeroen-tanis-render2.jpg?1503505411',
    features: [
      '8 Hours Oxygen',
      'Temps < -180C',
      'Mylar Coated Felt'
    ]
  }
]

const generateSuits = () => {
  const suitSeeds = []

  for (let i = 0; i < suits.length; i++) {
    const suit = {
      model: suits[i].model,
      price: faker.commerce.price(2000, 10000, 0),
      summary: faker.lorem.sentences(5),
      features: suits[i].features,
      image: suits[i].imgSrc,
      renderUrl: faker.internet.url,
      reviews: []
    }

    suitSeeds.push(suit)
  }

  return suitSeeds
}

export default { generateSuits }
