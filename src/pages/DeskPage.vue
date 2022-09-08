<template>
  <q-page class="column">
    <h3 class="text-white text-center">Todos los Registros</h3>
    <div class="row justify-center">
      <template
        v-for="registro of autoregistroStore.allRegister"
        :key="registro.id"
      >
        <AllRegister :art="registro" class="q-ma-sm" />
      </template>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { useAutoregisterStore } from 'src/stores/autoregistro-store';
//Component
import AllRegister from 'src/components/AutoregistroComponent.vue';
const autoregistroStore = useAutoregisterStore();
autoregistroStore.getAllAutoregistro();
</script>

<style scoped></style>
