<template>
    <q-layout view="hHh LpR fFf">
        <q-header reveal bordered class="bg-secondary text-primary">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                <q-toolbar-title>
                    <q-avatar>
                        <img src="img/Logo-lucia.jpg" />
                    </q-avatar>
                    <router-link
                        to="/"
                        class="text-bold"
                        style="text-decoration: none"
                    >
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
                    v-if="role == 'Admin' || role == 'patient'"
                    to="autoregistro"
                >
                    Autoregistro
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" bordered>
            <q-lis>
                <q-item-label header> ¿Que quieres hacer hoy? </q-item-label>
                <div>
                    <div v-if="role == 'Admin' || role == 'patient'">
                        <EssentialLink
                            v-for="link in patientLinks"
                            :key="link.title"
                            v-bind="link"
                        />
                    </div>
                    <div v-else>
                        <EssentialLink
                            v-for="link in visitanteLinks"
                            :key="link.title"
                            v-bind="link"
                        />
                    </div>
                </div>
            </q-lis>
        </q-drawer>

        <q-page-container>
            <router-view />
            <q-page-sticky position="bottom-right" :offset="[18, 18]">
                <q-btn
                    fab
                    icon="whatsapp"
                    color="green"
                    target="Blank"
                    href="https://walink.co/26e016"
                />
            </q-page-sticky>
        </q-page-container>

        <q-footer reveal elevated class="bg-primary text-accent">
            <q-toolbar>
                <q-toolbar-title class="row col-12 items-center">
                    <q-avatar>
                        <q-btn
                            dense
                            flat
                            round
                            icon="menu"
                            @click="toggleLeftDrawer"
                            class="col-2"
                        />
                        <!-- <div>Title</div> -->
                    </q-avatar>
                    <p
                        class="col-11 text-white text-caption text-center q-ma-none"
                    >
                        Todo los Derechos Reservados ® 2025
                    </p>
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
import { visitanteLinks, patientLinks } from 'layouts/essentialLinks';

const userStores = useUserStore();
const router = useRouter();
const leftDrawerOpen = ref(false);
const role = ref();
const setRole = () => {
    role.value = sessionStorage.getItem('user');
};
setRole();
function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
    setRole();
}

const logout = async () => {
    await userStores.logout();
    router.push('/');
    setRole();
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
