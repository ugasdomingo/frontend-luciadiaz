<script lang="ts" setup>
//Import Tootls
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import { useTestStore } from 'src/stores/test-store';

//Import Questions
import { anamnesisQuestions } from './anamnesisQuestions';

//Activate tools
const $q = useQuasar();
const router = useRouter();
const userStore = useUserStore();
const testStore = useTestStore();

//Loading
const loadding = ref(false);

//Catch Answers
const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const kidsName = ref('');
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

//Logics Funtions
const handleSubmit = async () => {
    try {
        const allResponses = {
            kidsName: kidsName.value,
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

        if (userStore.token) {
            await testStore.createTestResults('Anamnesis', allResponses);
        } else {
            await userStore.register(
                name.value,
                email.value,
                phone.value,
                password.value,
                politiquesAccepted.value
            );
            await testStore.createTestResults('Anamnesis', allResponses);
        }

        router.push('/mi-escritorio');
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
        <div class="col-12 col-sm-6 col-md-7 q-pl-xs text-white">
            <h3>Formulario Anamnesis</h3>
            <p style="font-size: 1em">
                Esta información es para recoger la historia de tu peque, la
                cual sera vital para generar un panorama del comportamiento del
                niño(a) y a partir de ahí poder crear un plan de acción.
            </p>
            <q-form dark @submit.prevent="handleSubmit">
                <!-- USERS DATA -->
                <div v-if="!userStore.token">
                    <q-input
                        v-model="name"
                        type="text"
                        dark
                        label="Nombre Completo"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                    <q-input
                        v-model="email"
                        label="Email"
                        type="text"
                        dark
                        :rules="[
                            (val) =>
                                (val &&
                                    /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                                'Formato email incorrecto',
                        ]"
                    />
                    <q-input
                        v-model="phone"
                        type="text"
                        dark
                        label="Teléfono"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                    <q-input
                        v-model="password"
                        label="Contraseña"
                        type="password"
                        dark
                        :rules="[
                            (val) =>
                                (val && val.length > 5) ||
                                'Contraseña mínimo 6 carácteres',
                        ]"
                    >
                        <template v-slot:hint>
                            Si ya tienes una cuenta, usa tu contraseña
                        </template>
                    </q-input>
                </div>
                <!-- TESTS QUESTIONS -->
                <q-input
                    v-model="kidsName"
                    :type="anamnesisQuestions[0].type"
                    dark
                    :label="anamnesisQuestions[0].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="edad"
                    :type="anamnesisQuestions[1].type"
                    dark
                    :label="anamnesisQuestions[1].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta1"
                    :type="anamnesisQuestions[2].type"
                    dark
                    :label="anamnesisQuestions[2].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta2"
                    :type="anamnesisQuestions[3].type"
                    dark
                    :label="anamnesisQuestions[3].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta3"
                    :type="anamnesisQuestions[4].type"
                    dark
                    :label="anamnesisQuestions[4].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta4"
                    :type="anamnesisQuestions[5].type"
                    dark
                    :label="anamnesisQuestions[5].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta5"
                    :type="anamnesisQuestions[6].type"
                    dark
                    :label="anamnesisQuestions[6].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta6"
                    :type="anamnesisQuestions[7].type"
                    dark
                    :label="anamnesisQuestions[7].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta7"
                    :type="anamnesisQuestions[8].type"
                    dark
                    :label="anamnesisQuestions[8].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta8"
                    :type="anamnesisQuestions[9].type"
                    dark
                    :label="anamnesisQuestions[9].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta9"
                    :type="anamnesisQuestions[10].type"
                    dark
                    :label="anamnesisQuestions[10].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta10"
                    :type="anamnesisQuestions[11].type"
                    dark
                    :label="anamnesisQuestions[11].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta11"
                    :type="anamnesisQuestions[12].type"
                    dark
                    :label="anamnesisQuestions[12].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta12"
                    :type="anamnesisQuestions[13].type"
                    dark
                    :label="anamnesisQuestions[13].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta13"
                    :type="anamnesisQuestions[14].type"
                    dark
                    :label="anamnesisQuestions[14].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta14"
                    :type="anamnesisQuestions[15].type"
                    dark
                    :label="anamnesisQuestions[15].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta15"
                    :type="anamnesisQuestions[16].type"
                    dark
                    :label="anamnesisQuestions[16].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta16"
                    :type="anamnesisQuestions[17].type"
                    dark
                    :label="anamnesisQuestions[17].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta17"
                    :type="anamnesisQuestions[18].type"
                    dark
                    :label="anamnesisQuestions[18].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta18"
                    :type="anamnesisQuestions[19].type"
                    dark
                    :label="anamnesisQuestions[19].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta19"
                    :type="anamnesisQuestions[20].type"
                    dark
                    :label="anamnesisQuestions[20].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta20"
                    :type="anamnesisQuestions[21].type"
                    dark
                    :label="anamnesisQuestions[21].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="pregunta21"
                    :type="anamnesisQuestions[22].type"
                    dark
                    :label="anamnesisQuestions[22].label"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-checkbox
                    v-model="politiquesAccepted"
                    label="Acepto las politicas de privacidad"
                    class="q-mt-md"
                />
                <div class="q-my-md" v-if="politiquesAccepted">
                    <q-btn label="Enviar" color="primary" type="submit"></q-btn>
                    <q-spinner-pie color="primary" size="2em" v-if="loadding" />
                </div>
            </q-form>
        </div>
    </q-page>
</template>
