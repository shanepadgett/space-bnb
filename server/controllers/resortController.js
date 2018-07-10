// import Resort from '../db/models/resort'
import { Planet, Resort } from '../db/models'

export const getResorts = (req, res, _) => {
  Planet.findOne({name: req.params.planetId})
    .populate('resorts')
    .then(planet => {
      res.json(planet.resorts)
    })
    .catch(err => {
      console.log(err)
    })
}

export const getResort = (req, res, _) => {
  Resort.findOne({_id: req.params.id})
    .populate({
      path: 'reviews',
      populate: {
        path: 'user'
      }
    })
    .then(resort => res.json(resort))
    .catch(err => console.log(err))
}
