import express from 'express'
import { getResorts } from '../controllers/resortController'

const router = express.Router()

router.route('/resorts/:planetId').get(getResorts)

export default router
