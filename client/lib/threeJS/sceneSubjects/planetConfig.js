import * as THREE from 'three'

export default {
  mercury: {
    name: 'mercury',
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
  }
}
