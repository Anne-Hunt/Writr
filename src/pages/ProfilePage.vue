<script setup>
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { onMounted } from 'vue';
import { profileService } from '../services/ProfileService.js';

const route = useRoute()

async function getProfile(){
    try {
        const profileId = route.params.id
        await profileService.getProfile(profileId)
    } catch (error) {
        logger.log('error in getting profile in page', error)
        Pop.toast('unable to access that profile at the moment', 'error')
    }
}

onMounted(()=> {getProfile()})
</script>


<template>
<div>
    profiles galore
</div>
</template>


<style lang="scss" scoped>

</style>