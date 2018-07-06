import express from 'express'
// import user, { getUser } from '../controllers/userController'
// import planet, { getPlanet } from '../controllers/planetController'
import { getResorts } from '../controllers/resortController'

const router = express.Router()

// router.route('/users').get(getUser)
// router.route('/user').post(user)

// router.route('/planets').get(getPlanet)
// router.route('/planet').post(planet)

router.route('/resorts').get(getResorts)

export default router
