import express from "express"
import { blogController } from "./Blog.controller"

const BlogRouter = express.Router()

BlogRouter.post('/create',blogController.createBlog)
BlogRouter.get('/all',blogController.GetAllBlog)
BlogRouter.get('/:id',blogController.getSingleBLog)


export default BlogRouter;