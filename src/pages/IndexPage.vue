<template>
  <q-page>
    <div class="hero">
      <img src="img/banner-lucia.jpg" alt="banner-lucia" />
    </div>
    <div class="servicios-title">
      <h3 class="text-primary">Bienvenidos(as) a mi web</h3>
      <p class="text-grey">Mira todo lo que he preparado para ti</p>
    </div>
    <div class="servicios-cards">
      <q-card class="my-card cursor-pointer">
        <q-img src="img/psicologia-para-ti.jpg">
          <div class="absolute-bottom text-h6">Psicología para ti</div>
        </q-img>

        <q-card-section>
          Un espacio donde te comparto información valiosa para que la puedas
          aplicar a tu día a día.
          <span class="text-grey">(Próximamente)</span>
        </q-card-section>
      </q-card>
      <q-card class="my-card cursor-pointer" @click="autoregistro">
        <q-img src="img/tools.jpg">
          <div class="absolute-bottom text-h6">Herramientas Terapeuticas</div>
        </q-img>

        <q-card-section>
          Donde pongo la tecnología a jugar en tu favor, para que obtengas la
          mejor experiencia en tus terapias.
        </q-card-section>
      </q-card>
      <q-card class="my-card cursor-pointer" @click="presencial">
        <q-img src="img/terapia.jpg">
          <div class="absolute-bottom text-h6">Consultas psicológicas</div>
        </q-img>

        <q-card-section>
          Presenciales y online, individuales, para parejas, para niños y
          orientación para padres.
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const presencial = () => {
  router.push('presencial');
};
const autoregistro = () => {
  router.push('autoregistro');
};
</script>

<style lang="sass" scoped></style>
