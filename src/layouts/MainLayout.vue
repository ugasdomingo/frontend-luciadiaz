<template>
    <q-layout view="hhh lpR fFf">
        <img src="img/fondo-circles.jpg" alt="Hero" class="hero-img-big" />
        <q-header class="header transparent column justify-center">
            <q-toolbar>
                <q-toolbar-title class="q-pa-none">
                    <NavBarComponent class="normal-menu" />
                    <q-icon name="menu" class="hamburguer-menu">
                        <q-popup-proxy
                            transition-show="flip-up"
                            transition-hide="flip-down"
                            :breakpoint="50"
                        >
                            <NavBarComponent />
                        </q-popup-proxy>
                    </q-icon>
                </q-toolbar-title>
                <div v-if="userStores.token" class="right-toolbar-container">
                    <h6 class="text-primary q-ma-none">
                        Hola, {{ userStores.userName }}
                    </h6>
                    <q-btn
                        color="primary"
                        class="q-mx-md titles logout-btn"
                        @click="logout"
                        v-if="userStores.token"
                        label="Cerrar Sesión"
                    />
                </div>
                <h3 v-else class="q-py-none logo">Lucia Diaz</h3>
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
import { useTestStore } from 'src/stores/test-store';

//Import Componentes
import NavBarComponent from '/src/components/layoutComponents/NavBarComponent.vue';
import DialogCookiesComponent from '/src/components/layoutComponents/DialogCookiesComponent.vue';

//Activate tools
const userStores = useUserStore();
const testStore = useTestStore();
const router = useRouter();

//Logicts Funtions
const logout = async () => {
    await userStores.logout();
    testStore.cleanData();
    router.push('/');
};
</script>

<style lang="scss" scoped>
.logo {
    color: $azul;
    font-family: 'nunito';
}
.header {
    height: 5em;
    padding: 0;
}
.hamburguer-menu {
    display: none;
    color: $azul;
}
.right-toolbar-container {
    display: flex;
}
.hero-img-big {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    z-index: -100;
    opacity: 0.7;
}

@media screen and (max-width: 760px) {
    .normal-menu {
        display: none;
    }
    .hamburguer-menu {
        display: inline;
    }
    .right-toolbar-container {
        flex-direction: column;
        align-items: end;
    }
    .logout-btn {
        font-size: 10px;
        width: 100px;
        padding: 4px;
    }
}
</style>
