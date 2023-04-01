<script lang="ts" setup>
//Import Tootls
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useFormationsStore } from 'src/stores/formations-store';

//Activate tools
const $q = useQuasar();
const formationsStore = useFormationsStore();

//Loading
const loadding = ref(false);

// Catch data
const formationName = ref('');
const formationType = ref([]);
const description = ref('');
const initialDate = ref('');
const price = ref('');
const location = ref('');
const tags = ref();
const paypalButton = ref();
const coverImage = ref();

// Books Types
const types = [
    { label: 'Online - Grabado', value: 'Online - Grabado' },
    { label: 'Online - En vivo', value: 'Online - En vivo' },
    { label: 'Presencial', value: 'Presencial' },
];

//Logics Funtions
const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;
        //Set formData
        let formData = new FormData();

        //Push to formData
        formData.append('formationName', formationName.value);
        formData.append('formationType', formationType.value.toString());
        formData.append('description', description.value);
        formData.append('initialDate', initialDate.value);
        formData.append('price', price.value);
        formData.append('location', location.value);
        formData.append('tags', tags.value);
        formData.append('paypalButton', paypalButton.value);
        formData.append('coverImage', coverImage.value);

        await formationsStore.createFormation(formData);

        loadding.value = !loadding.value;
        $q.notify('Formación Agregado, Felicitaciones');
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
    <q-page class="row justify-center">
        <h3>Agregar Formación</h3>
        <q-form dark @submit.prevent="handleSubmit">
            <q-input
                v-model="formationName"
                type="text"
                dark
                label="Nombre De la formación"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-option-group
                v-model="formationType"
                type="radio"
                dark
                label="¿Tipo de Formación?"
                :options="types"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-input
                v-model="description"
                type="text"
                dark
                label="Resumen de la formación"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <div class="q-pa-md" style="max-width: 300px">
                <q-input
                    filled
                    v-model="initialDate"
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
                                <q-date v-model="initialDate">
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
                v-model="location"
                type="text"
                dark
                label="Ubicación"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-input
                v-model="tags"
                type="text"
                dark
                label="Etiquetas de la formación"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
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
                <q-btn label="Enviar" color="primary" type="submit"></q-btn>
                <q-spinner-pie color="accent" size="2em" v-if="loadding" />
            </div>
        </q-form>
    </q-page>
</template>
