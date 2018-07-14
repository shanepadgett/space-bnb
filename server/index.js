import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'
import connectToDB from './db'
import routes from './routes/index'

dotenv.config()

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: path.join(__dirname, '../client'), dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // Logger
    server.use(morgan('dev'))

    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    )

    server.use(bodyParser.json())

    connectToDB(dev)

    server.use('/api', routes)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      if (dev) console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })

export default app
