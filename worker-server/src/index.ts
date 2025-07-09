import { Kafka } from "kafkajs";
const TOPIC_NAME = 'zap-events'
const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
  })

async function main() { 
  const consumer = kafka.consumer({ groupId: 'main-worker' })
  await consumer.connect()
  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true })

await consumer.run({
  autoCommit : false, //with this feature turned off we need to manually tell kafka that the operation is done kindly remove it from the queue
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
    await new Promise(r => setTimeout(r,1000))

    //here we are manually letting the kafka know that the specific operation has been performed 
    await consumer.commitOffsets([{
      topic : TOPIC_NAME,
      partition : partition,
      offset : (parseInt(message.offset) + 1).toString()
    }])
  },
 
})
}

main()