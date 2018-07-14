import * as THREE from 'three'

export default (
  scene,
  {
    radius,
    segments,
    images: { diffuseMap, bumpMap, specularMap },
    imageOptions: { bumpScale, specular },
    transform: { position: { px, py, pz }, rotation: { rx, ry, rz } },
    ring
  }
) => {
  let newMesh = {}
  let newMaterial = {}

  newMesh = new THREE.SphereGeometry(
    radius,
    segments,
    segments,
    0,
    Math.PI * 2,
    0,
    Math.PI * 2
  )

  // Create the material for the planet
  newMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load(diffuseMap),
    bumpMap: new THREE.TextureLoader().load(bumpMap),
    bumpScale: bumpScale,
    specularMap: new THREE.TextureLoader().load(specularMap),
    specular: specular
  })

  // Create the planet mesh based on the defined sphere geometry and material
  const planetMesh = new THREE.Mesh(newMesh, newMaterial)

  // Setup the planets transform properties
  planetMesh.rotation.y += ry
  planetMesh.position.set(px, py, pz)

  // Add the planet to the scene
  scene.add(planetMesh)

  if (ring) {
    // Create the geometry for the planet
    newMesh = new THREE.RingGeometry(ring.radius, ring.segments, 32)

    // Create the material for the planet
    newMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load(ring.images.diffuseMap),
      side: THREE.DoubleSide
    })

    // Create the planet mesh based on the defined sphere geometry and material
    const ringMesh = new THREE.Mesh(newMesh, newMaterial)

    // Setup the planets transform properties
    ringMesh.rotation.y += ring.transform.rotation.ry
    ringMesh.rotation.x += 90
    ringMesh.position.set(
      ring.transform.position.px,
      ring.transform.position.py,
      ring.transform.position.pz
    )

    // Add the planet to the scene
    scene.add(ringMesh)
  }

  const rotation = {
    x: Math.random() * (0.002 - -0.002) + -0.002,
    y: Math.random() * (0.002 - -0.002) + -0.002
  }

  function update (time) {
    planetMesh.rotation.x += rotation.x
    planetMesh.rotation.y += rotation.y
  }

  return {
    update
  }
}
