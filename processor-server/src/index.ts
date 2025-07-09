import { PrismaClient } from './generated/prisma'
import { Kafka } from 'kafkajs'

const client = new PrismaClient()
const TOPIC_NAME = 'zap-events'
const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
  })

async function main(){
    const producer = kafka.producer()
    await producer.connect()

    while(1) {
        const pendingRows = await client.zaprunOutbox.findMany({
            take : 10
        })

        producer.send({
            topic: TOPIC_NAME,
            messages: pendingRows.map(r=>({
                value : r.zaprunId
            }))
        })

        await client.zaprunOutbox.deleteMany({
            where : {
                id : {
                    in : pendingRows.map(x => x.id)           
                 }
            }   
        })
    }
}

main()