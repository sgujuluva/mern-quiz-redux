import express from "express"
const router = express.Router();

router.get("/questions", (req,res) => {
    res.json({message: "getting questions"})
})

export default router