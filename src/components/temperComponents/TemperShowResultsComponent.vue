<script lang="ts" setup>
// Import Tools
import { useTestStore } from 'src/stores/test-store';
import { temperResults } from './temperResults';

// Setup Tools
const testStore = useTestStore();
</script>

<template>
    <div class="page-container">
        <h3 class="titles">Su temperamento es {{ testStore.userTemper }}</h3>
        <div class="results">
            <h4>
                Sanguineo: {{ testStore.temperamento[0]?.answers?.sanguine }}
            </h4>
            <h4>
                Colérico: {{ testStore.temperamento[0]?.answers?.choleric }}
            </h4>
            <h4>
                Melancólico:
                {{ testStore.temperamento[0]?.answers?.melancholic }}
            </h4>
            <h4>
                Flemático: {{ testStore.temperamento[0]?.answers?.phlegmatic }}
            </h4>
        </div>
        <h6 class="description">
            Tu número mayor es tu temperamento dominante. La mayoría de las
            personas poseemos dos de los tempermentos y se combinan de la
            siguiente manera: melancólico flemático, colérico sanguineo,
            sanguíneo melancólico y asi. Aquí puedes ver las características
            principales de cada temperamento:
        </h6>
        <div class="card-container">
            <q-card
                class="my-card"
                v-for="item in temperResults"
                :key="item.slogan"
                :class="item.class"
            >
                <h5>{{ item.title }}</h5>
                <p class="text-center">
                    Su Slogan es: <strong>{{ item.slogan }}</strong>
                </p>

                <q-card-section>
                    <h6>Características principales</h6>
                    <ul>
                        <li><strong>Deseo: </strong> {{ item.deseo }}</li>
                        <li>
                            <strong>Necesidades: </strong>
                            {{ item.necesidades }}
                        </li>
                        <li>
                            <strong>Fuerzas Claves: </strong> {{ item.fuerzas }}
                        </li>
                        <li>
                            <strong>Debilidades Claves: </strong>
                            {{ item.debilidades }}
                        </li>
                        <li>
                            <strong>Tiene miedo de: </strong> {{ item.miedo }}
                        </li>
                        <li>
                            <strong>Para mejorar: </strong> {{ item.mejorar }}
                        </li>
                        <li>
                            <strong>Se le reconoce por: </strong>
                            {{ item.reconoce }}
                        </li>
                    </ul>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h4 {
    padding: 4px;
    margin: 4px;
}
h5 {
    padding: 4px;
    margin: 4px;
}
h6 {
    padding: 4px;
    margin: 4px;
}
.page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.results {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $positive;
    padding: 8px;
    margin: 0 0 2em;
    border-radius: 24px;
}
.description {
    opacity: 0.6;
    width: 60%;
}
.card-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 70%;
}
.my-card {
    max-width: 450px;
    margin: 1.5em 0;
    font-family: 'nunito';
}
//Background CLases
.flematico {
    background-image: linear-gradient(
        to bottom,
        rgba(9, 30, 141, 0.9),
        rgba(49, 204, 236, 0.8)
    );
    color: $white;
}
.sanguineo {
    background-image: linear-gradient(
        to top,
        rgba(184, 218, 52, 0.5),
        rgba(9, 30, 141, 0.9)
    );
    color: $white;
}
.colerico {
    background-image: linear-gradient(
        to bottom,
        rgba(9, 20, 141, 0.5),
        rgba(9, 30, 141, 0.9)
    );
    color: $white;
}
.melancolico {
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(9, 30, 141, 0.9)
    );
    color: $white;
}

@media screen and (max-width: 760px) {
    .page-container {
        padding: 0 8px 1.5em;
    }
    .results {
        width: 95%;
    }
    .description {
        width: 95%;
    }
    .card-container {
        width: 100%;
    }
    .my-card {
        max-width: 100%;
    }
}
</style>
