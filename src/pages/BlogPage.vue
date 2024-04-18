<script setup>
import { computed, onMounted } from 'vue';
import { blogService } from '../services/BlogService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';

const route = useRoute()
const blogs = computed(()=> AppState.blogs)
const activeBlog = computed (()=> AppState.activeBlog)

async function getBlogById(){
    try {
        // const blogId = route.params.blogId
        await blogService.getBlogsById(route.params.blogId)
    } catch (error) {
        Pop.toast('Unable to find that entry', 'error')
        logger.log('unable to load activeBlog', error)
    }
}

onMounted(()=> {getBlogById()})
</script>

<template>
    <section class="row">
        <div class="card col-12">
            <!-- <div > -->
            <img :src="activeBlog.imgUrl" alt="image-for-blog" class="card-img-top">
            <!-- </div> -->
            <div class="card-body">
                <h2>{{ activeBlog.title }}</h2>
                <p>{{ activeBlog.body }}</p>
                <RouterLink :to="{name: 'Profile', params: {creatorId: creator.id}}">
                    <div>
                        written by: {{ activeBlog.creator.name }}
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
img{
    max-height: 40dvh;
    object-fit: cover;
}
.imghead{
    object-fit: contain;
    max-height: 100%;
}
</style>