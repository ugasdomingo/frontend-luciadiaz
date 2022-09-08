<script lang="ts" setup>
import { useUserStore } from 'src/stores/user-store';
/* import { ref } from 'vue';
  const artStore = useArtStore();
  const deleteArt = async (_id: any) => {
  await artStore.deleteArt(_id);
  console.log('Art Deleted');
  artStore.getAllUserArt();
}; */
defineProps({
  registro: Object,
});
const userStores = useUserStore();
</script>

<template>
  <q-card class="my-card">
    <q-card-section class="flex">
      <div class="text-subtitle2 text-primary">{{ registro?.date }}</div>
      <div class="text-subtitle2 q-ml-sm text-primary">
        {{ userStores.getUser(registro?.uid) }}
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-subtitle2 text-primary">{{ registro?.pensamiento }}</div>
      <div class="text-subtitle2 text-primary">
        {{ registro?.emocion }}
      </div>
      <div class="text-subtitle2 text-primary">{{ registro?.accion }}</div>
      <div class="text-subtitle2 text-primary">{{ registro?.detonante }}</div>
    </q-card-section>
  </q-card>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
