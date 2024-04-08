const Corona = require("../models/Corona")

const Add_corona_details = async (req, res) => {
    const {memberId, vaccines, positive_result, recovery } = req.body
    if (!memberId) {
        return res.status(400).json({
            error: true,
            message: "Required field",
            data: null
        })
    }
    const coronaDetails = await Corona.create({ member: memberId, vaccines, positive_result, recovery })
    if (!coronaDetails) {
        return res.status(400).json({
            error: true,
            message: "somthing wrong",
            data: null
        })
    }
    res.status(201).json({
        error: false,
        message: "",
        data: coronaDetails
    })
}
const got_sick = async (req, res) => {
    const { memberId } = req.body
    const today = new Date()
    if (!memberId) {
        return res.status(400).json({
            error: true,
            message: "Required fields",
            data: null
        })
    }
    const member_details = await Corona.findOne({ member: memberId })
    if (!member_details) {
        const coronaDetails = await Corona.create({ member: memberId, positive_result: today })
        if (!coronaDetails) {
            return res.status(400).json({
                error: true,
                message: "Somthing wrong",
                data: null
            })
        }
        return res.json({
            error: false,
            message: "",
            data: coronaDetails
        })
    }
    member_details.positive_result = today
    const updated = await member_details.save()
    res.json({
        error: false,
        message: "",
        data: updated
    })

}
const add_vaccine = async (req, res) => {
    const { memberId, date, manufacturer } = req.body
    if (!memberId) {
        return res.status(400).json({
            error: true,
            message: "Required fields",
            data: null
        })
    }
    const member_details = await Corona.findById(_id)
    if (!member_details) {
        return res.status(404).json({
            error: true,
            message: "No details found",
            data: null
        })
    }
    member_details.vaccines = [...member_details.vaccines, { date, manufacturer }]

    const updated_details = await member_details.save()

    res.json({
        error: false,
        message: "",
        data: updated_details
    })
}
module.exports = { Add_corona_details, add_vaccine, got_sick }