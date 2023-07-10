<template>
    <q-page>
        <!-- Homepage Hero -->
        <div class="hero-container">
            <HeroComponent />
        </div>
        <!-- Homepage Test -->
        <div class="normal-container">
            <IndexTestComponent />
        </div>
        <!-- Homepage Citas -->
        <div class="action-container">
            <IndexCitaComponent />
        </div>
        <!-- Homepage Formations -->
        <div class="normal-container">
            <IndexFormationsComponent
                :formations="formationsStore.allFormations"
            />
        </div>
        <!-- Homepage Books -->
        <div class="normal-container">
            <IndexBookComponent :book="booksStore.allBooks[0]" />
        </div>
        <!-- Homepage About Me -->
        <div class="normal-container">
            <IndexAboutMeComponent />
        </div>
        <!-- Homepage Posts -->
        <div class="normal-container">
            <IndexBlogComponent :posts="blogsStore.allBlogs" />
        </div>
    </q-page>
</template>

<script setup lang="ts">
//Import tools
import { useBooksStore } from 'src/stores/books-store';
import { useFormationsStore } from 'src/stores/formations-store';
import { useBlogsStore } from 'src/stores/blog-store';

//Import Components
import HeroComponent from 'src/components/indexComponents/HeroComponent.vue';
import IndexTestComponent from 'src/components/indexComponents/IndexTestComponent.vue';
import IndexCitaComponent from 'src/components/indexComponents/IndexCitaComponent.vue';
import IndexFormationsComponent from 'src/components/indexComponents/IndexFormationsComponent.vue';
import IndexBookComponent from 'src/components/indexComponents/IndexBookComponent.vue';
import IndexAboutMeComponent from 'src/components/indexComponents/IndexAboutMeComponent.vue';
import IndexBlogComponent from 'src/components/indexComponents/IndexBlogComponent.vue';

//Activate tools
const booksStore = useBooksStore();
const formationsStore = useFormationsStore();
const blogsStore = useBlogsStore();
formationsStore.getAllFormations(3);
booksStore.getAllBooks();
blogsStore.getAllBlogs(3);
</script>

<style lang="scss" scoped>
.hero-container {
    width: 100%;
    height: 70vh;
    box-sizing: border-box;
}
.normal-container {
    width: 100%;
    height: 500px;
    box-sizing: border-box;
}
.action-container {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
}
@media screen and (max-width: 760px) {
    .hero-container {
        height: 60vh;
    }
    .normal-container {
        height: auto;
    }
    .action-container {
        height: auto;
    }
}
</style>
