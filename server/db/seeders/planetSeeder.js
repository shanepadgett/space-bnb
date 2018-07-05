const planets = [
  {
    name: 'Mercury',
    diffuseSrc: '/static/images/mercuryDiffuse.png'
  },
  {
    name: 'Venus',
    diffuseSrc: '/static/images/venusDiffuse.png'
  },
  {
    name: 'Mars',
    diffuseSrc: '/static/images/marsDiffuse.png'
  },
  {
    name: 'Jupiter',
    diffuseSrc: '/static/images/jupiterDiffuse.png'
  },
  {
    name: 'Saturn',
    diffuseSrc: '/static/images/saturnDiffuse.png'
  },
  {
    name: 'Uranus',
    diffuseSrc: '/static/images/uranusDiffuse.png'
  },
  {
    name: 'Neptune',
    diffuseSrc: '/static/images/neptuneDiffuse.png'
  }
]

const generatePlanets = () => {
  const planetSeeds = []

  for (let i = 0; i < planets.length; i++) {
    const suit = {
      name: planets[i].name,
      diffuseSrc: planets[i].diffuseSrc,
      resorts: []
    }

    planetSeeds.push(suit)
  }

  return planetSeeds
}

export default { generatePlanets }
