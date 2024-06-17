import {model, Schema} from "mongoose";

const dreamLocationModel = new Schema({
    location: {
        countryCode: String,
    },
    departureWindow: [Date],
    arrivalWindow: [Date],
    totalBudget: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export default model('DreamLocation', dreamLocationModel)
