<script lang="ts" setup>
//Import Paypal Buttoms
import BestDadPaypalButtonComponent from './booksButtons/BestDadPaypalButtonComponent.vue';

// Props to filter
defineProps({
    price: String,
});
</script>

<template>
    <!-- List All Paypal Button Component -->
    <BestDadPaypalButtonComponent v-if="price === 'Best Dad'" />
</template>
