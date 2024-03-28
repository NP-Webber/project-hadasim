const express=require("express")
const { Add_corona_details } = require("../controllers/coronaController")
const router=express.Router()

router.get("/")
router.post("/",Add_corona_details)
router.put("/vaccine")


module.exports=router