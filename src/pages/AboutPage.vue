<template>
    <q-page class="about-container">
        <main class="main-container">
            <h4>Hola, soy Lucia Díaz:</h4>
            <q-video src="" frameborder="0" allowfullscreen />
        </main>
        <div class="contact">
            <h6 class="q-mb-none">Puedes contactarme por:</h6>
            <ul>
                <li><strong>WhatsApp / Telegram: </strong>+34 624 72 18 96</li>
                <li><strong>Correo: </strong>luciadiaz.psicologo@gmail.com</li>
                <li>
                    <strong>Instagram: </strong
                    ><a href="https://www.instagram.com/psicoluciadiaz/"
                        >psicoluciadiaz</a
                    >
                </li>
            </ul>
        </div>
    </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.about-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
}
.main-container {
    display: flex;
    flex-direction: column;
}
</style>
