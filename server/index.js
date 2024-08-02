const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const {createServer} = require('http')
const connectDb = require('./mongoose')
const Routes = require('./Routes')
var io = require('socket.io')

// ---------------------------------------- Random Shit --------------------------------------------------------

connectDb()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// =========================== ROUTES ==================================
app.use('/api',Routes)
// ----------------------------------------------- Socket IO Server Setting --------------------------------------------
const httpServer = createServer(app);
const newServer = new io.Server(httpServer,{
    cors: {
        origin: "http://localhost:3000", //specific origin you want to give access to,
    },
})
const PORT = 4000

httpServer.listen(PORT ,(req,res)=>{
    console.log(`http://localhost:${PORT}`)
})
newServer.on("connection",(socket)=>{
    console.log("Hello world")
    })
    