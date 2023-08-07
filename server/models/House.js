// {
//     _id: 2004,
//     reasePerMounth: 25000,
//     numberOfTenants: 3,
//     minReaseLength: 3,
//     location: "magogoni, bagamoyo",
//     isSaved: false,
//     owner: "",
//     imgs: [
//       require("../imgs/img-5.jpg"),
//     ],
//   }

import mongoose from "mongoose";

const houseSchema = mongoose.Schema({
    reasePerMounth: {
        type: Number,
        required: true,
        min: 4,
        max: 6
    },
    minReaseLength: {
        type: Number,
        required: true,
        min: 1
    },
    description: {
        type: String,
        required: true
    }
    ,
    location: {
        type: String,
        required: true,
        min: 4
    },
    isSaved: {
        type: Boolean,
        required: true,
    },
    ownerId: {
        type: String,
        required: true
    },
    imgs: {
        type: Array,
        required: true,
        min: 1,
        max: 4,

        img: {
            type: String,
            required: true
        }
    }
})

const House = mongoose.model("House", houseSchema)

export default House
