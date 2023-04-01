<script lang="ts" setup>
//Import Tootls
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import { useTestStore } from 'src/stores/test-store';

//Import Components
import GlobalAuthFormComponent from '../authComponents/GlobalAuthFormComponent.vue';

//Activate tools
const $q = useQuasar();
const router = useRouter();
const userStore = useUserStore();
const testStore = useTestStore();

//Loading
const loadding = ref(false);

//Catch Answers

const objetive = ref('');
const r1 = ref('');
const r2 = ref('');
const r3 = ref('');
const r4 = ref('');
const r5 = ref('');
const r6 = ref('');

//Logic funtions
const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;
        //Handle Responses
        const allResponses = {
            objetive: objetive.value,
            reason1: r1.value,
            reason2: r2.value,
            reason3: r3.value,
            reason4: r4.value,
            reason5: r5.value,
            reason6: r6.value,
        };

        if (userStore.token) {
            await testStore.createTestResults('Logro de Metas', allResponses);
            router.push('/mi-escritorio');
        } else {
            await userStore.register(
                userStore.name,
                userStore.email,
                userStore.password,
                userStore.phone,
                userStore.politiquesAccepted
            );
            await testStore.createTestResults('Logro de Metas', allResponses);
            router.push('/mi-escritorio');
        }
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
        <div class="col-12 col-sm-6 col-md-5 q-pb-xl">
            <h3>Bienvenido(a) al Test de Logro de Objetivos</h3>
            <p style="font-size: 1em">
                En este test descubrirás los obstáculos que percibe tu mente
                inconsciente para lograr el objetivo deseado.
            </p>
            <p style="font-size: 1.5em; padding-top: 24px">
                Escribe el objetivo que deseas lograr y 6 razones por las que
                quieres lograr ese objetivo.
            </p>
            <q-form @submit.prevent="handleSubmit">
                <div class="question" v-if="!userStore.token">
                    <GlobalAuthFormComponent />
                </div>
                <div class="question">
                    <q-input
                        v-model="objetive"
                        dark
                        label="¿Qué quieres lograr?"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                </div>
                <div class="question">
                    <q-input
                        v-model="r1"
                        dark
                        label="Primera Razón para lograr tu objetivo"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                    <q-input
                        v-model="r2"
                        dark
                        label="Segunda Razón para lograr tu objetivo"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                    <q-input
                        v-model="r3"
                        dark
                        label="Tercera Razón para lograr tu objetivo"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                    <q-input
                        v-model="r4"
                        dark
                        label="Cuarta Razón para lograr tu objetivo"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                    <q-input
                        v-model="r5"
                        dark
                        label="Quinta Razón para lograr tu objetivo"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                    <q-input
                        v-model="r6"
                        dark
                        label="Sexta Razón para lograr tu objetivo"
                        :rules="[
                            (val) =>
                                (val && val.length > 0) || 'Campo Requerido',
                        ]"
                    />
                </div>
                <q-checkbox
                    v-model="userStore.politiquesAccepted"
                    dark
                    label="Acepto las politicas de privacidad"
                    class="q-mt-md"
                />
                <div class="q-my-md" v-if="userStore.politiquesAccepted">
                    <q-btn label="Enviar" color="primary" type="submit"></q-btn>
                    <q-spinner-pie color="primary" size="2em" v-if="loadding" />
                </div>
            </q-form>
        </div>
    </q-page>
</template>

<style lang="sass" scoped>
.question
    margin-bottom: 32px
    padding: 24px
    display: grid
    background: $positive
    border-radius: 24px
.question p
    font-weight: 500
</style>
