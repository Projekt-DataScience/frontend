<template>
    <div class="mr-2">
        <div v-if="status === 'green'">
            <LPAEmojiGreen class="text-cl-green h-10"></LPAEmojiGreen>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import LPAEmojiGreen from "../../../assets/Icons/LPAEmojiGreen.vue";
import LPAEmojiRed from "../../../assets/Icons/LPAEmojiRed.vue";
import LPAEmojiYellow from "../../../assets/Icons/LPAEmojiYellow.vue";


export default defineComponent({
    name: "LPAStatusAudit",
    components: {
        LPAEmojiGreen,
        LPAEmojiRed,
        LPAEmojiYellow
    },
    props: {
        status: {
            type: String,
            required: true
        }
    },
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
});
</script>