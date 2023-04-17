<script lang="ts" setup>
//Import Utils
import { allTestShowData } from '../allTestShowData';

//Get user role
const userRole = localStorage.getItem('user');
</script>

<template>
    <main class="flex-center main-container">
        <div class="column information-test">
            <h2 class="titles q-mb-none">Es hora de conocerte</h2>
            <p class="subs">
                Completa estos test gratuitos para alcanzar un nivel mayor de
                conciencia sobre tu ser y tu mente
            </p>
        </div>
        <div class="row item-center justify-evenly">
            <router-link
                v-for="item in allTestShowData"
                :key="item.title"
                :to="item.link"
            >
                <img
                    :src="item.img"
                    :alt="item.title"
                    :class="item.class"
                    v-if="item.type.includes(userRole)"
                />
            </router-link>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main-container {
    width: 100%;
    height: 100%;
}
.information-test {
    align-items: center;
}
.decoration {
    width: 50%;
    height: 50%;
    background-color: &primary;
    border-radius: 0 36px 36px 0;
}

@media screen and (max-width: 760px) {
    .main-container {
        padding: 0px 4px;
    }
    .information-test {
        width: 100%;
        height: 30%;
    }
}
</style>
