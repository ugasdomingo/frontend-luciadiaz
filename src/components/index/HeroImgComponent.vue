<template>
    <div class="square">
        <img src="img/foto-lucia.png" alt="foto-lucia" class="img-principal" />
    </div>
</template>

<style lang="scss" scoped>
.img-principal {
    width: 100%;
    min-width: 150px;
    border-radius: 16px;
    box-shadow: 2px 2px 40px;
}

@media screen and (max-width: 1024px) {
    .img-principal {
        box-shadow: 0px 0px 0px;
        max-width: 250px;
    }
}
</style>
