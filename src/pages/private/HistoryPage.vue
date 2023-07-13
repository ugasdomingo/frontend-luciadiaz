<template>
    <q-page class="q-px-xs">
        <div v-if="userStore.token">
            <h2>{{ userStore.userName }}</h2>
            <GeneralInformationComponent
                v-if="utilsStore.historyAdvance == 1"
            />
            <MedicalHistoryComponent v-if="utilsStore.historyAdvance == 2" />
            <MarriageInformationComponent
                v-if="utilsStore.historyAdvance == 3"
            />
            <ChildrenInformationComponent
                v-if="utilsStore.historyAdvance == 4"
            />
            <FamilyInformationComponent v-if="utilsStore.historyAdvance == 5" />
            <ReligionInformationComponent
                v-if="utilsStore.historyAdvance == 6"
            />
            <SocialEnvComponent v-if="utilsStore.historyAdvance == 7" />
            <AcademicInformationComponent
                v-if="utilsStore.historyAdvance == 8"
            />
            <JobInformationComponent v-if="utilsStore.historyAdvance == 9" />
            <AffictionComponent v-if="utilsStore.historyAdvance == 10" />
            <SelfDescriptionComponent v-if="utilsStore.historyAdvance == 11" />
            <ConsultMotivationComponent
                v-if="utilsStore.historyAdvance == 12"
            />
            <OthersComponent v-if="utilsStore.historyAdvance == 13" />
        </div>
        <div v-else>
            <RegistroViewComponent :role="'paciente'" />
        </div>
    </q-page>
</template>

<script setup lang="ts">
//Import tools
import { useUtilsStore } from 'stores/utils-store';
import { useUserStore } from 'src/stores/user-store';

//Import components
import GeneralInformationComponent from 'components/historialComponents/GeneralInformationComponent.vue';
import MedicalHistoryComponent from 'components/historialComponents/MedicalHistoryComponent.vue';
import MarriageInformationComponent from 'components/historialComponents/MarriageInformationComponent.vue';
import ChildrenInformationComponent from 'components/historialComponents/ChildrenInformationComponent.vue';
import FamilyInformationComponent from 'components/historialComponents/FamilyInformationComponent.vue';
import ReligionInformationComponent from 'components/historialComponents/ReligionInformationComponent.vue';
import SocialEnvComponent from 'components/historialComponents/SocialEnvComponent.vue';
import AcademicInformationComponent from 'components/historialComponents/AcademicInformationComponent.vue';
import JobInformationComponent from 'components/historialComponents/JobInformationComponent.vue';
import AffictionComponent from 'components/historialComponents/AffictionComponent.vue';
import SelfDescriptionComponent from 'components/historialComponents/SelfDescriptionComponent.vue';
import ConsultMotivationComponent from 'components/historialComponents/ConsultMotivationComponent.vue';
import OthersComponent from 'components/historialComponents/OthersComponent.vue';
import RegistroViewComponent from 'src/components/authComponents/RegistroViewComponent.vue';

//Active tools
const utilsStore = useUtilsStore();
const userStore = useUserStore();
utilsStore.getHistoryComplete();
</script>
