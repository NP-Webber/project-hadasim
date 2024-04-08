const Member = require("../models/Member")
const Corona = require("../models/Corona")

const getAllMembers = async (req, res) => {
    const members = await Member.find().lean()
    if (!members.length) {
        return res.status(404).json({
            error: true,
            message: "No members were found",
            data: null
        })
    }

    const membersWithCoronaDetails = await Promise.all(members.map(async (member) => {
        const coronaDetails = await Corona.findOne({ member: member._id }).select(["vaccines", "positive_result", "recovery"]).lean()
        return { ...member, coronaDetails }
    }))

    res.json({
        error: false,
        message: "",
        data: membersWithCoronaDetails
    })
}
const getMember = async (req, res) => {

}
const addMember = async (req, res) => {
    const image = (req.file ? (req.file.filename ? req.file.filename : "") : "")
    const { firstName, lastName, id, city, street, numB, birthDate, phone, mobile } = req.body
    if (!firstName || !lastName || !id || !birthDate) {
        return res.status(400).json({
            error: true,
            message: "Required fields",
            data: null
        })
    }
    const mem=await Member.findOne({id})
    if(mem){
        return res.status(300).json({
            error: true,
            message: "id is exist",
            data: null
        })
    }
    const name = {
        first_name: firstName,
        last_name: lastName
    }
    const adress = { city, street, numB }
    const newMember = await Member.create({ name, id, adress, birthDate, phone, mobile, image })
    if (!newMember) {
        return res.status(400).json({
            error: true,
            message: "somthing wrong",
            data: null
        })
    }
    res.status(201).json({
        error: false,
        message: "",
        data: newMember
    })
}
const updateMember = async (req, res) => {
    const { _id, firstName, lastName, id, city, street, numB, birthDate, phone, mobile } = req.body
    let imageUrl = null; // נוסיף משתנה זה כדי לאחסן את כתובת התמונה

    // אם קיבלנו קובץ תמונה מהלקוח, נקבע את הנתיב שלו
    if (req.file) {
        imageUrl = req.file.filename; // נניח שהשדה הוא path, נצטרך להתאים למה שמתקבל מהלקוח
    }
    if (!_id || !firstName || !lastName || !id || !birthDate) {
        console.log("error")
        return res.status(400).json({
            error: true,
            message: "Required fields",
            data: null
        })
    }
    const member = await Member.findById(_id)
    if (!member) {
        return res.status(404).json({
            error: true,
            message: "No member found",
            data: null
        })
    }
    member.name.first_name = firstName
    member.name.last_name = lastName
    member.id = id
    member.adress.city = city
    member.adress.street = street
    member.adress.numB = numB
    member.birthDate = birthDate
    member.phone = phone
    member.mobile = mobile
    // אם יש כתובת תמונה, נעדכן אותה בפרופיל של החבר
    if (imageUrl) {
        member.image = imageUrl;
    }

    const updatedMember = await member.save()
    res.json({
        error: false,
        message: "",
        data: updatedMember
    })
}
const deleteMember = async (req, res) => {
    const { _id } = req.body
    if (!_id) {
        return res.status(400).json({
            error: true,
            message: "_id is required",
            data: null
        })
    }
    const member = await Member.findById(_id, {})
    if (!member) {
        return res.status(404).json({
            error: true,
            message: "No member found",
            data: null
        })
    }

    const deletedMember = await member.deleteOne()
    res.json({
        error: false,
        message: "",
        data: deletedMember
    })
}
module.exports = { getAllMembers, getMember, addMember, updateMember, deleteMember }
