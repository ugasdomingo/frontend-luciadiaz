<template>
    <!-- Calendly inline widget begin -->
    <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/luciadiaz/citas"
        style="min-width: 320px; height: 630px"
    ></div>
    <!-- Calendly inline widget end -->
</template>

<script lang="ts">
export default {
    mounted() {
        const recaptchaScript = document.createElement('script');
        recaptchaScript.setAttribute(
            'src',
            'https://assets.calendly.com/assets/external/widget.js'
        );
        document.head.appendChild(recaptchaScript);
    },
};
</script>
