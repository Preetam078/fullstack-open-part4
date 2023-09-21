const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require("./controllers/blog")
const logger = require("./utils/logger")
const mongoose = require("mongoose")

mongoose.set('strictQuery', false)

logger.info(`connecting to -> ${config.MONGO_URL}`)
mongoose.connect(config.MONGO_URL)
  .then(() => {
    logger.info("connected to MongoDB")
  })
  .catch((error)=>{
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use("/api/blog", blogRouter)

module.exports = app;