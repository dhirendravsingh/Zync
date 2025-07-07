import express from "express"
import { PrismaClient, Prisma } from "@prisma/client"

const client = new PrismaClient()
const app = express()

app.post("/hooks/catch/:userId/:zapId", async (req, res) => { 
    const userId = req.params.userId
    const zapId = req.params.zapId
    const metaData = req.body
    
    await client.$transaction(async (tx : Prisma.TransactionClient) => {
        const run = await client.zaprun.create({
            data : {
                zapid : zapId,
                metadata : metaData
            }
        })

        await client.zaprunOutbox.create({
            data : {
                zaprunId : run.id
            }
        })
    })

})

