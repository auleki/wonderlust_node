import {model, Schema} from "mongoose";

const dreamLocationModel = new Schema({
    location: {
        countryCode: {
            type: String,
            required: true
        },
    },
    departureWindow: {
        type: [Date],
        required: true
    },
    arrivalWindow: {
        type:  [Date],
        required: true
    },
    totalBudget: {
        type: Number,
        required: true
    },
    preferences: {
        allowedGenders: {
            type: [String],
            required: true
        },
        ageGroups: {
            type: [Number],
            required: true
        },
        transportationMode: {
            type:  [String],
            required: true
        },
    }
}, {timestamps: true})

export default model('DreamLocation', dreamLocationModel)
