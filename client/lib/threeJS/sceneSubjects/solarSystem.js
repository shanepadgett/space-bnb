import StarField from './starField'
import Planet from './planet'
import Light from './light'
import planetConfig from './planetConfig'

export default scene => {
  const subjectsToUpdate = []

  // Setup star field
  subjectsToUpdate.push(new StarField(scene))
  subjectsToUpdate.push(new Light(scene))

  // Setup planets
  Object.keys(planetConfig).map(key => {
    return subjectsToUpdate.push(new Planet(scene, planetConfig[key]))
  })

  function update (time) {
    subjectsToUpdate.forEach(subject => {
      subject.update(time)
    })
  }

  return {
    update
  }
}
