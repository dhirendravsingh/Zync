import { Router } from "express"
import client from "../db"
import { authMiddleware } from "../middleware"
import { signupSchema , signinSchema} from "../types"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config"
const router = Router()

router.post("/signup", async (req,res)=>{
    const body = req.body
    const parsedInput = signupSchema.safeParse(body)

    if(!parsedInput.success){
        return res.json(404).json({
            message : "Incorrect inputs"
        })
    }

    const userExist = await client.user.findFirst({
        where : {
            email : parsedInput.data?.email
        }
    })

    if(userExist) return res.status(403).json({
        message : "You are already a member, try signing in"
    })

    await client.user.create({
        data : {
            email : parsedInput.data.email,
            name : parsedInput.data.name,
            password : parsedInput.data.password
        }
    })

    return res.status(200).json({
        message : "Signed up successfully, please signin to continue to the service"
    })
})

router.post("/signin", async (req,res)=>{
    const body = req.body
    const parsedInput = signinSchema.safeParse(body)

    if(!parsedInput.success){
        return res.status(404).json({
            message : "Incorrect inputs"
        })
    }

    const user = await client.user.findFirst({
        where : {
            email : parsedInput.data.email,
            password : parsedInput.data.password
        },
    })

    if(!user) return res.status(401).json({
        message : "Wrong credentials"
    })

    const jwtSign = jwt.sign({
        id : user.id
    }, JWT_SECRET
    )

    return res.json ({
        token : jwtSign
    })
})

router.get("/", authMiddleware, async (req,res)=>{
    // @ts-ignore
    const id = req.id
    const user = await client.user.findFirst({
        where : {
            id : id
        },
        select : {
            email : true,
            name : true
        }
    })

    return res.json({user})
})

export const userRouter = router