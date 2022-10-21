<script setup>
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAutoregisterStore } from 'stores/autoregistro-store';

const $q = useQuasar();
const autoregisterStore = useAutoregisterStore();
const router = useRouter();
const pensamientos = ref('');
const emocion = ref('');
const accion = ref('');
const detonante = ref('');
const handleSubmit = async () => {
    try {
        console.log('pasó las validaciones');
        await autoregisterStore.createAutoregistro(
            pensamientos.value,
            emocion.value,
            accion.value,
            detonante.value
        );
        router.push('/');
        pensamientos.value = '';
        emocion.value = '';
        accion.value = '';
        detonante.value = '';
    } catch (error) {
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
        <div class="col-12 col-sm-6 col-md-5">
            <h3>Bienvenido(a) a tu Autoregistro</h3>
            <q-form @submit.prevent="handleSubmit">
                <q-input
                    v-model="pensamientos"
                    label="Pensamiento:"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>

                <q-input
                    v-model="emocion"
                    label="Emoción:"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>

                <q-input
                    v-model="accion"
                    label="Acción:"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>

                <q-input
                    v-model="detonante"
                    label="Detonante:"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>

                <div class="registro-buttom">
                    <q-btn
                        label="Guardar Registro"
                        color="primary"
                        type="submit"
                    ></q-btn>
                </div>
            </q-form>
        </div>
    </q-page>
</template>

<style></style>
