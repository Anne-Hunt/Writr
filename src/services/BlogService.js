import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class BlogService {
    async getBlogs() {
        const response = await api.get('api/blogs')
        logger.log('received in service', response.data)
        const blogs = response.data.map(blog => new Blog(blog))
        AppState.blogs = blogs
    }
}

export const blogService = new BlogService()