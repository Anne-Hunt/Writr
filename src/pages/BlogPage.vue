<script setup>
import { computed, onMounted } from 'vue';
import { blogService } from '../services/BlogService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import ProfileInfo from '../components/ProfileInfo.vue';

const route = useRoute()
const blogs = computed(()=> AppState.blogs)
const activeBlog = computed (()=> AppState.activeBlog)
const profile = computed(()=> AppState.activeProfile)

async function getBlogById(){
    try {
        // const blogId = route.params.id
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
 
            </div>
        </div>
        <div>

            <ProfileInfo :profile="profile"/>
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