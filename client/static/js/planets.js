
let planets = {
  mercury: {
    name: 'mercury',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/mercury.jpg'],
    position: {
      x: 3,
      y: 2.5,
      z: 32
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  venus: {
    name: 'venus',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/venus.jpg'],
    position: {
      x: -0.75,
      y: -3,
      z: 20
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  earth: {
    name: 'earth',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: [
      '../static/images/earth.jpg',
      '../static/images/earth-bump.jpg',
      '../static/images/earth-water.jpg'
    ],
    position: {
      x: 0,
      y: 0,
      z: 9
    },
    rotation: {
      x: 0,
      y: 0.001
    }
  },
  earthClouds: {
    name: 'earth-clouds',
    type: 'clouds',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/earth-clouds.png'],
    position: {
      x: 0,
      y: 0,
      z: 9
    },
    rotation: {
      x: 0,
      y: 0.001
    }
  },
  moon: {
    name: 'moon',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/moon.jpg'],
    position: {
      x: -0.5,
      y: 2.25,
      z: 3
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  mars: {
    name: 'mars',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/mars.jpg'],
    position: {
      x: 10,
      y: 5,
      z: -20
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  jupiter: {
    name: 'jupiter',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/jupiter.jpg'],
    position: {
      x: -0.5,
      y: -5,
      z: -60
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  saturn: {
    name: 'saturn',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/saturn.jpg'],
    position: {
      x: 1,
      y: -15,
      z: -100
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  saturnRing: {
    name: 'saturn-ring',
    type: 'rings',
    mesh: null,
    radiusRatio: 1.5,
    segments: 2,
    images: ['../static/images/saturn-ring.png'],
    position: {
      x: 1,
      y: -15,
      z: -100
    },
    rotation: {
      x: 0,
      y: 0
    }
  },
  uranus: {
    name: 'uranus',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/uranus.jpg'],
    position: {
      x: -2.25,
      y: 4,
      z: -120
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  },
  neptune: {
    name: 'neptune',
    type: 'planet',
    mesh: null,
    radiusRatio: 1,
    segments: 50,
    images: ['../static/images/neptune.jpg'],
    position: {
      x: -10,
      y: -10,
      z: -140
    },
    rotation: {
      x: 0.001,
      y: 0.001
    }
  }
  // stars: {
  //   name: 'stars',
  //   type: 'stars',
  //   mesh: null,
  //   radiusRatio: 1,
  //   segments: 64,
  //   images: [
  //     '../static/images/stars.png'
  //   ],
  //   position: {
  //     x: 0,
  //     y: 0,
  //     z: -100
  //   },
  //   rotation: {
  //     x: 0,
  //     y: 0
  //   }
  // }
}

$(document).ready(() => {
  // Animate CSS
  // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
  $.fn.extend({
    animateCss: function (animationName, callback) {
      var animationEnd = (function (el) {
        var animations = {
          animation: 'animationend',
          OAnimation: 'oAnimationEnd',
          MozAnimation: 'mozAnimationEnd',
          WebkitAnimation: 'webkitAnimationEnd'
        }

        for (var t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t]
          }
        }
      })(document.createElement('div'))

      this.addClass('animated ' + animationName).one(animationEnd, function () {
        $(this).removeClass('animated ' + animationName)

        if (typeof callback === 'function') callback()
      })

      return this
    }
  })

  // Set scene, camera, renderer
  // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
  let scene = new THREE.Scene()

  let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 80

  let renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  // Starfield
  var starsGeometry1 = new THREE.Geometry()
  var starsGeometry2 = new THREE.Geometry()

  for (var i = 0; i < 10000; i++) {
    var star = new THREE.Vector3()
    star.x = THREE.Math.randFloatSpread(2000)
    star.y = THREE.Math.randFloatSpread(2000)
    star.z = THREE.Math.randFloatSpread(2000)

    if (i % 2 === 0) {
      starsGeometry1.vertices.push(star)
    } else {
      starsGeometry2.vertices.push(star)
    }
  }

  var starsMaterial1 = new THREE.PointsMaterial({ color: 0x888888 })
  var starsMaterial2 = new THREE.PointsMaterial({ color: 0xFFE599 })

  var starField1 = new THREE.Points(starsGeometry1, starsMaterial1)
  var starField2 = new THREE.Points(starsGeometry2, starsMaterial2)

  scene.add(starField1)
  scene.add(starField2)

  // Onload zoom
  // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
  let initZoom = () => {
    let zoom = {
      value: camera.position.z
    }
    let zoomEnd = {
      value: 15
    }
    let tween = new TWEEN.Tween(zoom).to(zoomEnd, 800)
    tween.onUpdate(() => {
      camera.position.z = zoom.value
    })

    tween.easing(TWEEN.Easing.Quartic.InOut)

    tween.start()
  }

  setTimeout(() => {
    initZoom()
  }, 1400)

  $(window).resize(function () {
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    renderer.setSize(window.innerWidth, window.innerHeight)

    if ($('.card-title').first().text() === '') {
      moveCamera(planets.earth)
    } else {
      moveCamera(planets[$('.card-title').first().text()])
    }
  })

  // Add directional and ambient light
  // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
  let light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(5, 3, 5)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0x333333))

  // Create planet, clouds, starts
  // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//

  let createPlanet = (type, propOne, propTwo, images) => {
    switch (type) {
      case 'planet':
        return new THREE.Mesh(
          new THREE.SphereGeometry(
            propOne,
            propTwo,
            propTwo,
            0,
            Math.PI * 2,
            0,
            Math.PI * 2
          ),
          new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load(images[0]),
            bumpMap: new THREE.TextureLoader().load(images[1]),
            bumpScale: 0.1,
            specularMap: new THREE.TextureLoader().load(images[3]),
            specular: new THREE.Color('grey')
          })
        )
      case 'clouds':
        return new THREE.Mesh(
          new THREE.SphereGeometry(propOne + 0.003, propTwo, propTwo),
          new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load(images[0]),
            transparent: true
          })
        )
      case 'rings':
        return new THREE.Mesh(
          new THREE.RingGeometry(propOne, propTwo, 32),
          new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(images[0]),
            side: THREE.DoubleSide
          })
        )
      // case 'stars':
      //   return new THREE.Mesh(
      //     new THREE.SphereGeometry(90, 64, 64),
      //     new THREE.MeshBasicMaterial({
      //       map: new THREE.TextureLoader().load(images[0]),
      //       side: THREE.BackSide
      //     })
      //   )
    }
  }

  let addPlanet = (mesh, object) => {
    mesh.rotation.y += object.rotation.y
    mesh.position.set(object.position.x, object.position.y, object.position.z)
    if (object.type === 'rings') mesh.rotation.set(1.5, 10, 0)
    object.mesh = mesh
    scene.add(mesh)
  }

  Object.keys(planets).forEach(item => {
    let itemMesh = createPlanet(
      planets[item].type,
      planets[item].radiusRatio,
      planets[item].segments,
      planets[item].images
    )
    addPlanet(itemMesh, planets[item])
  })

  let moveCamera = planetObject => {
    if ($('.container-fluid').css('display') === 'none') {
      $('.card-wrapper').show().animateCss('fadeInRight')
      $('.card-title').text(planetObject.name)
      $('.visit-span').text(`Visit ${planetObject.name}`)
    }
    let origin = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z
    }
    let target = {
      x: planetObject.mesh.position.x,
      y: planetObject.mesh.position.y,
      z: planetObject.mesh.position.z + 5
    }
    let tween = new TWEEN.Tween(origin).to(target, 1000)
    tween.onUpdate(() => {
      camera.position.x = origin.x
      camera.position.y = origin.y
      camera.position.z = origin.z
    })

    tween.easing(TWEEN.Easing.Quartic.InOut)

    tween.start()
  }

  // Click event listener
  // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
  // let currentPlanet = planets.earth

  $('.planet-btn').click(function () {
    moveCamera(planets[this.dataset.name])
  })

  $('.visit-btn').click(function () {
    $('.container-fluid').show().animateCss('fadeInRight')
    $('.container').animateCss('zoomOut', () => {
      $('.container').hide()
    })

    // Object.keys(planets).forEach(item => {
    //   $('.card-title').first().text() === planets[item].name ||
    //   planets[item].name.split('-').includes($('.card-title').first().text()) ?
    //   false :
    //   planets[item].mesh.visible = false
    // })
  })

  // Render, animate
  // -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//
  let render = function () {
    window.requestAnimationFrame(render)

    Object.keys(planets).forEach(item => {
      planets[item].mesh.rotation.x += planets[item].rotation.x
      planets[item].mesh.rotation.y += planets[item].rotation.y
    })

    renderer.render(scene, camera)
  }

  render()

  function animate () {
    camera.updateProjectionMatrix()
    window.requestAnimationFrame(animate)
    TWEEN.update()
  }

  animate()
})
