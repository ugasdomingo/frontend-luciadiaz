<template>
    <div class="info-container">
        <img
            :src="
                'https://res.cloudinary.com/minteados/image/upload/v1680304667/' +
                blogsStore.oneBlog?.img?.public_id
            "
            alt="BlogPortada"
            class="portada-img"
        />
        <div class="title">
            <h1 class="q-my-none">{{ blogsStore.oneBlog?.title }}</h1>
            <h6 class="q-my-none">Author: {{ blogsStore.oneBlog?.author }}</h6>
        </div>
    </div>
    <div class="body-container">
        <q-video
            v-if="blogsStore.oneBlog?.urlVideo"
            :src="blogsStore.oneBlog?.urlVideo"
            frameborder="0"
            allowfullscreen
        />
        <div v-html="blogsStore.oneBlog?.body"></div>
    </div>
</template>

<script lang="ts" setup>
//Import tools
import { useRoute } from 'vue-router';
import { useBlogsStore } from 'src/stores/blog-store';

//Activate tootls
const route = useRoute();
const blogsStore = useBlogsStore();

//Get Single Blog data
const getSingleBlog = async (id: any) => {
    await blogsStore.getBlogByID(id);
};

getSingleBlog(route.params.id);
</script>

<style lang="scss" scoped>
.info-container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2em 1em;
}
.title {
    display: flex;
    flex-direction: column;
    padding: 0 1em;
}
.body-container {
    width: 100%;
    padding: 2em 1em;
}
.portada-img {
    max-width: 350px;
    max-height: 250px;
    object-fit: cover;
}

@media screen and (max-width: 760px) {
    .info-container {
        flex-direction: column;
    }
    .body-container {
        padding: 0 1em;
    }
}
</style>
