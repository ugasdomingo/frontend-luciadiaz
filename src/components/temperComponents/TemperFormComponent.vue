<script lang="ts" setup>
//Import Tootls
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import { useTestStore } from 'src/stores/test-store';

//Import Questions
import { temperQuestions } from './temperQuestions';

//Activate tools
const $q = useQuasar();
const router = useRouter();
const userStore = useUserStore();
const testStore = useTestStore();
const getTest = async () => {
    await testStore.getAllTestResults();
};
getTest();

//Loading
const loadding = ref(false);

//Catch Answers
const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const r1 = ref('');
const r2 = ref('');
const r3 = ref('');
const r4 = ref('');
const r5 = ref('');
const r6 = ref('');
const r7 = ref('');
const r8 = ref('');
const r9 = ref('');
const r10 = ref('');
const r11 = ref('');
const r12 = ref('');
const r13 = ref('');
const r14 = ref('');
const r15 = ref('');
const r16 = ref('');
const r17 = ref('');
const r18 = ref('');
const r19 = ref('');
const r20 = ref('');
const r21 = ref('');
const r22 = ref('');
const r23 = ref('');
const r24 = ref('');
const r25 = ref('');
const r26 = ref('');
const r27 = ref('');
const r28 = ref('');
const r29 = ref('');
const r30 = ref('');
const r31 = ref('');
const r32 = ref('');
const politiquesAccepted = ref(false);

