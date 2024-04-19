import { generateId } from "../utils/GenerateId.js"
import { Account } from "./Account.js"

export class Blog {
    constructor(data) {
        this.body = data.body
        this.date = new Date(data.createdAt).toLocaleDateString
        this.upDate = new Date(data.updatedAt).toLocaleDateString
        this.creator = new Account(data.creator)
        this.creatorId = data.creatorId
        this.imgUrl = data.imgUrl
        this.published = data.published
        this.tags = data.tags
        this.title = data.title
        this.id = data.id ? data.id : generateId()
    }
}
