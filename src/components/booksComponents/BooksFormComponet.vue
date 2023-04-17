<script lang="ts" setup>
//Import Tootls
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useBooksStore } from 'src/stores/books-store';

//Activate tools
const $q = useQuasar();
const booksStore = useBooksStore();

//Loading
const loadding = ref(false);

// Catch data
const booksName = ref('');
const booksType = ref([]);
const description = ref('');
const creationsDate = ref('');
const price = ref('');
const tags = ref('');
const author = ref('');
const paypalButton = ref('');
const coverImage = ref();

// Books Types
const types = [
    { label: 'Ebooks', value: 'Ebooks' },
    { label: 'Impreso', value: 'Impreso' },
    { label: 'Ebook-personalizado', value: 'Ebook-personalizado' },
    { label: 'Impreso-personalizado', value: 'Impreso-personalizado' },
];

//Logics Funtions
const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;
        //Set formData
        let formData = new FormData();

        //Push to formData
        formData.append('booksName', booksName.value);
        formData.append('booksType', booksType.value.toString());
        formData.append('description', description.value);
        formData.append('creationsDate', creationsDate.value);
        formData.append('price', price.value);
        formData.append('tags', tags.value);
        formData.append('author', author.value);
        formData.append('paypalButton', paypalButton.value);
        formData.append('coverImage', coverImage.value);

        await booksStore.createBook(formData);

        loadding.value = !loadding.value;
        $q.notify('Libro Agregado, Felicitaciones');
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
        <h3>Agregar Libro</h3>
        <q-spinner-pie color="primary" size="5em" v-if="loadding" />
        <q-form v-else dark @submit.prevent="handleSubmit">
            <q-input
                v-model="booksName"
                type="text"
                dark
                label="Nombre Del Libro"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-option-group
                v-model="booksType"
                type="checkbox"
                dark
                label="¿Tipo de Libro?"
                :options="types"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-input
                v-model="description"
                type="textarea"
                dark
                label="Resumen del libro"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <div class="q-pa-md" style="max-width: 300px">
                <q-input
                    filled
                    v-model="creationsDate"
                    mask="date"
                    :rules="['date']"
                >
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy
                                cover
                                transition-show="scale"
                                transition-hide="scale"
                            >
                                <q-date v-model="creationsDate">
                                    <div class="row items-center justify-end">
                                        <q-btn
                                            v-close-popup
                                            label="Close"
                                            color="primary"
                                            flat
                                        />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <q-input
                v-model="price"
                type="text"
                dark
                label="Precio"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-input
                v-model="tags"
                type="text"
                dark
                label="Etiquetas del libro"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-input
                v-model="author"
                type="text"
                dark
                label="Author del Libro"
            />
            <q-input
                v-model="paypalButton"
                type="text"
                dark
                label="Nombre boton de paypal"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-file v-model="coverImage" dark label="Adjuntar Portada" />
            <div class="q-my-md">
                <q-btn label="Subir" color="primary" type="submit"></q-btn>
            </div>
        </q-form>
    </q-page>
</template>

<style lang="scss" scoped></style>
