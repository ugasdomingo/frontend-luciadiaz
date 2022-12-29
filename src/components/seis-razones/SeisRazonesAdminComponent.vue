<script lang="ts" setup>
import { useSixReasonsStore } from 'src/stores/sixReasons-store';
import { ref } from 'vue';

// Set Logical
const sixReasonsStore = useSixReasonsStore();
const infoSixReasons = ref('');
const toggle = ref(false);

const findSixReasons = async () => {
    await sixReasonsStore.getAllSixReasonsTest();

    infoSixReasons.value = sixReasonsStore.allSixReasonsTest;
};

defineProps({
    users: Object,
});
</script>

<template>
    <q-card
        class="my-card"
        @click="(toggle = !toggle), /* findRegister(users?._id) */"
    >
        <div class="text-subtitle2 text-black">
            <span class="text-subtitle1 q-ml-xl">{{ users?.name }}</span>
            <q-expansion-item>
                <q-card-section v-model="toggle">
                    <template
                        v-for="registro of infoSixReasons"
                        :key="registro.id"
                    >
                        <AllSelfRegisters
                            :registro="registro"
                            class="q-ma-lg"
                        />
                    </template>
                </q-card-section>
            </q-expansion-item>
        </div>
    </q-card>
</template>
