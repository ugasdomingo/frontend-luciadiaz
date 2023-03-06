<template>
    <q-page>
        <div class="column">
            <div class="row col-12 justify-evenly best-container">
                <q-card class="col-12 col-md-6 q-my-xl q-pa-xl img-container">
                    <q-img src="img/best-dad-portada.png" class="img-1"></q-img>
                </q-card>
                <q-card class="col-12 col-md-4 q-my-xl">
                    <q-card-section>
                        <h3>El Mejor Papá del Mundo</h3>
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <h6>Comprar versión Genérica</h6>
                        <GenericBestDadPaypalComponent />
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <h6>Comprar versión Personalizada</h6>
                        <PersonalizeBestDadPaypalComponent />
                    </q-card-section>
                    <q-separator inset />
                    <q-card-section>
                        <img
                            src="img/certificado-best-dad.png"
                            alt="Description"
                            class="img-2"
                        />
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup>
import GenericBestDadPaypalComponent from './GenericBestDadPaypalComponent.vue';
import PersonalizeBestDadPaypalComponent from './PersonalizeBestDadPaypalComponent.vue';
import { ref } from 'vue';

const toggle = ref(false);

const handleClick = () => {
    toggle.value = !toggle.value;
};
</script>

<style lang="scss" scoped>
span {
    font-weight: 600;
}
h6 {
    margin-bottom: 4px;
}

.img-2 {
    width: 70%;
    min-width: 250px;
}
@media screen and (max-width: 1080px) {
    h3 {
        padding: 12px 0;
        margin: 0;
    }
    .best-container {
        justify-content: center;
    }
    .img-container {
        padding: 12px 0;
    }
    .img-1 {
        width: 100%;
        min-width: 250px;
        padding: 0;
    }
}
</style>
