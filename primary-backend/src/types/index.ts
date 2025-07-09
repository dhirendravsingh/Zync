import z from "zod";

export const signupSchema = z.object({
    name : z.string().min(5),
    email : z.string().email(),
    password : z.string().min(6)
})


export const signinSchema = z.object({
    email : z.string().email(),
    password : z.string()
})

export const zapSchema = z.object({
    availableTriggerId : z.string(),
    triggerMetadata : z.any().optional(),
    actions : z.array(z.object({
        availableActionId : z.string(),
        actionMetadata : z.any().optional(),
        name : z.string()
    }))
})