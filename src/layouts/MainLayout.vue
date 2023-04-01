<template>
    <q-layout view="hhh lpR fFf">
        <q-header class="header transparent column justify-center">
            <q-toolbar>
                <q-toolbar-title class="q-pa-none">
                    <NavBarComponent />
                </q-toolbar-title>
                <q-btn
                    color="primary"
                    class="q-mr-md"
                    @click="logout"
                    v-if="userStores.token"
                    label="Cerrar Sesión"
                />
            </q-toolbar>
            <DialogCookiesComponent />
        </q-header>

        <q-page-container>
            <router-view />
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
                <q-btn
                    fab
                    icon="whatsapp"
                    color="green"
                    target="Blank"
                    href="https://wa.me/34624721896"
                />
            </q-page-sticky>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
//Import tools
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user-store';

//Import Componentes
import NavBarComponent from '/src/components/layoutComponents/NavBarComponent.vue';
import DialogCookiesComponent from '/src/components/layoutComponents/DialogCookiesComponent.vue';

//Activate tools
const userStores = useUserStore();
const router = useRouter();

//Logicts Funtions
const logout = async () => {
    await userStores.logout();
    router.push('/');
};
</script>

<style lang="scss" scoped>
.header {
    height: 5em;
    padding: 0;
}
</style>
