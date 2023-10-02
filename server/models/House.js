import mongoose from "mongoose"

// const imgSchema = mongoose.Schema({
//     img: {
//         type: String,
//         required: true
//     }
// });

const houseSchema = mongoose.Schema({
    reasePerMonth: {
        type: Number,
        required: true,
        min: 4,
    },
    minReaseLength: {
        type: Number,
        required: true,
        min: 1
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
    isSaved: {
        type: Boolean,
        required: true,
        default: false
    },
    ownerId: {
        type: String,
        required: true
    },
    imgs: {
        type: [String], 
        required: true,
        validate: [arrayLimit, '{PATH} exceeds the limit of 4'] // Custom validation for array size
    },
    DateOfCreation: {
        type: String,
        default: new Date(),
    }
});

// Custom validation function for array size
function arrayLimit(val) {
    return val.length >= 1 && val.length <= 4;
}

const House = mongoose.model('House', houseSchema)

export default House
