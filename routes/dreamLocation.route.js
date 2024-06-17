import {Router} from 'express'
import DreamLocationController from '../controllers/dreamLocation.controller.js'

const router = Router()
const DController = new DreamLocationController()

router
    .get('/', DController.getAllDreamLocations)
    .get('/:id', DController.getSingleDreamLocation)
    .post('/', DController.createDreamLocation)
    .patch('/:id', DController.editDreamLocation)
    .delete('/:id', DController.deleteDreamLocation)

export default router