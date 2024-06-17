import {model, Schema} from 'mongoose'

const tripMatchesModel = new Schema({
    
}, {timestamps: true})

export default model('TripMatches', tripMatchesModel)
