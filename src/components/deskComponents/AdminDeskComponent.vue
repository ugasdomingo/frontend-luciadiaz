<script lang="ts" setup>
//Import Tools
import { ref } from 'vue';
import { useUserStore } from 'src/stores/user-store';
import { useTestStore } from 'src/stores/test-store';

//Impot Components

//Activate tools
const showUsers = ref('');
const textFilter = ref('');
const userStore = useUserStore();
userStore.getAllUsers();

const toggle = ref(false);

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
        const testStore = useTestStore();

        await testStore.getAllUserTestResults(id);
    } catch (error: any) {}
};
</script>

<template>
    <q-page class="row justify-center">
        <q-input
            outlined
            v-model="textFilter"
            @keyup="filterUsers(textFilter)"
            type="text"
            label="buscar paciente:"
            style="max-width: 450px"
        />
        <div v-for="user in userStore.allUsers" :key="user._id">
            <q-card
                class="my-card"
                @click="(toggle = !toggle), findData(user?._id)"
            >
            </q-card>
        </div>
    </q-page>
</template>
