<script lang="ts" setup>
//Import tools
import { useTestStore } from 'src/stores/test-store';
import { useUserStore } from 'src/stores/user-store';

//Activate tools
const testStore = useTestStore();
const userStore = useUserStore();

defineProps({
    name: String,
});
</script>

<template>
    <div class="row justify-center">
        <h3 class="q-my-none">Carta de ti para ti:</h3>
        <p class="text-weight-regular q-pa-xl" style="font-size: 1.5em">
            Yo,
            {{ name }}, tengo la meta de
            {{ testStore.metas[0]?.answers?.objetive }}. <br />Porque
            conscientemente quiero
            {{ testStore.metas[0]?.answers?.reason1 }},<br />
            ya que bloqueo en mi
            {{ testStore.metas[0]?.answers?.reason3 }},<br />
            además quisiera
            {{ testStore.metas[0]?.answers?.reason4 }}, <br />ya que rechazo
            {{ testStore.metas[0]?.answers?.reason6 }}.
        </p>
    </div>
</template>
