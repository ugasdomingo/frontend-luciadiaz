<template>
    <h3 class="text-center titles q-mb-xs">¡Te tengo DOS Obsequio más!</h3>
    <p class="text-h5 text-weight-light text-center text-dark">
        ¿Te gustaría conocer algunas razones de por qué eres como eres?
    </p>
    <div class="row items-center justify-evenly q-py-xl" style="width: 100%">
        <div class="row flex-center">
            <img
                src="img/temper.jpg"
                alt="foto-lucia"
                style="width: 200px; border-radius: 16px"
            />
            <div class="q-pl-md">
                <h6 class="q-my-none">Test de Temperamento</h6>
                <p>Descubre el potencial de tu Temperamento</p>
                <q-btn
                    color="primary"
                    glossy
                    label="Hacer test sin costo"
                    to="temperamento"
                />
            </div>
        </div>
        <div class="row flex-center">
            <img
                src="img/roles.jpg"
                alt="foto-lucia"
                style="width: 200px; border-radius: 16px"
            />
            <div class="q-pl-md">
                <h6 class="q-my-none">Test de Arquetipos</h6>
                <p>Descubre tus patrones de personalidad</p>
                <q-btn
                    color="primary"
                    glossy
                    label="Hacer test sin costo"
                    to="arquetipos"
                />
            </div>
        </div>
    </div>
</template>
