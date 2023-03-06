<template>
    <q-page style="width: 100%">
        <!-- Homepage Hero -->
        <img src="img/portada5.jpg" alt="portada" class="hero-img" />
        <div class="row hero-container q-pa-xl">
            <div class="col-12 col-md-8">
                <HeroTextComponent />
            </div>
            <div class="img-container col-12 col-md-4">
                <HeroImgComponent />
            </div>
        </div>
        <!-- Cooming soon (Zero Section) -->
        <div>
            <NextCourseComponent />
        </div>
        <!-- 6 razones test (First Section) -->
        <div class="column flex-center" style="width: 100%; min-height: 70vh">
            <GiftTestComponent />
        </div>
        <!-- Arquetipo and Tempeter test (Second Section) -->
        <div class="column first-section flex-center bg-principal">
            <SixReasonsComponent />
        </div>
        <!-- Arquetipo and Tempeter test (Third Section) -->
        <!-- Historia Emocional (Last Section) -->
        <div>
            <HistoriaEmocionalComponent />
        </div>
        <div
            class="row col-12 third-section bg-principal items-center justify-evenly"
        >
            <SheduleComponent />
        </div>
        <div class="row col-12 fourth-section items-center justify-evenly">
            <MotivosComponent />
        </div>
    </q-page>
</template>

<script setup lang="ts">
// Import Hero Components
import HeroTextComponent from 'src/components/index/HeroTextComponent.vue';
import HeroImgComponent from 'src/components/index/HeroImgComponent.vue';

// Import Courses coming soon / Zero Section
import NextCourseComponent from 'src/components/index/NextCourseComponent.vue';

// Import Historia emocional / last Section
import HistoriaEmocionalComponent from 'src/components/index/HistoriaEmocionalComponent.vue';

// Import 6 Reasons / First Section
import SixReasonsComponent from 'src/components/index/SixReasonsComponent.vue';

// Import Gift Test / Second Section
import GiftTestComponent from 'src/components/index/GiftTestComponent.vue';

// Import Shedule Therapy / Third Section
import SheduleComponent from 'src/components/index/SheduleComponent.vue';

// Import Motivo de consulta / Fourth Section
import MotivosComponent from 'src/components/index/MotivosComponent.vue';
</script>

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
.zero-section {
    width: 100%;
    height: 90vh;
}
.first-section {
    width: 100%;
    height: 70vh;
}
.third-section {
    width: 100%;
    height: 70vh;
}
.fourth-section {
    width: 100%;
    height: 70vh;
}

@media screen and (max-width: 1080px) {
    .hero-img {
        background-color: none;
    }
    .hero-container {
        padding: 0px 4px 16px;
    }
    .img-container {
        padding: 0px;
        display: none;
    }
    .zero-section {
        height: 100vh;
    }
    .first-section {
        height: 40vh;
    }
    .third-section {
        height: 50vh;
        padding: 16px 0;
    }
    .fourth-section {
        height: 60vh;
        padding: 16px;
    }
}
</style>
