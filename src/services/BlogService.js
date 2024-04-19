import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class BlogService {
    async saveBlog(blogData) {
        const response = await api.post('api/blogs', blogData)
        logger.log('received response from save', response.data)
        const blog = new Blog(response.data)
        AppState.blogs.push(blog)
    }

    async getBlogs() {
        const response = await api.get('api/blogs')
        logger.log('received in service', response.data)
        const blogs = response.data.map(blog => new Blog(blog))
        AppState.blogs = blogs
    }

    async getBlogsById(blogId) {
        AppState.activeBlog = null
        const response = await api.get(`api/blogs/${blogId}`)
        logger.log('finding blog by Id in service', response.data)
        const blog = new Blog(response.data)
        AppState.activeBlog = blog
    }

    async getProfileProperties(creatorId) {
        const response = await api.get(`api/blogs?profileId=${creatorId}`)
        logger.log('response for profile blogs coming', response.data)
        AppState.profileProperties = null
        const blogs = response.data.map(blog => new Blog(blog))
        AppState.profileProperties = blogs
    }
}

export const blogService = new BlogService()