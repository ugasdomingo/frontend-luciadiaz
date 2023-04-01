<script lang="ts" setup>
//Import tools
import { ref } from 'vue';

//Activate tools
const dialog = ref();

//Logistics Funtions
const isCookiesAcepted = () => {
    sessionStorage.getItem('cookies')
        ? (dialog.value = false)
        : (dialog.value = true);
};
const aceptCookies = (status: boolean) => {
    if (status) {
        sessionStorage.setItem('cookies', 'acepted');
        dialog.value = false;
    } else {
        sessionStorage.setItem('cookies', 'decline');
        dialog.value = false;
    }
};

//Activated funtions
isCookiesAcepted();
</script>

<template>
    <q-dialog v-model="dialog" persistent>
        <q-card class="my-card bg-primary text-white">
            <q-card-section>
                <div class="text-h6">Política de Cookies</div>
            </q-card-section>

            <q-card-section>
                <p>Usamos Cookies para mejorar tu experiencia de usuario</p>
            </q-card-section>

            <q-separator dark />

            <q-card-actions>
                <q-btn @click="aceptCookies(true)" flat>Aceptar</q-btn>
                <q-btn @click="aceptCookies(false)" flat>Rechazar</q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
