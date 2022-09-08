<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-secondary text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="img/Logo-lucia.jpg" />
          </q-avatar>
          <router-link to="/" class="text-bold" style="text-decoration: none">
            Lucia Diaz
          </router-link>
        </q-toolbar-title>

        <q-btn color="primary" to="login" v-if="!userStores.token">
          Iniciar Sesión
        </q-btn>
        <q-btn color="primary" @click="logout" v-if="userStores.token">
          Cerrar Sesión
        </q-btn>
        <q-btn
          color="accent"
          @click="userStores.access"
          v-if="userStores.token"
          to="autoregistro"
        >
          Autoregistro
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <q-lis>
        <q-item-label header> ¿Que quieres hacer hoy? </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-btn
          class="buttom"
          color="primary"
          target="blank"
          href="https://wa.me/584245933845?text=Hola%2C%20me%20gustar%C3%ADa%20una%20consulta%20online"
          >Consulta Online
        </q-btn>
      </q-lis>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          fab
          icon="whatsapp"
          color="accent"
          target="Blank"
          href="https://wa.me/584245933845?text=Hola%2C%20me%20gustar%C3%ADa%20una%20consulta%20online"
        />
      </q-page-sticky>
    </q-page-container>

    <q-footer elevated class="bg-primary text-accent">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
            <!-- <div>Title</div> -->
          </q-avatar>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user-store';
import EssentialLink from '../components/EssentialLink.vue';

const userStores = useUserStore();
const router = useRouter();
const leftDrawerOpen = ref(false);

const essentialLinks = [
  {
    title: 'Sobre mi - (pronto)',
    caption: '¿Por qué deberías seguirme?',
    icon: 'school',
    link: '#',
  },
  {
    title: 'Autoregistros - (pronto)',
    caption: 'Para aplicar en tu día a día',
    icon: 'code',
    link: 'escritorio',
  },
  {
    title: 'Autoregistro',
    caption: 'Herramienta terapeutica',
    icon: 'chat',
    link: 'autoregistro',
  },
  {
    title: 'Consulta Presencial',
    caption: 'Av. Lara, Barquisimeto',
    icon: 'record_voice_over',
    link: 'presencial',
  },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const logout = async () => {
  await userStores.logout();
  router.push('/');
};
</script>

<style lang="scss" scoped>
.buttom {
  margin: 24px 0 0 16px;
}
.toolbar:hover {
  background-color: accent;
}
</style>
