<script lang="ts" setup>
// Description: This is a v-for list for use in Desk Page, so Admins
// can see all self-register made by user

// Import Tools
import { useAutoregisterStore } from 'src/stores/autoregistro-store';
import { ref } from 'vue';

// Import Components
import AllSelfRegisters from 'src/components/autoregistro/AutoregistroCardComponent.vue';

// Set logical
const autoregisterStore = useAutoregisterStore();
const infoRegister = ref('');
const toggle = ref(false);

const findRegister = async (uid: string) => {
    await autoregisterStore.getAllAutoregistro(uid);

    infoRegister.value = autoregisterStore.allRegister;
};

defineProps({
    users: Object,
});
</script>

<template>
    <q-card
        class="my-card"
        @click="(toggle = !toggle), findRegister(users?._id)"
    >
        <div class="text-subtitle2 text-black">
            <span class="text-subtitle1 q-ml-xl">{{ users?.name }}</span>
            <q-expansion-item>
                <q-card-section v-model="toggle">
                    <template
                        v-for="registro of infoRegister"
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

<style lang="sass" scoped>
.my-card
  width: 60%
  margin: 8px


@media (max-width: 900px)
  .my-card
    width: 100%
</style>
