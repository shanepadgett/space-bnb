// import Planet from '../db/models/planet'

// const planet = (req, res, next) => {
//   const newPlanet = new Planet(req.body)
//   newPlanet
//     .save()
//     .then(savedData => {
//       res.json(savedData)
//     })
//     .catch(e => next(e))
// }

// export const getPlanet = (req, res, next) => {
//   Planet.find({}, (error, events) => {
//     if (error) throw error
//     res.json(events)
//   })
// }

// export default planet
