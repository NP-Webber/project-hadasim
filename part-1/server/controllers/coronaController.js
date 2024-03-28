const Corona=require("../models/Corona")

const Add_corona_details =async(req,res)=>{
    const {memberId,vaccines,positive_result,recovery}=req.body
    if(!memberId){
        return res.status(400).json({
            error: true,
            message: "Required field",
            data: null
        })
    }
    const coronaDetails=await Corona.create({member:memberId,vaccines,positive_result,recovery})
    if(!coronaDetails){
        return res.status(400).json({
            error: true,
            message: "somthing wrong",
            data: null
        })
    }
    res.status(201).json({
        error:false,
        message:"",
        data:coronaDetails
    })
}

const add_vaccine=async(req,res)=>{
    const {_id,date,manufacturer}=req.body
    if (!_id ) {
        return res.status(400).json({
            error: true,
            message: "Required fields",
            data: null
        })
    }
    const member_details=await Corona.findById(_id)
    if (!member_details) {
        return res.status(404).json({
            error: true,
            message: "No details found",
            data: null
        })
    }
    member_details.vaccines=[...member_details.vaccines,{date,manufacturer}]

    const updated_details=await member_details.save()

    res.json({
        error:false,
        message:"",
        data:updated_details
    })
}
module.exports={Add_corona_details,add_vaccine}