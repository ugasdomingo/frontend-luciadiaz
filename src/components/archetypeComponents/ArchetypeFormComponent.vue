<script lang="ts" setup>
//Import Tootls
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user-store';
import { useTestStore } from 'src/stores/test-store';

//Import Questions
import { archetypeQuestions } from './achetypeQuestions';

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
            const wise = setResults('a');
            const warrior = setResults('b');
            const wizard = setResults('c');
            const lover = setResults('d');

            const finalResponse = { wise, warrior, wizard, lover };
            if (userStore.token) {
                await testStore.createTestResults('Arquetipo', finalResponse);
                router.push('/mi-escritorio');
            } else {
                await userStore.register(
                    name.value,
                    email.value,
                    phone.value,
                    password.value,
                    politiquesAccepted.value
                );
                await testStore.createTestResults('Arquetipo', finalResponse);
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
            <h3>Bienvenido(a) al Test de Arquetipos</h3>
            <p style="font-size: 1em">
                Este test tiene la finalidad de identificiar tus modelos y
                patornes de comportamiento, permitiendo trabajar de manera
                personalizada en tu plan de desarrollo personal. Llevándote a
                conocer más tus fortalezas y las áreas a potenciar en tu vida.
            </p>
            <p style="font-size: 1.2em">
                Por favor selecciona la opción con la que más te identifique en
                cada caso
            </p>
            <p
                class="text-white"
                v-for="items in testStore.allTestResults"
                :key="items.id"
            >
                {{ items.uid }}
            </p>
        </div>
        <q-form @submit.prevent="handleSubmit">
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
                <!-- PRIMERA PREGUNTA -->
                <p>{{ archetypeQuestions[0].pregunta }}</p>
                <q-radio
                    v-model="r1"
                    val="a"
                    dark
                    :label="archetypeQuestions[0].a"
                />
                <q-radio
                    v-model="r1"
                    val="b"
                    dark
                    :label="archetypeQuestions[0].b"
                />
                <q-radio
                    v-model="r1"
                    val="c"
                    dark
                    :label="archetypeQuestions[0].c"
                />
                <q-radio
                    v-model="r1"
                    val="d"
                    dark
                    :label="archetypeQuestions[0].d"
                />
            </div>
            <div class="question">
                <!-- SEGUNDA PREGUNTA -->
                <p>{{ archetypeQuestions[1].pregunta }}</p>
                <q-radio
                    v-model="r2"
                    val="a"
                    dark
                    :label="archetypeQuestions[1].a"
                />
                <q-radio
                    v-model="r2"
                    val="b"
                    dark
                    :label="archetypeQuestions[1].b"
                />
                <q-radio
                    v-model="r2"
                    val="c"
                    dark
                    :label="archetypeQuestions[1].c"
                />
                <q-radio
                    v-model="r2"
                    val="d"
                    dark
                    :label="archetypeQuestions[1].d"
                />
            </div>
            <div class="question">
                <!-- TERCERA PREGUNTA -->
                <p>{{ archetypeQuestions[2].pregunta }}</p>
                <q-radio
                    v-model="r3"
                    val="a"
                    dark
                    :label="archetypeQuestions[2].a"
                />
                <q-radio
                    v-model="r3"
                    val="b"
                    dark
                    :label="archetypeQuestions[2].b"
                />
                <q-radio
                    v-model="r3"
                    val="c"
                    dark
                    :label="archetypeQuestions[2].c"
                />
                <q-radio
                    v-model="r3"
                    val="d"
                    dark
                    :label="archetypeQuestions[2].d"
                />
            </div>
            <div class="question">
                <!-- CUARTA PREGUNTA -->
                <p>{{ archetypeQuestions[3].pregunta }}</p>
                <q-radio
                    v-model="r4"
                    val="a"
                    dark
                    :label="archetypeQuestions[3].a"
                />
                <q-radio
                    v-model="r4"
                    val="b"
                    dark
                    :label="archetypeQuestions[3].b"
                />
                <q-radio
                    v-model="r4"
                    val="c"
                    dark
                    :label="archetypeQuestions[3].c"
                />
                <q-radio
                    v-model="r4"
                    val="d"
                    dark
                    :label="archetypeQuestions[3].d"
                />
            </div>
            <div class="question">
                <!-- QUINTA PREGUNTA -->
                <p>{{ archetypeQuestions[4].pregunta }}</p>
                <q-radio
                    v-model="r5"
                    val="a"
                    dark
                    :label="archetypeQuestions[4].a"
                />
                <q-radio
                    v-model="r5"
                    val="b"
                    dark
                    :label="archetypeQuestions[4].b"
                />
                <q-radio
                    v-model="r5"
                    val="c"
                    dark
                    :label="archetypeQuestions[4].c"
                />
                <q-radio
                    v-model="r5"
                    val="d"
                    dark
                    :label="archetypeQuestions[4].d"
                />
            </div>
            <div class="question">
                <!-- SEXTA PREGUNTA -->
                <p>{{ archetypeQuestions[5].pregunta }}</p>
                <q-radio
                    v-model="r6"
                    val="a"
                    dark
                    :label="archetypeQuestions[5].a"
                />
                <q-radio
                    v-model="r6"
                    val="b"
                    dark
                    :label="archetypeQuestions[5].b"
                />
                <q-radio
                    v-model="r6"
                    val="c"
                    dark
                    :label="archetypeQuestions[5].c"
                />
                <q-radio
                    v-model="r6"
                    val="d"
                    dark
                    :label="archetypeQuestions[5].d"
                />
            </div>
            <div class="question">
                <!-- SEPTIMA PREGUNTA -->
                <p>{{ archetypeQuestions[6].pregunta }}</p>
                <q-radio
                    v-model="r7"
                    val="a"
                    dark
                    :label="archetypeQuestions[6].a"
                />
                <q-radio
                    v-model="r7"
                    val="b"
                    dark
                    :label="archetypeQuestions[6].b"
                />
                <q-radio
                    v-model="r7"
                    val="c"
                    dark
                    :label="archetypeQuestions[6].c"
                />
                <q-radio
                    v-model="r7"
                    val="d"
                    dark
                    :label="archetypeQuestions[6].d"
                />
            </div>
            <div class="question">
                <!-- OCTAVA PREGUNTA -->
                <p>{{ archetypeQuestions[7].pregunta }}</p>
                <q-radio
                    v-model="r8"
                    val="a"
                    dark
                    :label="archetypeQuestions[7].a"
                />
                <q-radio
                    v-model="r8"
                    val="b"
                    dark
                    :label="archetypeQuestions[7].b"
                />
                <q-radio
                    v-model="r8"
                    val="c"
                    dark
                    :label="archetypeQuestions[7].c"
                />
                <q-radio
                    v-model="r8"
                    val="d"
                    dark
                    :label="archetypeQuestions[7].d"
                />
            </div>
            <div class="question">
                <!-- NOVENA PREGUNTA -->
                <p>{{ archetypeQuestions[8].pregunta }}</p>
                <q-radio
                    v-model="r9"
                    val="a"
                    dark
                    :label="archetypeQuestions[8].a"
                />
                <q-radio
                    v-model="r9"
                    val="b"
                    dark
                    :label="archetypeQuestions[8].b"
                />
                <q-radio
                    v-model="r9"
                    val="c"
                    dark
                    :label="archetypeQuestions[8].c"
                />
                <q-radio
                    v-model="r9"
                    val="d"
                    dark
                    :label="archetypeQuestions[8].d"
                />
            </div>
            <div class="question">
                <!-- NOVENA PREGUNTA -->
                <p>{{ archetypeQuestions[9].pregunta }}</p>
                <q-radio
                    v-model="r10"
                    val="a"
                    dark
                    :label="archetypeQuestions[9].a"
                />
                <q-radio
                    v-model="r10"
                    val="b"
                    dark
                    :label="archetypeQuestions[9].b"
                />
                <q-radio
                    v-model="r10"
                    val="c"
                    dark
                    :label="archetypeQuestions[9].c"
                />
                <q-radio
                    v-model="r10"
                    val="d"
                    dark
                    :label="archetypeQuestions[9].d"
                />
            </div>
            <q-checkbox
                v-model="politiquesAccepted"
                dark
                label="Acepto las politicas de privacidad"
                class="q-mt-md"
            />
            <div class="q-my-md" v-if="politiquesAccepted">
                <q-btn label="Enviar" color="primary" type="submit"></q-btn>
                <q-spinner-pie color="primary" size="2em" v-if="loadding" />
            </div>
        </q-form>
        <div class="answers">
            <p :class="{ active: r1 != '' }">1: {{ r1 }}</p>
            <p :class="{ active: r2 != '' }">2: {{ r2 }}</p>
            <p :class="{ active: r3 != '' }">3: {{ r3 }}</p>
            <p :class="{ active: r4 != '' }">4: {{ r4 }}</p>
            <p :class="{ active: r5 != '' }">5: {{ r5 }}</p>
            <p :class="{ active: r6 != '' }">6: {{ r6 }}</p>
            <p :class="{ active: r7 != '' }">7: {{ r7 }}</p>
            <p :class="{ active: r8 != '' }">8: {{ r8 }}</p>
            <p :class="{ active: r9 != '' }">9: {{ r9 }}</p>
            <p :class="{ active: r10 != '' }">10: {{ r10 }}</p>
        </div>
    </q-page>
</template>

<style lang="sass" scoped>
.question
    margin-bottom: 16px
    display: grid
    background: $positive
    padding: 16px
    border-radius: 24px
.question p
    font-weight: 500
    color: white
.answers
    display: flex
    position: fixed
    bottom: 5vh
    left: 24px
    background: $primary
    color: $accent
    padding: 12px
    border-radius: 8px
.answers p
    padding: 0px 4px
    margin: 0px
.active
    color: white
    font-weight: 600
</style>