//Logic funtions
const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;
        //Handle Responses
        const allResponses = [
            r1.value,
            r2.value,
            r3.value,
            r4.value,
            r5.value,
            r6.value,
            r7.value,
            r8.value,
            r9.value,
            r10.value,
            r11.value,
            r12.value,
            r13.value,
            r14.value,
            r15.value,
            r16.value,
            r17.value,
            r18.value,
            r19.value,
            r20.value,
            r21.value,
            r22.value,
            r23.value,
            r24.value,
            r25.value,
            r26.value,
            r27.value,
            r28.value,
            r29.value,
            r30.value,
            r31.value,
            r32.value,
        ];

        // Funtion to count responses
        const setResults = (resp: string) => {
            return allResponses.filter((el) => el == resp).length;
        };

        // Find not answered questions
        const blanksQuestions = setResults('');

        if (blanksQuestions > 0) {
            $q.notify('Upps te quedaron preguntas sin responder');
        } else {
            const sanguine = setResults('a');
            const choleric = setResults('b');
            const melancholic = setResults('c');
            const phlegmatic = setResults('d');

            const finalResponse = {
                sanguine,
                choleric,
                melancholic,
                phlegmatic,
            };

            if (userStore.token) {
                await testStore.createTestResults(
                    'Temperamento',
                    finalResponse
                );
                await userStore.self();
                await testStore.getAllUserTestResults(userStore.selfUid);
                loadding.value = !loadding.value;
                router.push('/mi-escritorio');
            } else {
                await userStore.register(
                    name.value,
                    email.value,
                    phone.value,
                    password.value,
                    politiquesAccepted.value
                );
                await testStore.createTestResults(
                    'Temperamento',
                    finalResponse
                );
                await userStore.self();
                await testStore.getAllUserTestResults(userStore.selfUid);
                loadding.value = !loadding.value;
                router.push('/mi-escritorio');
            }
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
            <h3>Bienvenido(a) al Test de Temperamento</h3>
            <p style="font-size: 1em">
                Este test tiene la finalidad de identificiar tus modelos y
                patornes de comportamiento, permitiendo trabajar de manera
                personalizada en tu plan de desarrollo personal. Llevándote a
                conocer más tus fortalezas y las áreas a potenciar en tu vida
            </p>
            <p style="font-size: 1.5em; padding-top: 24px">
                Comencemos: <br />Por favor selecciona la opción con la que más
                te identifique en cada caso
            </p>
        </div>
        <q-spinner-pie color="primary" size="5em" v-if="loadding" />
        <q-form v-else @submit.prevent="handleSubmit">
            <!-- USERS DATA -->
            <div v-if="!userStore.token">
                <q-input
                    v-model="name"
                    dark
                    type="text"
                    label="Nombre Completo"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="email"
                    label="Email"
                    type="text"
                    dark
                    :rules="[
                        (val) =>
                            (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                            'Formato email incorrecto',
                    ]"
                />
                <q-input
                    v-model="phone"
                    type="text"
                    dark
                    label="Teléfono"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
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
            <div class="question">
                <q-radio v-model="r1" val="a" :label="temperQuestions[0].a" />
                <q-radio v-model="r1" val="b" :label="temperQuestions[0].b" />
                <q-radio v-model="r1" val="c" :label="temperQuestions[0].c" />
                <q-radio v-model="r1" val="d" :label="temperQuestions[0].d" />
            </div>
            <div class="question">
                <q-radio v-model="r2" val="a" :label="temperQuestions[1].a" />
                <q-radio v-model="r2" val="b" :label="temperQuestions[1].b" />
                <q-radio v-model="r2" val="c" :label="temperQuestions[1].c" />
                <q-radio v-model="r2" val="d" :label="temperQuestions[1].d" />
            </div>
            <div class="question">
                <q-radio v-model="r3" val="a" :label="temperQuestions[2].a" />
                <q-radio v-model="r3" val="b" :label="temperQuestions[2].b" />
                <q-radio v-model="r3" val="c" :label="temperQuestions[2].c" />
                <q-radio v-model="r3" val="d" :label="temperQuestions[2].d" />
            </div>
            <div class="question">
                <q-radio v-model="r4" val="a" :label="temperQuestions[3].a" />
                <q-radio v-model="r4" val="b" :label="temperQuestions[3].b" />
                <q-radio v-model="r4" val="c" :label="temperQuestions[3].c" />
                <q-radio v-model="r4" val="d" :label="temperQuestions[3].d" />
            </div>
            <div class="question">
                <q-radio v-model="r5" val="a" :label="temperQuestions[4].a" />
                <q-radio v-model="r5" val="b" :label="temperQuestions[4].b" />
                <q-radio v-model="r5" val="c" :label="temperQuestions[4].c" />
                <q-radio v-model="r5" val="d" :label="temperQuestions[4].d" />
            </div>
            <div class="question">
                <q-radio v-model="r6" val="a" :label="temperQuestions[5].a" />
                <q-radio v-model="r6" val="b" :label="temperQuestions[5].b" />
                <q-radio v-model="r6" val="c" :label="temperQuestions[5].c" />
                <q-radio v-model="r6" val="d" :label="temperQuestions[5].d" />
            </div>
            <div class="question">
                <q-radio v-model="r7" val="a" :label="temperQuestions[6].a" />
                <q-radio v-model="r7" val="b" :label="temperQuestions[6].b" />
                <q-radio v-model="r7" val="c" :label="temperQuestions[6].c" />
                <q-radio v-model="r7" val="d" :label="temperQuestions[6].d" />
            </div>
            <div class="question">
                <q-radio v-model="r8" val="a" :label="temperQuestions[7].a" />
                <q-radio v-model="r8" val="b" :label="temperQuestions[7].b" />
                <q-radio v-model="r8" val="c" :label="temperQuestions[7].c" />
                <q-radio v-model="r8" val="d" :label="temperQuestions[7].d" />
            </div>
            <div class="question">
                <q-radio v-model="r9" val="a" :label="temperQuestions[8].a" />
                <q-radio v-model="r9" val="b" :label="temperQuestions[8].b" />
                <q-radio v-model="r9" val="c" :label="temperQuestions[8].c" />
                <q-radio v-model="r9" val="d" :label="temperQuestions[8].d" />
            </div>
            <div class="question">
                <q-radio v-model="r10" val="a" :label="temperQuestions[9].a" />
                <q-radio v-model="r10" val="b" :label="temperQuestions[9].b" />
                <q-radio v-model="r10" val="c" :label="temperQuestions[9].c" />
                <q-radio v-model="r10" val="d" :label="temperQuestions[9].d" />
            </div>
            <div class="question">
                <q-radio v-model="r11" val="a" :label="temperQuestions[10].a" />
                <q-radio v-model="r11" val="b" :label="temperQuestions[10].b" />
                <q-radio v-model="r11" val="c" :label="temperQuestions[10].c" />
                <q-radio v-model="r11" val="d" :label="temperQuestions[10].d" />
            </div>
            <div class="question">
                <q-radio v-model="r12" val="a" :label="temperQuestions[11].a" />
                <q-radio v-model="r12" val="b" :label="temperQuestions[11].b" />
                <q-radio v-model="r12" val="c" :label="temperQuestions[11].c" />
                <q-radio v-model="r12" val="d" :label="temperQuestions[11].d" />
            </div>
            <div class="question">
                <q-radio v-model="r13" val="a" :label="temperQuestions[12].a" />
                <q-radio v-model="r13" val="b" :label="temperQuestions[12].b" />
                <q-radio v-model="r13" val="c" :label="temperQuestions[12].c" />
                <q-radio v-model="r13" val="d" :label="temperQuestions[12].d" />
            </div>
            <div class="question">
                <q-radio v-model="r14" val="a" :label="temperQuestions[13].a" />
                <q-radio v-model="r14" val="b" :label="temperQuestions[13].b" />
                <q-radio v-model="r14" val="c" :label="temperQuestions[13].c" />
                <q-radio v-model="r14" val="d" :label="temperQuestions[13].d" />
            </div>
            <div class="question">
                <q-radio v-model="r15" val="a" :label="temperQuestions[14].a" />
                <q-radio v-model="r15" val="b" :label="temperQuestions[14].b" />
                <q-radio v-model="r15" val="c" :label="temperQuestions[14].c" />
                <q-radio v-model="r15" val="d" :label="temperQuestions[14].d" />
            </div>
            <div class="question">
                <q-radio v-model="r16" val="a" :label="temperQuestions[15].a" />
                <q-radio v-model="r16" val="b" :label="temperQuestions[15].b" />
                <q-radio v-model="r16" val="c" :label="temperQuestions[15].c" />
                <q-radio v-model="r16" val="d" :label="temperQuestions[15].d" />
            </div>
            <div class="question">
                <q-radio v-model="r17" val="a" :label="temperQuestions[16].a" />
                <q-radio v-model="r17" val="b" :label="temperQuestions[16].b" />
                <q-radio v-model="r17" val="c" :label="temperQuestions[16].c" />
                <q-radio v-model="r17" val="d" :label="temperQuestions[16].d" />
            </div>
            <div class="question">
                <q-radio v-model="r18" val="a" :label="temperQuestions[17].a" />
                <q-radio v-model="r18" val="b" :label="temperQuestions[17].b" />
                <q-radio v-model="r18" val="c" :label="temperQuestions[17].c" />
                <q-radio v-model="r18" val="d" :label="temperQuestions[17].d" />
            </div>
            <div class="question">
                <q-radio v-model="r19" val="a" :label="temperQuestions[18].a" />
                <q-radio v-model="r19" val="b" :label="temperQuestions[18].b" />
                <q-radio v-model="r19" val="c" :label="temperQuestions[18].c" />
                <q-radio v-model="r19" val="d" :label="temperQuestions[18].d" />
            </div>
            <div class="question">
                <q-radio v-model="r20" val="a" :label="temperQuestions[19].a" />
                <q-radio v-model="r20" val="b" :label="temperQuestions[19].b" />
                <q-radio v-model="r20" val="c" :label="temperQuestions[19].c" />
                <q-radio v-model="r20" val="d" :label="temperQuestions[19].d" />
            </div>
            <div class="question">
                <q-radio v-model="r21" val="a" :label="temperQuestions[20].a" />
                <q-radio v-model="r21" val="b" :label="temperQuestions[20].b" />
                <q-radio v-model="r21" val="c" :label="temperQuestions[20].c" />
                <q-radio v-model="r21" val="d" :label="temperQuestions[20].d" />
            </div>
            <div class="question">
                <q-radio v-model="r22" val="a" :label="temperQuestions[21].a" />
                <q-radio v-model="r22" val="b" :label="temperQuestions[21].b" />
                <q-radio v-model="r22" val="c" :label="temperQuestions[21].c" />
                <q-radio v-model="r22" val="d" :label="temperQuestions[21].d" />
            </div>
            <div class="question">
                <q-radio v-model="r23" val="a" :label="temperQuestions[22].a" />
                <q-radio v-model="r23" val="b" :label="temperQuestions[22].b" />
                <q-radio v-model="r23" val="c" :label="temperQuestions[22].c" />
                <q-radio v-model="r23" val="d" :label="temperQuestions[22].d" />
            </div>
            <div class="question">
                <q-radio v-model="r24" val="a" :label="temperQuestions[23].a" />
                <q-radio v-model="r24" val="b" :label="temperQuestions[23].b" />
                <q-radio v-model="r24" val="c" :label="temperQuestions[23].c" />
                <q-radio v-model="r24" val="d" :label="temperQuestions[23].d" />
            </div>
            <div class="question">
                <q-radio v-model="r25" val="a" :label="temperQuestions[24].a" />
                <q-radio v-model="r25" val="b" :label="temperQuestions[24].b" />
                <q-radio v-model="r25" val="c" :label="temperQuestions[24].c" />
                <q-radio v-model="r25" val="d" :label="temperQuestions[24].d" />
            </div>
            <div class="question">
                <q-radio v-model="r26" val="a" :label="temperQuestions[25].a" />
                <q-radio v-model="r26" val="b" :label="temperQuestions[25].b" />
                <q-radio v-model="r26" val="c" :label="temperQuestions[25].c" />
                <q-radio v-model="r26" val="d" :label="temperQuestions[25].d" />
            </div>
            <div class="question">
                <q-radio v-model="r27" val="a" :label="temperQuestions[26].a" />
                <q-radio v-model="r27" val="b" :label="temperQuestions[26].b" />
                <q-radio v-model="r27" val="c" :label="temperQuestions[26].c" />
                <q-radio v-model="r27" val="d" :label="temperQuestions[26].d" />
            </div>
            <div class="question">
                <q-radio v-model="r28" val="a" :label="temperQuestions[27].a" />
                <q-radio v-model="r28" val="b" :label="temperQuestions[27].b" />
                <q-radio v-model="r28" val="c" :label="temperQuestions[27].c" />
                <q-radio v-model="r28" val="d" :label="temperQuestions[27].d" />
            </div>
            <div class="question">
                <q-radio v-model="r29" val="a" :label="temperQuestions[28].a" />
                <q-radio v-model="r29" val="b" :label="temperQuestions[28].b" />
                <q-radio v-model="r29" val="c" :label="temperQuestions[28].c" />
                <q-radio v-model="r29" val="d" :label="temperQuestions[28].d" />
            </div>
            <div class="question">
                <q-radio v-model="r30" val="a" :label="temperQuestions[29].a" />
                <q-radio v-model="r30" val="b" :label="temperQuestions[29].b" />
                <q-radio v-model="r30" val="c" :label="temperQuestions[29].c" />
                <q-radio v-model="r30" val="d" :label="temperQuestions[29].d" />
            </div>
            <div class="question">
                <q-radio v-model="r31" val="a" :label="temperQuestions[30].a" />
                <q-radio v-model="r31" val="b" :label="temperQuestions[30].b" />
                <q-radio v-model="r31" val="c" :label="temperQuestions[30].c" />
                <q-radio v-model="r31" val="d" :label="temperQuestions[30].d" />
            </div>
            <div class="question">
                <q-radio v-model="r32" val="a" :label="temperQuestions[31].a" />
                <q-radio v-model="r32" val="b" :label="temperQuestions[31].b" />
                <q-radio v-model="r32" val="c" :label="temperQuestions[31].c" />
                <q-radio v-model="r32" val="d" :label="temperQuestions[31].d" />
            </div>
            <q-checkbox
                v-model="politiquesAccepted"
                dark
                label="Acepto las politicas de privacidad"
                class="q-mt-md"
            />
            <div class="q-my-md" v-if="politiquesAccepted">
                <q-btn label="Enviar" color="primary" type="submit"></q-btn>
            </div>
        </q-form>
    </q-page>
</template>

<style lang="sass" scoped>
.question
    padding: 16px
    margin-bottom: 16px
    display: grid
    background: $positive
    border-radius: 24px
    border: 1px solid #2e2c6d
    color: white

.question p
    font-weight: 500
</style>
