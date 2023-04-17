<script lang="ts" setup>
//Import tools
import { ref } from 'vue';
import { useTestStore } from 'src/stores/test-store';
import { useUserStore } from 'src/stores/user-store';

//Import Components
import ArchetypeFormComponent from '../archetypeComponents/ArchetypeFormComponent.vue';
import ReasonsFormComponent from '../reasonsComponent/ReasonsFormComponent.vue';
import TemperFormComponent from '../temperComponents/TemperFormComponent.vue';
import ReasonsShowResultComponent from '../reasonsComponent/ReasonsShowResultComponent.vue';
import ArchetypeShowResultsComponent from '../archetypeComponents/ArchetypeShowResultsComponent.vue';
import TemperShowResultsComponent from '../temperComponents/TemperShowResultsComponent.vue';

//Activate tools
const testStore = useTestStore();
const userStore = useUserStore();
const toggle = ref(false);
</script>

<template>
    <div class="results-container">
        <h4 class="subs q-mb-md text-white">
            Empieza a conocerte a ti misma/o
        </h4>
        <p class="text-white">
            Completa estos 3 test para tener un conocimiento más profundo de tu
            mente. Si tienes alguna duda o pregunta, puedes escribirme o agendar
            una consulta.
        </p>
        <q-card @click="toggle = !toggle" class="negative-cards">
            <q-icon
                name="check"
                color="green"
                size="2em"
                v-if="testStore.arquetipo[0]"
            />
            <q-icon name="warning" color="green" size="2em" v-else />
            {{ userStore.userName.split(' ')[0] }}
            tienes la personalidad de un
            {{ testStore.userArchetype }}
            <q-expansion-item
                v-if="testStore.arquetipo[0]"
                label="Encuentra más información aquí"
                style="width: 100%"
            >
                <q-card-section v-model="toggle">
                    <ArchetypeShowResultsComponent />
                </q-card-section>
            </q-expansion-item>
            <q-expansion-item
                v-else
                label="Aún no haz realizado el Test de Personalidad"
            >
                <q-card-section v-model="toggle">
                    <ArchetypeFormComponent />
                </q-card-section>
            </q-expansion-item>
        </q-card>

        <!-- REASONS TEST SECTION -->
        <q-card @click="toggle = !toggle" class="negative-cards">
            <q-icon
                name="check"
                color="green"
                size="2em"
                v-if="testStore.metas[0]"
            />
            <q-icon name="warning" color="green" size="2em" v-else />
            <q-expansion-item
                v-if="testStore.metas[0]"
                label="Tienes una carta de ti para ti:"
                style="width: 100%"
            >
                <q-card-section v-model="toggle">
                    <ReasonsShowResultComponent
                        :name="userStore.userName.split(' ')[0]"
                    />
                </q-card-section>
            </q-expansion-item>

            <q-expansion-item v-else>
                <q-card-section v-model="toggle">
                    <ReasonsFormComponent />
                </q-card-section>
            </q-expansion-item>
        </q-card>

        <!-- TEMPER TEST SECTION -->
        <q-card @click="toggle = !toggle" class="negative-cards">
            <q-icon
                name="check"
                color="green"
                size="2em"
                v-if="testStore.temperamento[0]"
            />
            <q-icon name="warning" color="orange" size="2em" v-else />
            {{ userStore.userName.split(' ')[0] }} tu temperamento es:
            {{ testStore.userTemper }}
            <q-expansion-item
                v-if="testStore.temperamento[0]"
                label="Encuentra más información aquí"
                style="width: 100%"
            >
                <q-card-section v-model="toggle">
                    <TemperShowResultsComponent />
                </q-card-section>
            </q-expansion-item>
            <q-expansion-item
                v-else
                label="Aún no haz realizado el Test de Temperamento"
            >
                <q-card-section v-model="toggle">
                    <TemperFormComponent />
                </q-card-section>
            </q-expansion-item>
        </q-card>
    </div>
</template>

<style lang="scss" scoped>
.results-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    place-items: center;
}
.negative-cards {
    width: 70%;
    background-color: $primary;
    color: whitesmoke;
    margin: 0.5em 0;
    padding: 0 0 0 0.5em;
}
@media screen and (max-width: 760px) {
    h4 {
        color: $white;
    }
    .results-container {
        padding: 0 4px;
    }
    .negative-cards {
        width: 100%;
    }
}
</style>
