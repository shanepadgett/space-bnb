import Resort from '../db/models/resort'

export const getResorts = (req, res, next) => {
  Resort.find({}, (error, events) => {
    if (error) throw error
    res.json(events)
  })
}
