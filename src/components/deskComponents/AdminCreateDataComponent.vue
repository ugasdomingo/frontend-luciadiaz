<script lang="ts" setup>
//Import Tools
import { ref } from 'vue';

//Import Compornents
import BooksFormComponet from '../booksComponents/BooksFormComponet.vue';
import FormationFormComponentVue from '../formationsComponents/FormationFormComponent.vue';
import BlogFormComponent from '../blogComponents/BlogFormComponent.vue';

//Activate tools
const form = ref('');
const chooseForm = (type: string) => {
    form.value = type;
};
</script>

<template>
    <q-btn-group class="q-mb-xl">
        <q-btn
            class="botton-group"
            glossy
            label="Subir Libro"
            @click="chooseForm('Libros')"
        />
        <q-btn
            class="botton-group"
            glossy
            label="Subir Formación"
            @click="chooseForm('Formaciones')"
        />
        <q-btn
            class="botton-group"
            glossy
            label="Subir Post"
            @click="chooseForm('Blog')"
        />
    </q-btn-group>
    <div class="create-data-container">
        <BooksFormComponet v-if="form === 'Libros'" />
        <FormationFormComponentVue v-if="form === 'Formaciones'" />
        <BlogFormComponent v-if="'Blog'" />
    </div>
</template>

<style lang="scss" scoped>
.create-data-container {
    width: 500px;
}
</style>
