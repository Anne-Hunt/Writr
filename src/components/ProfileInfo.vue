<script setup>
import { Blog } from '../models/Blog.js';
import { Profile } from '../models/Profile.js';


defineProps({
    activeBlog: {type: Blog, required: true},
    profile: {type: Profile, required: true}
})


</script>


<template>
    <div>
        <RouterLink :to="{name: 'Profile', params: {profileId: profile.id}}">
            <div>
                written by: {{ profile.name }}
            </div>
        </RouterLink>
    </div>
</template>


<style lang="scss" scoped>

</style>