<script setup>
import { Blog } from '../models/Blog.js';


defineProps({
    blog: {type: Blog, required: true}
})
</script>


<template>
<div class="card">
    <h2 class="card-title fs-4 p-2">{{ blog.title }}</h2>
    <img :src="blog.imgUrl" alt="blog-image">
    <div class="sampleText">

        <p class="p-2">{{ blog.body }} ...</p>
    </div>

</div>
</template>


<style lang="scss" scoped>
img{
    max-height: 20dvh;
    object-fit: cover;
}
.sampleText{
    text-overflow: ellipsis;
    max-height: 20dvh;
}

</style>