<script setup>
import { Blog } from '../models/Blog.js';

defineProps({
    blog: {type: Blog, required: true}
})
</script>


<template>
    <RouterLink :to="{name: 'Blog', params: {blogId: blog.id}}">
        <div class="card">
            <h2 class="card-title fs-4 p-2">{{ blog.title }}</h2>
            <img :src="blog.imgUrl" alt="blog-image">
            <div class="sampleText">
                <p class="overflow p-2">{{ blog.body }} ...</p>
            </div>
        </div>
    </RouterLink>
</template>


<style lang="scss" scoped>
img{
    max-height: 20dvh;
    object-fit: cover;
}
.sampleText{
    overflow: hidden;
    white-space: nowrap;
    max-height: 20dvh;
}
.overflow {
    text-overflow: ellipsis;
}

</style>