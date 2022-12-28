<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BlogsComponent',
    props: {
        title: {
            type: String,
            required: true,
        },

        body: {
            type: String,
            default: '',
        },

        link: {
            type: String,
            default: '#',
        },

        img: {
            type: String,
            default: '',
        },
        category: {
            type: String,
            default: '',
        },
    },
});
</script>

<template>
    <q-card clickable :to="link" class="my-card">
        <q-img src="{{img}}">
            <div class="absolute-bottom text-h6">
                {{ title }}
            </div>
        </q-img>

        <q-card-section>
            {{ body }}
        </q-card-section>
    </q-card>
</template>
