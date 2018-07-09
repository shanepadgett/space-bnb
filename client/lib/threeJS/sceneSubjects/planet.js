import * as THREE from 'three'

export default (
  scene,
  {
    radius,
    segments,
    images: { diffuseMap, bumpMap, specularMap },
    imageOptions: { bumpScale, specular },
    transform: { position: { px, py, pz }, rotation: { rx, ry, rz } }
  }
) => {
  // Create the geometry for the planet
  const sphere = new THREE.SphereGeometry(
    radius,
    segments,
    segments,
    0,
    Math.PI * 2,
    0,
    Math.PI * 2
  )

  // Create the material for the planet
  const sphereMaterial = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load(diffuseMap),
    bumpMap: new THREE.TextureLoader().load(bumpMap),
    bumpScale: bumpScale,
    specularMap: new THREE.TextureLoader().load(specularMap),
    specular: specular
  })

  // Create the planet mesh based on the defined sphere geometry and material
  const planetMesh = new THREE.Mesh(sphere, sphereMaterial)

  // Setup the planets transform properties
  planetMesh.rotation.y += ry
  planetMesh.position.set(px, py, pz)

  // Add the planet to the scene
  scene.add(planetMesh)

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
