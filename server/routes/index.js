import express from 'express'
import { getResort, getResorts } from '../controllers/resortController'

const router = express.Router()

router.route('/resort/:id').get(getResort)
router.route('/resorts/:planetId').get(getResorts)

export default router
