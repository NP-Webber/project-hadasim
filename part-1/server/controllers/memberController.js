const Member = require("../models/Member")

const getAllMembers = async (req, res) => {
    const members = await Member.find().lean()
    // console.log(members);
    if (!members.length) {
        return res.status(404).json({
            error: true,
            message: "No members were found",
            data: null
        })
    }
    res.json({
        error: false,
        message: "",
        data: members
    })
}
const getMember = async (req, res) => {

}
const addMember = async (req, res) => {
    const image = (req.file?.filename? req.file.filename: "")
    const { firstName, lastName, id, city, street, numB, birthDate, phone, mobile } = req.body
    // console.log(req.file)
    if (!firstName || !lastName || !id || !birthDate) {
        return res.status(400).json({
            error: true,
            message: "Required fields",
            data: null
        })
    }
    const name = {
        first_name: firstName,
        last_name: lastName
    }
    const adress = { city, street, numB }
    const newMember = await Member.create({ name, id, adress, birthDate, phone, mobile ,image})
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
    if (!_id || !firstName || !lastName || !id || !birthDate) {
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

    const updatedMember = await member.save()

    res.json({
        error: false,
        message: "",
        data: updatedMember
    })
}
const deleteMember = async (req, res) => {
    console.log(req.body);
    const { _id } = req.body
    // console.log(_id);
    if (!_id) {
        return res.status(400).json({
            error: true,
            message: "_id is required",
            data: null
        })
    }
    const member = await Member.findById(_id,{})
    // console.log(member);
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
