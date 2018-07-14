import * as THREE from 'three'

export default {
  mercury: {
    name: 'mercury',
    nickname: 'The Swift Planet',
    quickFacts: {
      day: '59 Earth days',
      year: '88 Earth days',
      radius: '1,516 miles',
      type: 'Terrestrial',
      moons: '0'
    },
    description: `The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Mercury is appropriately named for the swiftest of the ancient Roman gods.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/mercury.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: 1.5,
        py: 1.5,
        pz: 32
      },
      rotation: {
        rx: 0.001,
        ry: 0.001,
        rz: 0.00
      }
    }
  },
  venus: {
    name: 'venus',
    nickname: 'The Morning Star',
    quickFacts: {
      day: '243 Earth days',
      year: '225 Earth days',
      radius: '3,760 miles',
      type: 'Terrestrial',
      moons: '0'
    },
    description: `Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/venus.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: -0.75,
        py: -3,
        pz: 20
      },
      rotation: {
        rx: 0.001,
        ry: 0.001,
        rz: 0.00
      }
    }
  },
  earth: {
    name: 'earth',
    nickname: 'The Blue Planet',
    quickFacts: {
      day: '23.9 hours',
      year: '365.25 Earth days',
      radius: '3,959 miles',
      type: 'Terrestrial',
      moons: '1'
    },
    description: `Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/earth.jpg',
      bumpMap: '../static/images/earth-bump.jpg',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: 0,
        py: 0,
        pz: 9
      },
      rotation: {
        rx: 0,
        ry: 0.001
      }
    }
  },
  moon: {
    name: 'moon',
    nickname: 'Luna',
    quickFacts: {
      day: '24.83 hours',
      year: '354.36 Earth days',
      radius: '1,079.6 miles',
      type: 'Moon',
      moons: '0'
    },
    description: `Earth's Moon is the only place beyond Earth where humans have set foot, so far. The brightest and largest object in our night sky, the Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years. The Moon was likely formed after a Mars-sized body collided with Earth several billion years ago. Earth's only natural satellite is simply called "the Moon" because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610. In Latin, the Moon was called Luna, which is the main adjective for all things Moon-related: lunar`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/moon.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: -0.5,
        py: 2.25,
        pz: 3
      },
      rotation: {
        rx: 0.001,
        ry: 0.001
      }
    }
  },
  mars: {
    name: 'mars',
    nickname: 'The Red Planet',
    quickFacts: {
      day: '24.6 hours',
      year: '687 Earth days',
      radius: '2,106 miles',
      type: 'Terrestrial',
      moons: '2'
    },
    description: `The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago. Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute; for example, the Egyptians called it "Her Desher," meaning "the red one." Even today, it is frequently called the "Red Planet" because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/mars.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: 10,
        py: 5,
        pz: -20
      },
      rotation: {
        rx: 0.001,
        ry: 0.001
      }
    }
  },
  jupiter: {
    name: 'jupiter',
    nickname: 'The Giant Planet',
    quickFacts: {
      day: '9.92496 Hours',
      year: '4,333 Earth days',
      radius: '43,440.7 miles',
      type: 'Gas giant',
      moons: '53 confirmed'
    },
    description: `Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter is surrounded by more than 65 known moons. Scientists are most interested in the Galilean satellites – the four largest moons discovered by Galileo Galilei in 1610: Io, Europa, Ganymede and Callisto. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice. Jupiter is named for the king of the ancient Roman gods.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/jupiter.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: -0.5,
        py: -5,
        pz: -60
      },
      rotation: {
        rx: 0.001,
        ry: 0.001
      }
    }
  },
  saturn: {
    name: 'saturn',
    nickname: 'The Ringed Planet',
    quickFacts: {
      day: '10.7 hours',
      year: '29 Earth years',
      radius: '36,183.7 miles',
      type: 'Gas giant',
      moons: '53 confirmed'
    },
    description: `Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/saturn.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: 1,
        py: -15,
        pz: -100
      },
      rotation: {
        rx: 0.001,
        ry: 0.001
      }
    },
    ring: {
      radius: 1.5,
      segments: 2,
      images: {
        diffuseMap: '../static/images/saturn-ring.png',
        bumpMap: '',
        specularMap: ''
      },
      imageOptions: {
        bumpScale: 0.1,
        specular: new THREE.Color('grey')
      },
      transform: {
        position: {
          px: 1,
          py: -15,
          pz: -100
        },
        rotation: {
          rx: -45,
          ry: -70
        }
      }
    }
  },
  uranus: {
    name: 'uranus',
    nickname: 'The Ice Giant',
    quickFacts: {
      day: '17 hours 14 minutes',
      year: '84 Earth years',
      radius: '15,759.2 miles',
      type: 'Ice Giant',
      moons: '27'
    },
    description: `The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball. The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/uranus.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: -2.25,
        py: 4,
        pz: -120
      },
      rotation: {
        rx: 0.001,
        ry: 0.001
      }
    }
  },
  neptune: {
    name: 'neptune',
    nickname: 'The Blue Planet',
    quickFacts: {
      day: '16 hours',
      year: '165 Earth years',
      radius: '15,299.4 miles',
      type: 'Ice Giant',
      moons: '13 confirmed'
    },
    description: `Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.`,
    radius: 1,
    segments: 50,
    images: {
      diffuseMap: '../static/images/neptune.jpg',
      bumpMap: '',
      specularMap: ''
    },
    imageOptions: {
      bumpScale: 0.1,
      specular: new THREE.Color('grey')
    },
    transform: {
      position: {
        px: -10,
        py: -10,
        pz: -140
      },
      rotation: {
        rx: 0.001,
        ry: 0.001
      }
    }
  }
}
