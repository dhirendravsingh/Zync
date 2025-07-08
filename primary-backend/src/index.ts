import express from "express"
import cors from "cors"
import { zapRouter } from "./routes/zap"
import { userRouter } from "./routes/user"

const app = express()

app.use(express.json())
app.use(cors({
    origin : "*"
}))

app.use("/api/v1/user", userRouter)
app.use("/api/v1/zap", zapRouter)



app.listen(3000)