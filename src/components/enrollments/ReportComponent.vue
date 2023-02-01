<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useEnrollmentStore } from 'stores/enrollment-store';

const $q = useQuasar();
const enrollmentStore = useEnrollmentStore();
const userStore = useUserStore();
const router = useRouter();

const scrollDown = () => {
    window.scroll({
        top: 10000,
        left: 100,
        behavior: 'smooth',
    });
};

window.setTimeout(scrollDown, 500);

const paymentMethod = ref('');
const numberProof = ref('');
const formationID = ref('Crianza Asertiva');
const name = ref('');
const email = ref('');
const password = ref('');
const politiquesAccepted = ref(false);
const loadding = ref(false);

const optionsPaymentMethod = [
    'Paypal',
    'Transferencia EEUU',
    'Transferencia Europa',
];

const handleSubmit = async (mail: any) => {
    try {
        loadding.value = !loadding.value;
        const findUser = await userStore.getUserByEmail(mail);

        if (findUser) {
            await userStore.access(email.value, password.value);
            await enrollmentStore.createEnrollments(
                formationID.value,
                paymentMethod.value,
                numberProof.value
            );
        } else {
            await userStore.register(
                name.value,
                email.value,
                password.value,
                politiquesAccepted.value
            );
            await enrollmentStore.createEnrollments(
                formationID.value,
                paymentMethod.value,
                numberProof.value
            );
        }
        router.push('/gracias');
        email.value = '';
        password.value = '';
        name.value = '';
        paymentMethod.value = '';
        numberProof.value = '';
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
    <div class="column q-ma-xs">
        <h6 class="text-center q-mt-none">
            Completa el formulario para reportar el pago
        </h6>
        <q-form
            class="self-center"
            style="min-width: 500px"
            @submit.prevent="handleSubmit(email)"
        >
            <q-input
                v-model="name"
                label="Nombre:"
                type="text"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
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
                v-model="password"
                label="Ingrese contraseña (Si ya tienes una cuenta, usa tu contraseña)"
                type="password"
                :rules="[
                    (val) =>
                        (val && val.length > 5) ||
                        'Contraseña mínimo 6 carácteres',
                ]"
            ></q-input>
            <q-select
                v-model="paymentMethod"
                label="Método de pago:"
                :options="optionsPaymentMethod"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            ></q-select>
            <q-input
                v-model="numberProof"
                label="Número Comprobante de pago:"
                type="text"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            ></q-input>
            <q-checkbox
                v-model="politiquesAccepted"
                label="Acepto las politicas de privacidad"
            />
            <q-btn
                label="Ver Politicas "
                to="politica-privacidad"
                style="font-size: 8px; margin-left: 8px"
            ></q-btn>
            <div class="registro-buttom">
                <div v-if="politiquesAccepted">
                    <q-btn
                        label="Inscribirme"
                        color="primary"
                        type="submit"
                    ></q-btn>
                    <q-spinner-pie color="primary" size="2em" v-if="loadding" />
                </div>
                <q-btn v-else label="Inscribirme"></q-btn>
            </div>
        </q-form>
    </div>
</template>
