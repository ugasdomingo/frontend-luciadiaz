<script lang="ts" setup>
//Import Tootls
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useBlogsStore } from 'src/stores/blog-store';
import { toolbarString, fontsString } from './utilToWritePost';

//Activate Tools
const $q = useQuasar();
const blogsStore = useBlogsStore();

//Loading
const loadding = ref(false);

// Catch data
const title = ref('');
const body = ref('');
const category = ref([]);
const img = ref();

//Blog Categorys
const categorys = [
    { label: 'Psicología Infantil', value: 'psicologia-infantil' },
    { label: 'Psicología Crecimiento', value: 'psicologia-crecimiento' },
    { label: 'Psicología Parejas', value: 'psicologia-parejas' },
    { label: 'Primeros auxilios', value: 'psicologia-auxilios' },
];

//Logics Funtions
const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;
        //Set formData
        let formData = new FormData();

        //Push to formData
        formData.append('title', title.value);
        formData.append('category', category.value.toString());
        formData.append('body', body.value);
        formData.append('img', img.value);

        await blogsStore.createBlog(formData);
        console.log(formData);

        loadding.value = !loadding.value;
        $q.notify('Post Agregado, Felicitaciones');
    } catch (error: any) {
        console.log('error', error);
        if (error.error) {
            alertDialogBackend(error.error);
        } else if (error.errors[0].msg) {
            alertDialogBackend(error.errors[0].msg);
        } else {
            alertDialogBackend();
        }
    }
};

const alertDialogBackend = (message = 'Error en el servidor') => {
    $q.dialog({
        title: 'Error',
        message,
    });
};
</script>

<template>
    <q-page class="column items-center form-container">
        <h3>Agregar Post</h3>
        <q-spinner-pie color="primary" size="5em" v-if="loadding" />
        <q-form v-else dark @submit.prevent="handleSubmit">
            <q-input
                v-model="title"
                type="text"
                dark
                label="Título del Post"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-editor
                v-model="body"
                :dense="$q.screen.lt.md"
                :toolbar="[
                    [
                        {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            list: 'only-icons',
                            options: ['left', 'center', 'right', 'justify'],
                        },
                        {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify'],
                        },
                    ],
                    [
                        'bold',
                        'italic',
                        'strike',
                        'underline',
                        'subscript',
                        'superscript',
                    ],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['print', 'fullscreen'],
                    [
                        {
                            label: $q.lang.editor.formatting,
                            icon: $q.iconSet.editor.formatting,
                            list: 'no-icons',
                            options: [
                                'p',
                                'h1',
                                'h2',
                                'h3',
                                'h4',
                                'h5',
                                'h6',
                                'code',
                            ],
                        },
                        {
                            label: $q.lang.editor.fontSize,
                            icon: $q.iconSet.editor.fontSize,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                                'size-1',
                                'size-2',
                                'size-3',
                                'size-4',
                                'size-5',
                                'size-6',
                                'size-7',
                            ],
                        },
                        {
                            label: $q.lang.editor.defaultFont,
                            icon: $q.iconSet.editor.font,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                                'default_font',
                                'arial',
                                'arial_black',
                                'comic_sans',
                                'courier_new',
                                'impact',
                                'lucida_grande',
                                'times_new_roman',
                                'verdana',
                            ],
                        },
                        'removeFormat',
                    ],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                    ['undo', 'redo'],
                    ['viewsource'],
                ]"
                :fonts="{
                    arial: 'Arial',
                    arial_black: 'Arial Black',
                    comic_sans: 'Comic Sans MS',
                    courier_new: 'Courier New',
                    impact: 'Impact',
                    lucida_grande: 'Lucida Grande',
                    times_new_roman: 'Times New Roman',
                    verdana: 'Verdana',
                }"
            />
            <q-option-group
                v-model="category"
                type="checkbox"
                dark
                :options="categorys"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-file v-model="img" dark label="Adjuntar Portada" />
            <div class="q-my-md">
                <q-btn label="Enviar" color="primary" type="submit"></q-btn>
            </div>
        </q-form>
    </q-page>
</template>
