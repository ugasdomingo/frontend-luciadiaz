<template>
    <div class="row background-container col-12 q-py-xl">
        <div class="row col-12 col-md-6 justify-evenly">
            <img
                src="https://res.cloudinary.com/minteados/image/upload/v1675283845/Cursos/C%C3%B3mo_ser_pap%C3%A0s_y_no_morir_en_el_intento_qchyle.jpg"
                alt="portada"
                class="image"
            />
        </div>
        <div class="second-container column col-12 col-md-5 justify-center">
            <h4 class="q-mt-none q-pl-none text-white text-left">
                Formación a Domicilio
            </h4>
            <p class="text-white text-h6">
                He creado esta formación para acompañarte en el proceso de ser
                la madre, el padre que tu peque necesita, así juntos podremos
                revisar la dinámica que llevas con tu peque en su día a día. Con
                ello podremos diseñar un plan de acción que permita desarrollar
                sus habilidades y las tuyas.
            </p>
            <q-btn
                label="Más información"
                to="/orientacion-padres"
                class="bg-accent"
                style="width: 50%; margin: 4px 0px"
            ></q-btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.image {
    max-width: 350px;
    min-width: 150px;
    padding: 4px;
    border-radius: 32px;
}
.background-container {
    background-image: url('../../../public/img/fondo.jpg');
    background-size: cover;
}

@media screen and (max-width: 1080px) {
    .second-container {
        margin: 24px 8px 8px 12px;
    }
}
</style>
