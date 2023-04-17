<template>
    <IndexBlogComponent :posts="blogsStore.allBlogs" />
</template>

<script lang="ts" setup>
//Import tools
import { useBlogsStore } from 'src/stores/blog-store';

//Import Components
import IndexBlogComponent from 'src/components/indexComponents/IndexBlogComponent.vue';

//Activate tools
const blogsStore = useBlogsStore();

blogsStore.getAllBlogs(0);
</script>
