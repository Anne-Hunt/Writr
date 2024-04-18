import { generateId } from "../utils/GenerateId.js"

export class Blog {
    constructor(data) {
        this.body = data.body
        this.date = new Date().toLocaleDateString
        this.upDate = new Date().toLocaleDateString
        this.creator = data.creator
        this.imgUrl = data.imgUrl
        this.published = data.published
        this.tags = data.tags
        this.title = data.title
        this.id = data.id ? data.id : generateId()
    }
}
