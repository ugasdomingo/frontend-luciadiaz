<template>
    <q-page>
        <!-- Homepage Hero -->
        <!-- <img src="img/portada5.jpg" alt="portada" class="hero-img" /> -->
        <h1>Index</h1>
    </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-img {
    width: 100%;
    height: 100%;
    min-height: 300px;
    z-index: -1;
    object-fit: cover;
    position: fixed;
    top: 0;
    opacity: 0.5;
}

@media screen and (max-width: 1080px) {
    .hero-img {
        background-color: none;
    }
}
</style>
