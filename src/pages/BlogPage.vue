<script setup>
import { onMounted } from 'vue';
import { blogService } from '../services/BlogService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';

const route = useRoute()

async function getBlogById(){
    try {
        const blogId = route.params.blogId
        await blogService.getBlogsById(blogId)
    } catch (error) {
        Pop.toast('Unable to find that entry', 'error')
        logger.log('unable to load activeBlog', error)
    }
}

onMounted(()=> {getBlogById()})
</script>


<template>
<div>

</div>
</template>


<style lang="scss" scoped>

</style>