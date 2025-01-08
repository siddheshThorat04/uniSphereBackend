const express = require("express")
const cors = require("cors")
const cookieParser=require('cookie-parser')
const { createServer } = require("http")
const path = require("path")
const socketSetup = require("./socket"); // Import the socket setup
require("dotenv").config()


const connectDb=require("./db/connectDb.js")
const authRoutes=require("./routes/authRoutes")
const adminRoutes=require("./routes/adminRoutes");
const userRoutes=require("./routes/userRoutes")
const app = express()


const server = createServer(app)


app.use(cookieParser())
app.use(express.json())

app.use(cors({
  origin: 'https://uni-sphere-dbatu-production-2hj8.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:false
}));
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
})
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/user",userRoutes)

const port = process.env.PORT 

server.listen(port, () => {
    connectDb()
    console.log(`Server run on port http://localhost:${port}`)
    console.log(process.env.MONGO_URI)
})

socketSetup(server)