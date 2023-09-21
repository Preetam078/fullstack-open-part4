const notesRouter = require('express').Router()
const Blog = require("../models/blog")

notesRouter.get("/", (req, res) => {
    Blog.find({}).then((notes)=> {
        res.status(200).json(notes)
    })
})

module.exports = notesRouter;