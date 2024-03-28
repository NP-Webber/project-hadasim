const mongoose = require("mongoose")

const coronaSchema = new mongoose.Schema({
    member: {
        type:mongoose.Schema.Types.ObjectId,
        uniqe:true,
        required:true
    },
    vaccines:{
        type:[{
            date:Date,
            manufacturer:String
        }],
        maxLength:4
    },
    positive_result:{
        type:Date
    },
    recovery:{
        type:Date
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Corona", coronaSchema)