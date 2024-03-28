const express=require("express")
const { Add_corona_details, add_vaccine } = require("../controllers/coronaController")
const router=express.Router()

router.get("/",(req,res)=>res.send(corona))
router.post("/",Add_corona_details)
router.put("/vaccine",add_vaccine)


module.exports=router