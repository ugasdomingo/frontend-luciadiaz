<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import { ref } from 'vue';

import { useEnrollmentStore } from 'stores/enrollment-store';

// Setup Tools
const q$ = useQuasar();
const userStore = useUserStore();
const enrollmentStore = useEnrollmentStore();
const router = useRouter();

const userName = ref('');
const email = ref('');
const password = ref('');
const name = ref('');
const edad = ref('');
const pregunta1 = ref('');
const pregunta2 = ref('');
const pregunta3 = ref('');
const pregunta4 = ref('');
const pregunta5 = ref('');
const pregunta6 = ref('');
const pregunta7 = ref('');
const pregunta8 = ref('');
const pregunta9 = ref('');
const pregunta10 = ref('');
const pregunta11 = ref('');
const pregunta12 = ref('');
const pregunta13 = ref('');
const pregunta14 = ref('');
const pregunta15 = ref('');
const pregunta16 = ref('');
const pregunta17 = ref('');
const pregunta18 = ref('');
const pregunta19 = ref('');
const pregunta20 = ref('');
const pregunta21 = ref('');
const politiquesAccepted = ref(false);

const handleSubmit = async () => {
    try {
        const allResponses = {
            name: name.value,
            edad: edad.value,
            pregunta1: pregunta1.value,
            pregunta2: pregunta2.value,
            pregunta3: pregunta3.value,
            pregunta4: pregunta4.value,
            pregunta5: pregunta5.value,
            pregunta6: pregunta6.value,
            pregunta7: pregunta7.value,
            pregunta8: pregunta8.value,
            pregunta9: pregunta9.value,
            pregunta10: pregunta10.value,
            pregunta11: pregunta11.value,
            pregunta12: pregunta12.value,
            pregunta13: pregunta13.value,
            pregunta14: pregunta14.value,
            pregunta15: pregunta15.value,
            pregunta16: pregunta16.value,
            pregunta17: pregunta17.value,
            pregunta18: pregunta18.value,
            pregunta19: pregunta19.value,
            pregunta20: pregunta20.value,
            pregunta21: pregunta21.value,
        };
        console.log(allResponses);

        const findUser = await userStore.getUserByEmail(email.value);

        if (findUser) {
            await userStore.access(email.value, password.value);
            await enrollmentStore.createAnamnesis(allResponses);
        } else {
            await userStore.register(
                name.value,
                email.value,
                password.value,
                politiquesAccepted.value
            );
            await enrollmentStore.createAnamnesis(allResponses);
        }

        router.push('/gracias');
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
    q$.dialog({
        title: 'Error',
        message,
    });
};
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-6 col-md-7 q-pl-xs">
            <h3>Formulario Anamnesis</h3>
            <p style="font-size: 1em">
                Esta información es para recoger la historia de tu peque, la
                cual sera vital para generar un panorama del comportamiento del
                niño(a) y a partir de ahí poder crear un plan de acción.
            </p>
            <q-form @submit.prevent="handleSubmit">
                <q-input
                    v-model="userName"
                    label="Nombre Completo"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="email"
                    label="Ingrese email"
                    type="text"
                    :rules="[
                        (val) =>
                            (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                            'Formato email incorrecto',
                    ]"
                ></q-input>
                <q-input
                    v-model="password"
                    label="Ingrese contraseña (Si ya tienes una cuenta, usa tu contraseña)"
                    type="password"
                    :rules="[
                        (val) =>
                            (val && val.length > 5) ||
                            'Contraseña mínimo 6 carácteres',
                    ]"
                ></q-input>
                <q-input
                    v-model="name"
                    label="Nombre del niño:"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="edad"
                    label="Edad:"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta1"
                    label="Grado escolar:"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta2"
                    label="¿Embarazo planificado?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta3"
                    label="Tiempo de gestación"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta4"
                    label="Parto natural o cesarea"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta5"
                    label="Duración del parto"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta6"
                    label="Tomo pecho (¿Cuánto tiempo) o biberon"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta7"
                    label="Gatió (Si, No, ¿Cuándo?)"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta8"
                    label="¿Cuándo comenzo a caminar?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta9"
                    label="Cuándo comenzo alientación complementaria"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta10"
                    label="Sus primeras palabras ¿Cuándo fueron?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta11"
                    label="¿Duerme solo? (Si o no)"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta12"
                    label="Juega con otros niños o prefiere jugar solo?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta13"
                    label="¿Hace contacto visual?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta14"
                    label="¿Permite el contacto físico de personas conocidas?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta15"
                    label="¿Terror nocturno o pesadillas?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta16"
                    label="¿Se incomoda con sonidos fuertes?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta17"
                    label="¿Hace pataletas? (¿Cada cúanto tiempo?)"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta18"
                    label="¿Se hace pis en la cama cuando duerme?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta19"
                    label="¿Va al baño con regularidad o tiende a ser estítico?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta20"
                    label="¿Se concentra al momento de comer o se distrae y no termina de comer?"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <q-input
                    v-model="pregunta21"
                    label="¿Cómo se relaciona con sus padres y hermanos(as) (si los tiene):"
                    type="text"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                ></q-input>
                <div class="registro-buttom q-my-md">
                    <q-btn
                        label="Procesar Test"
                        color="primary"
                        type="submit"
                    ></q-btn>
                </div>
            </q-form>
        </div>
    </q-page>
</template>
