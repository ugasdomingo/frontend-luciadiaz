<template>
  <q-page>
    <div class="hero">
      <img src="https://scontent.fccs6-1.fna.fbcdn.net/v/t39.30808-6/279243969_387632780040854_5499394400553296450_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=F3WO7zE2rm4AX-ylXfZ&_nc_ht=scontent.fccs6-1.fna&oh=00_AT9qwgZgBqK8PwelfLbZxqAESk6eUpU9og8DM5fD-oQ11w&oe=62DF2B22" alt="banner-lucia">
    </div>
    <div class="servicios-title">
      <h3 class="text-primary">Bienvenidos(as) a mi web</h3>
      <p class="text-grey">Mira todo lo que he preparado para ti</p>
    </div>
    <div class="servicios-cards">
      <q-card class="my-card cursor-pointer">
        <q-img src="img/psicologia-para-ti.jpg">
          <div class="absolute-bottom text-h6">
            Psicología para ti
          </div>
        </q-img>

        <q-card-section>
          Un espacio donde te comparto información valiosa
           para que la puedas aplicar a tu día a día.
           <span class="text-grey">(Próximamente)</span>
        </q-card-section>
      </q-card>
      <q-card class="my-card cursor-pointer" @click="autoregistro">
        <q-img src="img/tools.jpg">
          <div class="absolute-bottom text-h6">
            Herramientas Terapeuticas
          </div>
        </q-img>

        <q-card-section>
          Donde pongo la tecnología a jugar en tu favor,
           para que obtengas la mejor experiencia en tus terapias.
        </q-card-section>
      </q-card>
      <q-card class="my-card cursor-pointer" @click="presencial">
        <q-img src="img/terapia.jpg">
          <div class="absolute-bottom text-h6">
            Consultas psicológicas
          </div>
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

const router = useRouter()

const presencial = () => {
  router.push('presencial')
}
const autoregistro = () => {
  router.push('autoregistro')
}
</script>

<style lang="sass" scoped>
</style>
