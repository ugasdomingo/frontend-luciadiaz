<script lang="ts" setup>
defineProps({
    book: Object,
});
</script>

<template>
    <div class="column books-container items-center">
        <h2 class="titles">Libro Destacado del mes:</h2>
        <div class="row col-12 col-md-6 justify-evenly">
            <img
                class="portada-book col-md-6"
                :src="
                    'https://res.cloudinary.com/minteados/image/upload/v1680304667/' +
                    book?.coverImage.public_id
                "
                alt="coverBook"
            />
            <div class="data-book q-ml-md column col-md-5 justify-center">
                <h4 class="titles text-center q-my-none">
                    {{ book?.booksName }}
                </h4>
                <p class="q-mb-none text-grey">
                    {{ book?.description }}
                </p>
                <p class="q-mb-none"><span>Author: </span>{{ book?.author }}</p>
                <p class="q-mb-none"><span>Precio: </span>{{ book?.price }}</p>
                <p class="q-mb-none">
                    <span>Tipo: </span>{{ book?.booksType }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: 600;
}
.books-container {
    width: 100%;
}
.portada-book {
    max-width: 350px;
    border-radius: 16px;
    object-fit: cover;
}
@media screen and (max-width: 760px) {
    .books-container {
        padding: 0 4px 8px;
    }
}
</style>
