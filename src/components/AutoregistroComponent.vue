<script lang="ts" setup>
defineProps({
  registro: Object,
});
</script>

<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-subtitle2 text-primary">Fecha: {{ registro?.date }}</div>
    </q-card-section>
    <q-card-section>
      <div class="text-subtitle2 text-primary">
        Pensamiento:
        <span class="text-subtitle1">{{ registro?.pensamiento }}</span>
      </div>
      <q-separator inset dark />
      <div class="text-subtitle2 text-primary">
        Emoción:
        <span class="text-subtitle1">{{ registro?.emocion }}</span>
      </div>
      <q-separator inset dark />
      <div class="text-subtitle2 text-primary">
        Acción: <span class="text-subtitle1">{{ registro?.accion }}</span>
      </div>
      <q-separator inset dark />
      <div class="text-subtitle2 text-primary">
        Detonante:
        <span class="text-subtitle1"> {{ registro?.detonante }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
