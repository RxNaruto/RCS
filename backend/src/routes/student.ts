import { Router } from "express";
import { studentSignupTypes } from "../types/student";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const studentRouter = Router();

studentRouter.get("/", (req, res) => {
    res.status(200).json({
        msg: "ok"
    })
})

interface studentSignup {
    mobileNo: number;
    password: string;
}
studentRouter.post("/signup ", async (req, res) => {
    const body: studentSignup = req.body;
    const { success } = studentSignupTypes.safeParse(body);
    if (!success) {
        return res.status(400).json(
            {
                msg: "incorrect details"
            }
        )
    }
    const existingUser = await prisma.student.findFirst({
        where: {
            mobileNo: body.mobileNo
        }
    })
    if (existingUser) {
        return res.status(409).json({
            msg: "User already exist"
        })
    }
    try {
        const nUser = await prisma.student.create({
            data: {
                mobileNo: body.mobileNo,
                password: body.password
            }
        })
        res.status(200).json({
            msg: "User created successfully"
        })
    } catch (error) {
        res.status(500).json({
            msg: "Internal Server Error"
        })

    }



})
export default studentRouter;
