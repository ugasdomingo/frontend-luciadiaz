<script lang="ts" setup>
// Import Tools
import { useTestStore } from 'src/stores/test-store';
import { archetypeResults } from './archetypeResults';

// Setup Tools
const testStore = useTestStore();
</script>

<template>
    <div class="page-container">
        <h3 class="titles">
            Tienes la personalidad de un {{ testStore.userArchetype }}
        </h3>
        <div class="results">
            <h4>Sabio Rey: {{ testStore.arquetipo[0]?.answers?.wise }}</h4>
            <h4>Guerrero: {{ testStore.arquetipo[0]?.answers?.warrior }}</h4>
            <h4>Mago: {{ testStore.arquetipo[0]?.answers?.wizard }}</h4>
            <h4>Amante: {{ testStore.arquetipo[0]?.answers?.lover }}</h4>
        </div>
        <h6>El número mayor en los resultados es tu patrón dominante:</h6>

        <div class="card-container">
            <q-card
                class="my-card"
                v-for="item in archetypeResults"
                :key="item.arquetipo"
                :class="item.clase"
            >
                <h5>{{ item.arquetipo }}</h5>
                <p class="text-center">
                    Principalmente quiere {{ item.quiere }}
                </p>
                <q-card-section>
                    <h6>Aspectos Positivos</h6>
                    <ul>
                        <li>{{ item.p1 }}</li>
                        <li>{{ item.p2 }}</li>
                        <li>{{ item.p3 }}</li>
                        <li>{{ item.p4 }}</li>
                    </ul>
                </q-card-section>
            </q-card>
        </div>

        <h6>
            Si tienes dudas sobre tus resultados de Arquetipo, puedes escribirme
            por WhatsApp o agendar una cita para que tratemos el tema en
            profundidad:
        </h6>
        <q-btn label="Agendar Cita" color="primary" to="citas" />
    </div>
</template>

<style lang="scss" scoped>
.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1.5em;
}
.page-container h6 {
    width: 60%;
}
.results {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $positive;
    padding: 8px;
    border-radius: 24px;
}
.results h4 {
    padding: 4px;
    margin: 4px;
}
.card-container {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
}
.my-card {
    max-width: 350px;
    margin: 8px;
    box-shadow: 1px 1px 10px;
}
.my-card h5 {
    padding: 4px;
    margin: 4px;
}
.my-card h6 {
    padding: 4px;
    margin: 4px;
}
//Background CLases
.sabio {
    background-image: linear-gradient(
        to bottom,
        rgba(9, 30, 141, 0.9),
        rgba(49, 204, 236, 0.8)
    );
    color: $white;
}
.guerrero {
    background-image: linear-gradient(
        to top,
        rgba(184, 218, 52, 0.5),
        rgba(9, 30, 141, 0.9)
    );
    color: $white;
}
.amante {
    background-image: linear-gradient(
        to bottom,
        rgba(9, 20, 141, 0.5),
        rgba(9, 30, 141, 0.9)
    );
    color: $white;
}
.mago {
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(9, 30, 141, 0.9)
    );
    color: $white;
}

// Responsive
@media screen and (max-width: 760px) {
    .page-container {
        padding: 0 8px 1.5em;
    }
    .page-container h6 {
        width: 95%;
    }
    .results {
        width: 100%;
    }
    .card-container {
        width: 95%;
    }
}
</style>
