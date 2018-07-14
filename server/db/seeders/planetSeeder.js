import planetConfig from '../../../client/lib/threeJS/sceneSubjects/planetConfig'

const planets = Object.keys(planetConfig)

const generatePlanets = () => {
  const planetSeeds = []

  for (let i = 0; i < planets.length; i++) {
    const suit = {
      name: planets[i],
      resorts: []
    }

    planetSeeds.push(suit)
  }

  return planetSeeds
}

export default { generatePlanets }
