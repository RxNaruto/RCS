import { Router } from "express";
const workerRouter = Router();

workerRouter.get("/test",(req,res)=>{
    res.status(200).json({
        msg: "ok"
    })
})

export default workerRouter;