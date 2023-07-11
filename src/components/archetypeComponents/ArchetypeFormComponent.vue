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
            $q.notify('Ups te quedaron preguntas sin responder');
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
    <q-page class="page-container">
        <div class="q-pb-xl info-container">
            <h3>Bienvenido(a) al Test de Personalidad</h3>
            <p style="font-size: 1em">
                Este test tiene la finalidad de identificiar tus modelos y
                patornes de comportamiento a través de arquetpos, permitiendo
                trabajar de manera personalizada en tu plan de desarrollo
                personal. Llevándote a conocer más tus fortalezas y las áreas a
                potenciar en tu vida.
            </p>
            <p style="font-size: 1.2em">
                Por favor selecciona la opción con la que más te identifique en
                cada caso
            </p>
        </div>
        <q-spinner-pie color="primary" size="5em" v-if="loadding" />
        <q-form v-else @submit.prevent="handleSubmit">
            <!-- USERS DATA -->
            <div v-if="!userStore.token" class="user-data-container">
                <q-input
                    v-model="name"
                    label-color="primary"
                    type="text"
                    label="Nombre Completo"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="email"
                    label="Email"
                    label-color="primary"
                    type="text"
                    :rules="[
                        (val) =>
                            (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                            'Formato email incorrecto',
                    ]"
                />
                <q-input
                    v-model="phone"
                    type="text"
                    label="Teléfono"
                    label-color="primary"
                    :rules="[
                        (val) => (val && val.length > 0) || 'Campo Requerido',
                    ]"
                />
                <q-input
                    v-model="password"
                    label="Contraseña"
                    label-color="primary"
                    type="password"
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
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[0].a"
                />
                <q-radio
                    v-model="r1"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[0].b"
                />
                <q-radio
                    v-model="r1"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[0].c"
                />
                <q-radio
                    v-model="r1"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[0].d"
                />
            </div>
            <div class="question">
                <!-- SEGUNDA PREGUNTA -->
                <p>{{ archetypeQuestions[1].pregunta }}</p>
                <q-radio
                    v-model="r2"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[1].a"
                />
                <q-radio
                    v-model="r2"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[1].b"
                />
                <q-radio
                    v-model="r2"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[1].c"
                />
                <q-radio
                    v-model="r2"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[1].d"
                />
            </div>
            <div class="question">
                <!-- TERCERA PREGUNTA -->
                <p>{{ archetypeQuestions[2].pregunta }}</p>
                <q-radio
                    v-model="r3"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[2].a"
                />
                <q-radio
                    v-model="r3"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[2].b"
                />
                <q-radio
                    v-model="r3"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[2].c"
                />
                <q-radio
                    v-model="r3"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[2].d"
                />
            </div>
            <div class="question">
                <!-- CUARTA PREGUNTA -->
                <p>{{ archetypeQuestions[3].pregunta }}</p>
                <q-radio
                    v-model="r4"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[3].a"
                />
                <q-radio
                    v-model="r4"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[3].b"
                />
                <q-radio
                    v-model="r4"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[3].c"
                />
                <q-radio
                    v-model="r4"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[3].d"
                />
            </div>
            <div class="question">
                <!-- QUINTA PREGUNTA -->
                <p>{{ archetypeQuestions[4].pregunta }}</p>
                <q-radio
                    v-model="r5"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[4].a"
                />
                <q-radio
                    v-model="r5"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[4].b"
                />
                <q-radio
                    v-model="r5"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[4].c"
                />
                <q-radio
                    v-model="r5"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[4].d"
                />
            </div>
            <div class="question">
                <!-- SEXTA PREGUNTA -->
                <p>{{ archetypeQuestions[5].pregunta }}</p>
                <q-radio
                    v-model="r6"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[5].a"
                />
                <q-radio
                    v-model="r6"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[5].b"
                />
                <q-radio
                    v-model="r6"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[5].c"
                />
                <q-radio
                    v-model="r6"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[5].d"
                />
            </div>
            <div class="question">
                <!-- SEPTIMA PREGUNTA -->
                <p>{{ archetypeQuestions[6].pregunta }}</p>
                <q-radio
                    v-model="r7"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[6].a"
                />
                <q-radio
                    v-model="r7"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[6].b"
                />
                <q-radio
                    v-model="r7"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[6].c"
                />
                <q-radio
                    v-model="r7"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[6].d"
                />
            </div>
            <div class="question">
                <!-- OCTAVA PREGUNTA -->
                <p>{{ archetypeQuestions[7].pregunta }}</p>
                <q-radio
                    v-model="r8"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[7].a"
                />
                <q-radio
                    v-model="r8"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[7].b"
                />
                <q-radio
                    v-model="r8"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[7].c"
                />
                <q-radio
                    v-model="r8"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[7].d"
                />
            </div>
            <div class="question">
                <!-- NOVENA PREGUNTA -->
                <p>{{ archetypeQuestions[8].pregunta }}</p>
                <q-radio
                    v-model="r9"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[8].a"
                />
                <q-radio
                    v-model="r9"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[8].b"
                />
                <q-radio
                    v-model="r9"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[8].c"
                />
                <q-radio
                    v-model="r9"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[8].d"
                />
            </div>
            <div class="question">
                <!-- NOVENA PREGUNTA -->
                <p>{{ archetypeQuestions[9].pregunta }}</p>
                <q-radio
                    v-model="r10"
                    keep-color
                    color="white"
                    val="a"
                    :label="archetypeQuestions[9].a"
                />
                <q-radio
                    v-model="r10"
                    keep-color
                    color="white"
                    val="b"
                    :label="archetypeQuestions[9].b"
                />
                <q-radio
                    v-model="r10"
                    keep-color
                    color="white"
                    val="c"
                    :label="archetypeQuestions[9].c"
                />
                <q-radio
                    v-model="r10"
                    keep-color
                    color="white"
                    val="d"
                    :label="archetypeQuestions[9].d"
                />
            </div>
            <q-checkbox
                v-model="politiquesAccepted"
                label="Acepto las politicas de privacidad"
                class="q-mt-md"
                style="color: $azul"
            />
            <div class="q-my-md" v-if="politiquesAccepted">
                <q-btn label="Enviar" color="primary" type="submit"></q-btn>
            </div>
        </q-form>
    </q-page>
</template>

<style lang="scss" scoped>
.page-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.info-container {
    width: 60%;
}
.user-data-container {
    padding-bottom: 3em;
}

.question {
    font-family: 'nunito';
    margin-bottom: 16px;
    color: $white;
    display: grid;
    background: rgba(9, 31, 141, 0.9);
    padding: 16px;
    border-radius: 24px;
}
.question p {
    font-weight: 400;
    color: white;
}

//Responsive
@media screen and (max-width: 760px) {
    .page-container {
        padding: 0 4px;
    }
    .info-container {
        width: 95%;
    }
    .question {
        padding: 8px 0;
        margin: 1em 4px;
        border-radius: 8px;
    }
}
</style>
