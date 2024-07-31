const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const http = require('http')
const {Server} = require('socket.io')
const connectDb = require('./mongoose')
const Routes = require('./Routes')

connectDb()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api',Routes)

const server = http.createServer();
// const newServer =   new Server(server)

// newServer.on("connection",(socket)=>{
    
    // })
    
    const PORT = 4000
    app.listen(PORT ,(req,res)=>{
        console.log(`http://localhost:${PORT}`)
    })