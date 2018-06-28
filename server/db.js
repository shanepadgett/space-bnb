import mongoose from 'mongoose'

function connectToDB (dev) {
  const uri = dev ? process.env.MONGODB_URI_DEV : process.env.MONGODB_URI_PROD
  mongoose.connect(uri, err => {
    if (err) throw err
    console.log('DB open')
  })
}

export default connectToDB
