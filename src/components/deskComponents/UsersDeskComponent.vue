<script lang="ts" setup>
//Import tools
import { useTestStore } from 'src/stores/test-store';
import { useUserStore } from 'src/stores/user-store';
import { ref } from 'vue';

//Import Components
import UsersTestComponent from './UsersTestComponent.vue';
import CitasComponent from '../CitasComponent.vue';

//Activate tools
const testStore = useTestStore();
const userStore = useUserStore();
const toggle = ref(false);

const initialFuntions = async () => {
    await userStore.self();
    await testStore.getAllUserTestResults(userStore.selfUid);
};

initialFuntions();
</script>

<template>
    <main class="main-user-desk">
        <h2 class="titles">
            {{ userStore.userName.split(' ')[0] }}, ¿Qué quieres aprender hoy?
        </h2>
        <div class="test-container">
            <UsersTestComponent />
        </div>
        <q-card class="citas-cards">
            <h3 class="q-my-md">Agendar una consulta</h3>
            <q-expansion-item label="Selecciona el horario que más te convenga">
                <q-card-section v-model="toggle">
                    <CitasComponent />
                </q-card-section>
            </q-expansion-item>
        </q-card>
        <h3 class="titles">Libros Adquiridos</h3>
        <h3 class="titles">Formaciones</h3>
    </main>
</template>

<style lang="scss" scoped>
.main-user-desk {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.test-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 1.5em;
    align-items: center;
    background-image: linear-gradient(
        to top,
        rgba(9, 20, 141, 0.1),
        rgba(9, 30, 141, 0.9)
    );
}
.citas-cards {
    width: 70%;
    background-color: $primary;
    color: whitesmoke;
    margin: 3.5em 0;
    padding: 0 0 0 0.5em;
}

@media screen and (max-width: 760px) {
    .citas-cards {
        width: 95%;
    }
}
</style>
