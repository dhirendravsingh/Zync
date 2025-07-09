import { Router } from "express"
import client from "../db"
import { authMiddleware } from "../middleware"
import { zapSchema } from "../types"

const router = Router()

router.post("/", authMiddleware, async (req,res)=>{
    const body = req.body
    // @ts-ignore
    const id = req.id
    
    const parsedInput = zapSchema.safeParse(body)

    if(!parsedInput.success) return res.status(404).json({
        message : "Wrong inputs to create zap"
    })

const zapId = await client.$transaction(async tx => {
    const zap = await tx.zap.create({
        data: {
            // @ts-ignore
            userId: id, 
            action: {
                create: parsedInput.data?.actions.map((x, index) => ({
                    AvailableactionId: x.availableActionId, 
                    sortingOrder: index,
                    name :  x.name

                }))
            }
        }
    });

    const trigger=  await tx.trigger.create({
        data: {
            zapId: zap.id,
            AvailabletriggerId: parsedInput.data?.availableTriggerId 
        }
    });

    return zap.id
});
    return res.json({
        zapId
    })
})

router.get("/", authMiddleware, async (req,res)=>{
    // @ts-ignore
    const id = req.id

    const zaps = await client.zap.findMany({
        where : {
            // @ts-ignore
            userId : id
        }, 
        include : {
            trigger : {
                include : {
                    availableTrigger : true
                }
            }, 
            action : {
                include : {
                    type : true
                }
            }
        }
    })
    return res.json ({
        zaps
    })
})

router.get("/:zapId", authMiddleware, async  (req,res)=>{
      // @ts-ignore
      const id = req.id
     const zapId = req.params.zapId
      const zaps = await client.zap.findFirst({
          where : {
              // @ts-ignore
              userId : id,
              id : zapId
          }, 
          include : {
              trigger : {
                  include : {
                      availableTrigger : true
                  }
              }, 
              action : {
                  include : {
                      type : true
                  }
              }
          }
      })
      return res.json ({
          zaps
      })
})

export const zapRouter = router