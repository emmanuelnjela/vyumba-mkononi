import mongoose from "mongoose";

const houseRequestSchema = mongoose.Schema({
    minReasePerMonth: {
        type: Number,
        required: true,
        min: 4,
    },
    maxReasePerMonth: {
        type: Number,
        required: true,
        min: 4,
    },
    description: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        min: 4
    },
    ownerId: {
        type: String,
        required: true
    },
    DateOfCreation: {
        type: String,
        default: new Date(),
    },
    phone: {
        type: String,
        required: true
    },
    whatsapp: {
        type: String,
        required: true
    }
})

const HouseRequest = mongoose.model('HouseRequest', houseRequestSchema);

export default HouseRequest;