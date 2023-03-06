<script setup lang="ts">
//Import Tools
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useBestDadStore } from 'src/stores/bestDad-store';

//Activate tools
const $q = useQuasar();
const router = useRouter();
const userStore = useUserStore();
const bestDadStore = useBestDadStore();

//Pinia States for Form
const name = ref('');
const email = ref('');
const password = ref('');
const direction = ref('');
const dadsName = ref('');
const childsName = ref('');
const backgroundColor = ref('#dedaf1');
const image = ref('');
const politiquesAccepted = ref(false);

//Pinia States for logic
const loadding = ref(false);

const handleSubmit = async (mail: string) => {
    try {
        loadding.value = !loadding.value;
        //Set formData
        let formData = new FormData();

        //Push to formData
        formData.append('dadsName', dadsName.value);
        formData.append('direction', direction.value);
        formData.append('childsName', childsName.value);
        formData.append('backgroundColor', backgroundColor.value);
        formData.append('image', image.value);

        const findUser = await userStore.getUserByEmail(mail);

        if (findUser) {
            //Logging user
            await userStore.access(email.value, password.value);
            //Create BestDad
            await bestDadStore.createBestDad(formData);

            $q.notify('Su solicitud ha sido enviada');

            router.push('/gracias');
        } else {
            await userStore.register(
                name.value,
                email.value,
                password.value,
                politiquesAccepted.value
            );
            await bestDadStore.createBestDad(formData);

            $q.notify('Su solicitud ha sido enviada');

            router.push('/gracias');
        }
    } catch (error: any) {
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
    <div class="column col-12 col-md-6 q-ma-xs">
        <h6 class="q-mx-none">Completa el formulario para personalizar.</h6>
        <q-form
            class="self-center"
            style="width: 100%; min-width: 350px"
            @submit.prevent="handleSubmit(email)"
        >
            <!-- Resgistration Inputs -->
            <q-input
                v-model="name"
                label="Nombre:"
                type="text"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-input
                v-model="email"
                label="Ingrese email"
                type="text"
                :rules="[
                    (val) =>
                        (val && /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val)) ||
                        'Formato email incorrecto',
                ]"
            />
            <q-input
                v-model="password"
                label="Ingrese contraseña"
                type="password"
                :rules="[
                    (val) =>
                        (val && val.length > 5) ||
                        'Contraseña mínimo 6 carácteres',
                ]"
            >
                <template v-slot:hint>
                    Si ya tienes una cuenta, usa tu contraseña
                </template>
            </q-input>
            <!-- Data Inputs -->
            <q-input
                v-model="direction"
                label="Dirección de envío: (opcional)"
                type="text"
            />
            <q-input
                v-model="dadsName"
                label="Nombre del Padre:"
                type="text"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-input
                v-model="childsName"
                label="Nombre de la niña(o):"
                type="text"
                :rules="[(val) => (val && val.length > 0) || 'Campo Requerido']"
            />
            <q-file v-model="image" label="Adjuntar imágenes" />
            <q-input filled v-model="backgroundColor" class="my-input">
                <template v-slot:append>
                    <q-icon name="colorize" class="cursor-pointer">
                        <q-popup-proxy
                            cover
                            transition-show="scale"
                            transition-hide="scale"
                        >
                            <q-color v-model="backgroundColor" />
                        </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
            <q-checkbox
                v-model="politiquesAccepted"
                label="Acepto las politicas de privacidad"
                class="q-mt-md"
            />
            <div class="q-my-md">
                <div v-if="politiquesAccepted">
                    <q-btn
                        label="Personalizar"
                        color="primary"
                        type="submit"
                    ></q-btn>
                    <q-spinner-pie color="primary" size="2em" v-if="loadding" />
                </div>
                <q-btn v-else label="Personalizar"></q-btn>
            </div>
        </q-form>
    </div>
</template>

<style lang="scss" scoped>
.my-input {
    max-width: 250px;
}
</style>
