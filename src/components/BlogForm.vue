<script setup>
import Pop from '../utils/Pop.js';
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import { blogService } from '../services/BlogService.js';

const blogData = ref({
    title: '',
    body: '',
    model: '',
    imgUrl: '',
    tags: [],
    published: Boolean,
})

async function saveBlog(){
    try {
        await blogService.saveBlog(blogData.value)
        logger.log('sending save request to service', blogData.value)
    } catch (error) {
        logger.log('could not save blog', error)
        Pop.toast('unable to save blog', 'error')
    }
}
</script>


<template>
<div>
    <form @submit.prevent="saveBlog()">
        <label for="blogtitle">Title</label>
        <input v-model="blogData.title" name="title" id="blogtitle" type="text" required maxlength="100">
        <label for="blogbody">Body</label>
        <input v-model="blogData.body" type="text" required maxlength="10000">
        <label for="blogimgUrl">Image</label>
        <input v-model="blogData.imgUrl" type="url" maxlength="500">
        <label for="blogtags">Tags</label>
        <input v-model="blogData.tags" type="text" maxLength="50">
        <label for="blogpublished">Publish?</label>
        <input v-model="blogData.published" type="checkbox" checked>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
</template>


<style lang="scss" scoped>

</style>