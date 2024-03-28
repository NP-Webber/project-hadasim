const express = require("express")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })
const memberController = require("../controllers/memberController")
const router = express.Router()

router.get("/", memberController.getAllMembers)
router.get("/:id", memberController.getMember)
router.post("/", upload.single('image'), memberController.addMember)
router.put("/", upload.single('image'), memberController.updateMember)
router.delete("/", memberController.deleteMember)

module.exports = router