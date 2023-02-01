<script setup>
import { useEnrollmentStore } from 'src/stores/enrollment-store';
import ReportComponent from './ReportComponent.vue';

const enrollmentStore = useEnrollmentStore();
const scrollDown = () => {
    window.scroll({
        top: 10000,
        left: 100,
        behavior: 'smooth',
    });
};

window.setTimeout(scrollDown, 500);

const handleSubmit = () => {
    enrollmentStore.showReport = !enrollmentStore.showReport;
};
</script>

<template>
    <div class="column">
        <h4 class="text-center q-mb-md">Cuentas Autorizadas</h4>
        <p class="text-center">
            Para inscribirte, por favor realiza el pago en cualquiera de estos
            métodos y luego Reporta el Pago
        </p>
        <div class="row col-12">
            <q-card class="col-12 col-md-4">
                <q-card-section><h5>Paypal</h5></q-card-section>
                <q-separator inset />
                <q-card-section
                    ><p>
                        Cuenta autorizada:
                        <span>ugasdomingo@gmail.com</span>
                    </p></q-card-section
                >
            </q-card>
            <q-card class="col-12 col-md-4">
                <q-card-section
                    ><h5>Transferencia Estados Unidos</h5></q-card-section
                >
                <q-separator inset />
                <q-card-section>
                    <p>
                        ACH and Wire routing number: <span>084009519</span>
                        <br />
                        Número de cuenta: <span>9600011166715743</span> <br />
                        Tipo de cuenta: <span>Corriente</span> <br />
                        Titular: <span>Lucia Antonella Diaz Gimenez</span>
                        <br />
                    </p>
                </q-card-section>
            </q-card>
            <q-card class="col-12 col-md-4">
                <q-card-section><h5>Transferencia Europa</h5></q-card-section>
                <q-separator inset />
                <q-card-section>
                    <p>
                        BIC: <span>TRWIBEB1XXX</span> <br />
                        IBAN: <span>BE58 9675 2118 2679</span> <br />
                        Titular: <span>Lucia Antonella Diaz Gimenez</span>
                        <br />
                    </p>
                </q-card-section>
            </q-card>
        </div>
        <q-btn
            @click="handleSubmit"
            label="Reportar pago"
            color="primary"
            type="submit"
            class="q-my-md self-center"
            style="width: 30%"
        ></q-btn>
        <div v-if="enrollmentStore.showReport">
            <ReportComponent />
        </div>
    </div>
</template>

<style lang="scss" scoped>
h5 {
    padding: 8px;
    margin: 4px;
}
span {
    font-weight: 600;
}
</style>
