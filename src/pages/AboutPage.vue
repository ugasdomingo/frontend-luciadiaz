<template>
    <q-form @click.prevent="handleSubmit">
        <div v-for="(item, i) of dataArquetipos" :key="i">
            <div class="question">
                <p>{{ dataArquetipos[i].pregunta }}</p>
                <q-radio
                    v-model="dataArquetipos[i].key"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    val="a"
                >
                    {{ dataArquetipos[i].a }}
                </q-radio>
                <q-radio
                    v-model="dataArquetipos[i].key"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    val="b"
                >
                    {{ dataArquetipos[i].b }}
                </q-radio>
                <q-radio
                    v-model="dataArquetipos[i].key"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    val="c"
                >
                    {{ dataArquetipos[i].c }}
                </q-radio>
                <q-radio
                    v-model="dataArquetipos[i].key"
                    checked-icon="task_alt"
                    unchecked-icon="panorama_fish_eye"
                    val="d"
                >
                    {{ dataArquetipos[i].d }}
                </q-radio>
            </div>
        </div>
        <div class="registro-buttom">
            <q-btn label="Guardar Test" color="primary" type="submit"></q-btn>
        </div>
    </q-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { dataArquetipos } from 'components/arquetipo/dataArquetipos';

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

const handleSubmit = () => {
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
    console.log(allResponses);
};
</script>

<style lang="sass" scoped>
.question
    margin-bottom: 16px
    display: grid
    background: $positive
    padding: 8px
    border-radius: 24px

.question p
    font-weight: 500
</style>
