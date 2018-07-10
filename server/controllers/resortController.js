// import Resort from '../db/models/resort'
import { Planet } from '../db/models'

export const getResorts = (req, res, next) => {
  Planet.findOne({name: req.params.planetId})
    .populate('resorts')
    .then(planet => {
      res.json(planet.resorts)
    })
    .catch(err => {
      console.log(err)
    })
}
