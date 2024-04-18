<script setup>
import { computed, onMounted } from 'vue';
import { blogService } from '../services/BlogService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';

const blogs = computed(()=> AppState.blogs)

async function getBlogs(){
  try {
    await blogService.getBlogs()
    logger.log('sent to service for blogs')
  } catch (error) {
    logger.log('cannot retrieve blogs or service now', 'error')
    Pop.toast('Unable to access blog content', 'error')
  }
}

onMounted(()=>{
  getBlogs()
})
</script>

<template>
  <div>
    Hey yall
    {{ blogs }}
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
