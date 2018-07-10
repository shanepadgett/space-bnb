import * as THREE from 'three'

export default {
  mercury: {
    name: 'mercury',
    nickname: 'The Swift Planet',
    quickFacts: {
      day: '59 Earth days',
      year: '88 Earth days',
      radius: '1,516 miles',
      planetType: 'Terrestrial',
      moons: '0'
    },
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
      planetType: 'Terrestrial',
      moons: '0'
    },
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
      planetType: 'Terrestrial',
      moons: '1'
    },
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
      planetType: 'Moon',
      moons: '0'
    },
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
      planetType: 'Terrestrial',
      moons: '2'
    },
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
      planetType: 'Gas giant',
      moons: '53 confirmed'
    },
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
      planetType: 'Gas giant',
      moons: '53 confirmed'
    },
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
    }
  },
  uranus: {
    name: 'uranus',
    nickname: 'The Ice Giant',
    quickFacts: {
      day: '17 hours 14 minutes',
      year: '84 Earth years',
      radius: '15,759.2 miles',
      planetType: 'Ice Giant',
      moons: '27'
    },
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
      planetType: 'Ice Giant',
      moons: '13 confirmed'
    },
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
