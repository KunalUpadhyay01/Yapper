const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const http = require('http')
const io = require('socket.io')
const connectDb = require('./mongoose')
const Routes = require('./Routes')

connectDb()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const server = http.createServer();
const Server = new io.Server(server)

const PORT = 3001
app.listen(PORT ,(req,res)=>{
    console.log(`http://localhost:${PORT}`)
})
app.use('/api',Routes)