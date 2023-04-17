<script lang="ts" setup>
defineProps({
    posts: Array,
});
</script>

<template>
    <div class="column formations-container">
        <h2 class="titles q-mb-md text-center">Últimos Posts</h2>
        <div class="row justify-around cards-container">
            <q-card v-for="post in posts" :key="post?.id" class="my-card">
                <img
                    class="portadas-home2"
                    :src="
                        'https://res.cloudinary.com/minteados/image/upload/v1680304667/' +
                        post?.img.public_id
                    "
                />

                <q-card-section>
                    <h6 class="titles q-my-xs text-primary">
                        {{ post?.title }}
                    </h6>
                    <q-btn
                        class="btn-blogs"
                        label="Ver el Post"
                        :to="'psicologia/' + post?._id"
                    />
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.formations-container {
    width: 100%;
}
.cards-container {
    width: 100%;
}
.my-card {
    margin: 8px;
}
.portadas-home2 {
    width: 250px;
    height: 250px;
    border-radius: 16px;
    object-fit: cover;
}
.btn-blogs {
    background-color: $azul;
    color: $white;
}
</style>
