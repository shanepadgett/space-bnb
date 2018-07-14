import express from 'express'
import { getResort, getResorts } from '../controllers/resortController'
import { createReservation, getReservations } from '../controllers/reservationController'
import { createUser, getUser } from '../controllers/userController'

const router = express.Router()

// Resort API routes
router.route('/resort/:id').get(getResort)
router.route('/resorts/:planetId').get(getResorts)

// Reservation API routes
router.route('/reservation').post(createReservation)
router.route('/reservations/').get(getReservations)
router.route('/reservations/:email').get(getReservations)

// User API routes
router.route('/user').post(createUser)
router.route('/user/:email').get(getUser)

export default router
