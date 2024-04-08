const express=require("express")
const { Add_corona_details, add_vaccine, got_sick } = require("../controllers/coronaController")
const router=express.Router()

router.get("/",(req,res)=>res.send(corona))
router.post("/",Add_corona_details)
router.put("/vaccine",add_vaccine)
router.put("/got_sick",got_sick)


module.exports=router