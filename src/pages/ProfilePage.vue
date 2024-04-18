<script setup>
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { computed, onMounted } from 'vue';
import { profileService } from '../services/ProfileService.js';
import { AppState } from '../AppState.js';
import { blogService } from '../services/BlogService.js';
import ProfileBlogs from '../components/ProfileBlogs.vue';

const route = useRoute()

const profile = computed(()=> AppState.activeProfile)
const blogs = computed(()=> AppState.profileProperties)

async function getProfile(){
    try {
        const profileId = route.params.id
        await profileService.getProfile(profileId)
    } catch (error) {
        logger.log('error in getting profile in page', error)
        Pop.toast('unable to access that profile at the moment', 'error')
    }
}

async function getProfileProperties(){
    try {
        await blogService.getProfileProperties(route.params.profileId)
    } catch (error) {
        logger.log('unable to get profile blogs', error)
        Pop.toast('Unable to access that content at the moment, ask for profile blogs later', 'error')
    }
}

onMounted(()=> {
    getProfile()
    getProfileProperties()
    })
</script>


<template>
<div>
    profiles galore
    <div v-if="profile" class="row">
        <h2>Blog Content by {{ profile.name }}</h2>
        <section class="row">
            <div class="col-12">
                <div v-for="blog in blogs" :key="blog.id" class="mb-2">
                    <ProfileBlogs :blog="blog"/>
                </div>
            </div>
        </section>
    </div>
    
</div>
</template>


<style lang="scss" scoped>

</style>