import DreamLocation from '../models/dreamLocation.model.js'

export default class DreamLocationController {
    constructor() { }

    async getAllDreamLocations(req, res) {
        let dreamLocations = [];
        try {
            // use the model to create dream location
            dreamLocations = await DreamLocation.find()
            res.status(200).json({ data: dreamLocations })
        } catch (error) {
            // handle error creating dream location
            console.log(`Error getting all dream locations`, error.message)
        }
    }

    async createDreamLocation(req, res) {
        let newDreamLocation = {}

        try {
            newDreamLocation = req.body
            const saveDreamLocation = new DreamLocation(newDreamLocation)
            await saveDreamLocation.save()
            console.log({ newDreamLocation, saveDreamLocation })
            res.status(201).json({ data: saveDreamLocation })
        } catch (error) {
            console.log(`Error creating dream location`, error.message)
        }
    }

    async editDreamLocation(req, res) {
        let foundDreamLocation;

        try {
            const locationID = req.params.id
            const data = req.body
            foundDreamLocation = await DreamLocation.findOneAndUpdate(location, data)
            console.log({ foundDreamLocation })
            res.status(200).json({ data: foundDreamLocation })
        } catch (error) {
            console.log(`Error editing dream location`, error.message)
        }
    }

    async deleteDreamLocation(req, res) {
        let locationID = req.params.id
        let foundDreamLocation;

        console.log({id: locationID})

        try {
            foundDreamLocation = await DreamLocation.findByIdAndDelete(locationID)
            console.log({foundDreamLocation})
            res.status(200).json({ data: 'Dream location deleted!(' + locationID + ')'})
        } catch (error) {
            console.log(`Error deleting dream location`, error.message)
        }
    }

    async getSingleDreamLocation(req, res) {
        let locationID = req.params.id
        let foundDreamLocation = {}

        try {
            foundDreamLocation = await DreamLocation.findById(locationID)
            res.status(200).json({ foundDreamLocation })
        } catch (error) {
            console.log(`Error getting single dream location`, error.message)
        }
    }
}