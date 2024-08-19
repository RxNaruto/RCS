import { Router } from "express";
const studentRouter = Router();

studentRouter.get("/",(req,res)=>{
    res.status(200).json({
        msg: "ok"
    })
})

export default studentRouter;