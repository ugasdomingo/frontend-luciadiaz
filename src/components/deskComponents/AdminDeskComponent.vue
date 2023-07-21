<script lang="ts" setup>
//Import Tools
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useTestStore } from 'src/stores/test-store';

//Impot Components
import AdminCreateDataComponent from './AdminCreateDataComponent.vue';
import AnamnesisShowResultComponent from '../anamnesisComponents/AnamnesisShowResultComponent.vue';
import ReasonsShowResultComponent from '../reasonsComponent/ReasonsShowResultComponent.vue';

//Import answers historial components
import GeneralInfoAnsComponent from '../historialAnswersComponent/GeneralInfoAnsComponent.vue';
import MedicalHistAnsComponent from '../historialAnswersComponent/MedicalHistAnsComponent.vue';
import MarriageInfoAnsComponent from '../historialAnswersComponent/MarriageInfoAnsComponent.vue';
import ChildrenInfoAnsComponent from '../historialAnswersComponent/ChildrenInfoAnsComponent.vue';
import FamilyInfoAnsComponent from '../historialAnswersComponent/FamilyInfoAnsComponent.vue';
import ReligionInfoAnsComponent from '../historialAnswersComponent/ReligionInfoAnsComponent.vue';
import SocialEnvAnsComponent from '../historialAnswersComponent/SocialEnvAnsComponent.vue';
import AcademicInfoAnsComponent from '../historialAnswersComponent/AcademicInfoAnsComponent.vue';
import JobInfoAnsComponent from '../historialAnswersComponent/JobInfoAnsComponent.vue';
import AffictionAnsComponent from '../historialAnswersComponent/AffictionAnsComponent.vue';
import SelfDescriptionAnsComponent from '../historialAnswersComponent/SelfDescriptionAnsComponent.vue';
import ConsultMotivAnsComponent from '../historialAnswersComponent/ConsultMotivAnsComponent.vue';
import OthersAnsComponent from '../historialAnswersComponent/OthersAnsComponent.vue';

//Activate tools
const userStore = useUserStore();
const testStore = useTestStore();
userStore.getAllUsers();
const showUsers = ref(userStore.allUsers);
const textFilter = ref('');
const toggle = ref(false);
const createItems = ref(false);

// Funtion to camelcase the text input used for filter podcast
const camelSentence = (str: string) => {
    return (' ' + str)
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
};

//Funtion to filter Users (no matter if user use lowerCase o upperCase)
const filterUsers = (textFilter: any) => {
    const camel = camelSentence(textFilter); // active the camelCase funtion
    showUsers.value = userStore.allUsers.filter(function (item: any) {
        if (item.name.match(textFilter)) {
            return item.name.match(textFilter);
        }
        if (item.name.match(camel)) {
            return item.name.match(camel);
        }
    });
};

//Funtion to get all users data
const findData = async (id: string) => {
    try {
        testStore.cleanData();
        await testStore.getAllUserTestResults(id);
    } catch (error: any) {
        console.log(error);
    }
};
</script>

<template>
    <q-page class="column items-center">
        <h1>Admin Page</h1>
        <q-toggle
            v-model="createItems"
            label="Subir Contenido"
            class="q-my-xl"
        />
        <AdminCreateDataComponent v-if="createItems" />
        <q-input
            outlined
            v-model="textFilter"
            @keyup="filterUsers(textFilter)"
            type="text"
            label="buscar paciente:"
            style="max-width: 450px"
        />
        <div
            v-for="user in showUsers"
            :key="user._id"
            class="column my-card-container"
        >
            <q-card
                class="my-card"
                @click="(toggle = !toggle), findData(user?._id)"
            >
                <div>
                    <span class="text-subtitle1 q-ml-xl">{{ user?.name }}</span>
                    <q-expansion-item>
                        <q-card-section v-model="toggle">
                            <p>
                                <span class="text-h5">
                                    Arquetipo: {{ testStore.userArchetype }}
                                </span>
                                <br />
                                Totales: {{ testStore.arquetipo[0]?.answers }}
                            </p>
                            <p>
                                <span class="text-h5">
                                    Temperamento: {{ testStore.userTemper }}
                                </span>
                                <br />
                                Totales:
                                {{ testStore.temperamento[0]?.answers }}
                            </p>
                            <ReasonsShowResultComponent
                                :name="user?.name"
                                v-if="testStore.metas[0]?.answers"
                            />
                            <p>Anamnesis:</p>
                            <AnamnesisShowResultComponent
                                :respuestas="testStore.anamnesis[0]?.answers"
                                v-if="testStore.anamnesis[0]?.answers"
                            />
                            <p>
                                Autoregistro:
                                {{ testStore.autoregistro[0]?.answers }}
                            </p>

                            <!-- HISTORIAL INFORMATION  -->

                            <GeneralInfoAnsComponent
                                :answers="testStore.historial[0]"
                                v-if="testStore.historial[0]"
                            />
                            <MedicalHistAnsComponent
                                :answers="testStore.historial[1]"
                                v-if="testStore.historial[1]"
                            />
                            <MarriageInfoAnsComponent
                                :answers="testStore.historial[2]"
                                v-if="testStore.historial[2]"
                            />
                            <ChildrenInfoAnsComponent
                                :answers="testStore.historial[3]"
                                v-if="testStore.historial[3]"
                            />
                            <FamilyInfoAnsComponent
                                :answers="testStore.historial[4]"
                                v-if="testStore.historial[4]"
                            />
                            <ReligionInfoAnsComponent
                                :answers="testStore.historial[5]"
                                v-if="testStore.historial[5]"
                            />
                            <SocialEnvAnsComponent
                                :answers="testStore.historial[6]"
                                v-if="testStore.historial[6]"
                            />
                            <AcademicInfoAnsComponent
                                :answers="testStore.historial[7]"
                                v-if="testStore.historial[7]"
                            />
                            <JobInfoAnsComponent
                                :answers="testStore.historial[8]"
                                v-if="testStore.historial[8]"
                            />
                            <AffictionAnsComponent
                                :answers="testStore.historial[9]"
                                v-if="testStore.historial[9]"
                            />
                            <SelfDescriptionAnsComponent
                                :answers="testStore.historial[10]"
                                v-if="testStore.historial[10]"
                            />
                            <ConsultMotivAnsComponent
                                :answers="testStore.historial[11]"
                                v-if="testStore.historial[11]"
                            />
                            <OthersAnsComponent
                                :answers="testStore.historial[12]"
                                v-if="testStore.historial[12]"
                            />
                        </q-card-section>
                    </q-expansion-item>
                </div>
            </q-card>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
.my-card-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 8px;
}
.my-card {
    background-color: $azul;
    color: $white;
}
@media (max-width: 900px) {
    .my-card {
        width: 100%;
    }
    .my-card-container {
        width: 90%;
    }
}
</style>
