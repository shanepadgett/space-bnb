import * as THREE from 'three'

export default {
  mercury: {
    name: 'mercury',
    nickname: 'The Swift Planet',
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
