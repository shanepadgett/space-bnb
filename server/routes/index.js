import express from 'express'
import { getResort, getResorts } from '../controllers/resortController'
import { createReservation } from '../controllers/reservationController'

const router = express.Router()

// Resort API routes
router.route('/resort/:id').get(getResort)
router.route('/resorts/:planetId').get(getResorts)

// Reservation API routes
router.route('/reservation').post(createReservation)

export default router
