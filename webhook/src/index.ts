import express from "express"

const app = express()

app.get("/webhook", (req, res) => { 
    res.send("Webhook is active")
})

