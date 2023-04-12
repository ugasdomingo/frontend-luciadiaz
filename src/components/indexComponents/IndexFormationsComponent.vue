<script lang="ts" setup>
//Import components
import SelectPaypalButtonComponent from '../paypalButtons/SelectPaypalButtonComponent.vue';

defineProps({
    formations: Array,
});
</script>

<template>
    <div class="column formations-container items-center">
        <h2 class="titles text-center">Próximas Formaciones</h2>
        <div class="row justify-around cards-container">
            <q-card
                v-for="items in formations"
                :key="items?.id"
                class="my-card cursor-pointer"
            >
                <img
                    class="portadas-home"
                    :src="
                        'https://res.cloudinary.com/minteados/image/upload/v1680304667/' +
                        items?.coverImage.public_id
                    "
                />

                <q-popup-proxy :breakpoint="50">
                    <q-card-section>
                        <h6 class="q-my-none titles">
                            {{ items?.formationName }}
                        </h6>
                        <p>{{ items?.description }}</p>
                        <p>
                            <span>Modalidad: </span>{{ items?.formationType }}
                        </p>
                        <p><span>Lugar: </span>{{ items?.location }}</p>
                        <p><span>Precio: </span>{{ items?.price }} euros</p>
                        <SelectPaypalButtonComponent
                            :price="items?.paypalButton"
                        />
                    </q-card-section>
                    <q-card-section>
                        <q-video :ratio="16 / 9" :src="items?.videoUrl" />
                    </q-card-section>
                </q-popup-proxy>
            </q-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: 600;
}
.formations-container {
    width: 100%;
    height: 100%;
}
.cards-container {
    width: 100%;
}
.my-card {
    width: 250px;
    height: 250px;
    border-radius: 16px;
    object-fit: cover;
    margin: 8px 0;
}
</style>
