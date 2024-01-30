const mongoose = require('mongoose')

const connection: { isConnected: number } = { isConnected: 0 }

export const connectToMongo = async () => {
  if (connection.isConnected) {
    console.log('Using existing connection!')
    return
  }

  mongoose
    .connect(process.env.MONGO_URI)
    .then((data: any) => {
      data.connections[0].readyState && console.log('Connected to Mongo!')
      connection.isConnected = data.connections[0].readyState
    })
    .catch((err: Error) => console.error)
}
