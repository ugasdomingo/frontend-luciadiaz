<script lang="ts" setup>
//Import tools
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { dataArquetipos } from './dataArquetipos';
import { useArquetipoStore } from 'src/stores/arquetipo-store';

//Activate tools
const q$ = useQuasar();
const arquetipoStore = useArquetipoStore();

// Catch answers
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

const handleSubmit = async () => {
    try {
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

        // Operations
        if (blanksQuestions > 0) {
            q$.notify('Upps te quedaron preguntas sin responder');
        } else {
            const wise = setResults('a');
            const warrior = setResults('b');
            const wizard = setResults('c');
            const lover = setResults('d');

            await arquetipoStore.createArquetipo(wise, warrior, wizard, lover);
            arquetipoStore.findArchetypeTest();
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
    q$.dialog({
        title: 'Error',
        message,
    });
};
</script>

<template>
    <q-form @submit.prevent="handleSubmit">
        <div class="question">
            <!-- PRIMERA PREGUNTA -->
            <p>{{ dataArquetipos[0].pregunta }}</p>
            <q-radio v-model="r1" val="a" :label="dataArquetipos[0].a" />
            <q-radio v-model="r1" val="b" :label="dataArquetipos[0].b" />
            <q-radio v-model="r1" val="c" :label="dataArquetipos[0].c" />
            <q-radio v-model="r1" val="d" :label="dataArquetipos[0].d" />
        </div>
        <div class="question">
            <!-- SEGUNDA PREGUNTA -->
            <p>{{ dataArquetipos[1].pregunta }}</p>
            <q-radio v-model="r2" val="a" :label="dataArquetipos[1].a" />
            <q-radio v-model="r2" val="b" :label="dataArquetipos[1].b" />
            <q-radio v-model="r2" val="c" :label="dataArquetipos[1].c" />
            <q-radio v-model="r2" val="d" :label="dataArquetipos[1].d" />
        </div>
        <div class="question">
            <!-- TERCERA PREGUNTA -->
            <p>{{ dataArquetipos[2].pregunta }}</p>
            <q-radio v-model="r3" val="a" :label="dataArquetipos[2].a" />
            <q-radio v-model="r3" val="b" :label="dataArquetipos[2].b" />
            <q-radio v-model="r3" val="c" :label="dataArquetipos[2].c" />
            <q-radio v-model="r3" val="d" :label="dataArquetipos[2].d" />
        </div>
        <div class="question">
            <!-- CUARTA PREGUNTA -->
            <p>{{ dataArquetipos[3].pregunta }}</p>
            <q-radio v-model="r4" val="a" :label="dataArquetipos[3].a" />
            <q-radio v-model="r4" val="b" :label="dataArquetipos[3].b" />
            <q-radio v-model="r4" val="c" :label="dataArquetipos[3].c" />
            <q-radio v-model="r4" val="d" :label="dataArquetipos[3].d" />
        </div>
        <div class="question">
            <!-- QUINTA PREGUNTA -->
            <p>{{ dataArquetipos[4].pregunta }}</p>
            <q-radio v-model="r5" val="a" :label="dataArquetipos[4].a" />
            <q-radio v-model="r5" val="b" :label="dataArquetipos[4].b" />
            <q-radio v-model="r5" val="c" :label="dataArquetipos[4].c" />
            <q-radio v-model="r5" val="d" :label="dataArquetipos[4].d" />
        </div>
        <div class="question">
            <!-- SEXTA PREGUNTA -->
            <p>{{ dataArquetipos[5].pregunta }}</p>
            <q-radio v-model="r6" val="a" :label="dataArquetipos[5].a" />
            <q-radio v-model="r6" val="b" :label="dataArquetipos[5].b" />
            <q-radio v-model="r6" val="c" :label="dataArquetipos[5].c" />
            <q-radio v-model="r6" val="d" :label="dataArquetipos[5].d" />
        </div>
        <div class="question">
            <!-- SEPTIMA PREGUNTA -->
            <p>{{ dataArquetipos[6].pregunta }}</p>
            <q-radio v-model="r7" val="a" :label="dataArquetipos[6].a" />
            <q-radio v-model="r7" val="b" :label="dataArquetipos[6].b" />
            <q-radio v-model="r7" val="c" :label="dataArquetipos[6].c" />
            <q-radio v-model="r7" val="d" :label="dataArquetipos[6].d" />
        </div>
        <div class="question">
            <!-- OCTAVA PREGUNTA -->
            <p>{{ dataArquetipos[7].pregunta }}</p>
            <q-radio v-model="r8" val="a" :label="dataArquetipos[7].a" />
            <q-radio v-model="r8" val="b" :label="dataArquetipos[7].b" />
            <q-radio v-model="r8" val="c" :label="dataArquetipos[7].c" />
            <q-radio v-model="r8" val="d" :label="dataArquetipos[7].d" />
        </div>
        <div class="question">
            <!-- NOVENA PREGUNTA -->
            <p>{{ dataArquetipos[8].pregunta }}</p>
            <q-radio v-model="r9" val="a" :label="dataArquetipos[8].a" />
            <q-radio v-model="r9" val="b" :label="dataArquetipos[8].b" />
            <q-radio v-model="r9" val="c" :label="dataArquetipos[8].c" />
            <q-radio v-model="r9" val="d" :label="dataArquetipos[8].d" />
        </div>
        <div class="question">
            <!-- NOVENA PREGUNTA -->
            <p>{{ dataArquetipos[9].pregunta }}</p>
            <q-radio v-model="r10" val="a" :label="dataArquetipos[9].a" />
            <q-radio v-model="r10" val="b" :label="dataArquetipos[9].b" />
            <q-radio v-model="r10" val="c" :label="dataArquetipos[9].c" />
            <q-radio v-model="r10" val="d" :label="dataArquetipos[9].d" />
        </div>
        <div class="registro-buttom">
            <q-btn label="Procesar Test" color="primary" type="submit"></q-btn>
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
