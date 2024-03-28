const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema({
    name: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    adress: {
        city: String,
        street: String,
        numB: Number
    },
    birthDate: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    phone: {
        type: String
    },
    mobile: {
        type: String
    },
    image: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Member", memberSchema)