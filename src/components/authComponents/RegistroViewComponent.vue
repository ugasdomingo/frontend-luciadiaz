<script setup>
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useUserStore } from 'stores/user-store';

const props = defineProps({
    role: String,
});

const $q = useQuasar();
const userStore = useUserStore();
const router = useRouter();
const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const repassword = ref('');
const loadding = ref(false);
const politiquesAccepted = ref(false);

onMounted(() => {
    const role = ref(props.role);
});

const handleSubmit = async () => {
    try {
        loadding.value = !loadding.value;
        await userStore.register(
            name.value,
            email.value,
            phone.value,
            password.value,
            role.value,
            politiquesAccepted.value
        );
        router.push('/mi-escritorio');
        email.value = '';
        phone.value = '';
        password.value = '';
    } catch (error) {
        console.log('error', error);
        if (error.error) {
            alertDialogBackend(error.error);
        } else if (error.errors[0].msg) {
            alertDialogBackend(error.errors[0].msg);
        } else {
            alertDialogBackend();
        }
    }
};
const alertDialogBackend = (message = 'Error en el servidor') => {
    $q.dialog({
        title: 'Error',
        message,
    });
};
</script>

<template>
    <q-page class="row justify-center">
        <div class="col-12 col-sm-6 col-md-5">
            <h3>Bienvenido(a) a Bordo</h3>
            <q-form @submit.prevent="handleSubmit">
                <q-input
                    v-model="name"
                    label="Ingresa tu Nombre Completo"
                    type="text"
                ></q-input>

                <q-input
                    v-model="email"
                    label="Ingrese email"
                    type="text"
                    :rules="[
                        (val) =>
                            (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                            'Formato email incorrecto',
                    ]"
                ></q-input>

                <q-input
                    v-model="phone"
                    label="Ingrese su teléfono"
                    type="text"
                ></q-input>

                <q-input
                    v-model="password"
                    label="Ingrese contraseña"
                    type="password"
                    :rules="[
                        (val) =>
                            (val && val.length > 5) ||
                            'Contraseña mínimo 6 carácteres',
                    ]"
                ></q-input>

                <q-input
                    v-model="repassword"
                    label="Repita contraseña"
                    type="password"
                    :rules="[
                        (val) =>
                            (val && val === password) ||
                            'No coinciden las contraseñas',
                    ]"
                ></q-input>

                <q-checkbox
                    v-model="politiquesAccepted"
                    label="Acepto las politicas de privacidad"
                />
                <q-btn
                    label="Ver Politicas de Privacidad"
                    to="politica-privacidad"
                    style="font-size: 8px; margin-left: 8px"
                ></q-btn>

                <div>
                    <div v-if="politiquesAccepted == true">
                        <q-btn
                            label="Registrarme"
                            color="primary"
                            type="submit"
                        ></q-btn>
                        <q-spinner-pie
                            color="primary"
                            size="2em"
                            v-if="loadding"
                        />
                    </div>
                    <q-btn v-else label="Registrarme"></q-btn>
                </div>
            </q-form>
            <div class="q-mt-xl">
                <p>¿Ya tienes una cuenta?</p>
                <q-btn to="login" color="primary">Iniciar Sesión</q-btn>
            </div>
        </div>
    </q-page>
</template>

<style></style>
