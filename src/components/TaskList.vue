<template>
    <div class="flex items-center text-sm pt-1 font-base">
        {{ title }}
    </div>
    <div>
        <div>{{ text }}</div>
        <div class="flex text-gray-400 text-sm font-base mt-1" >
        <div v-for="(item, index) in subtext " :key="index">
            <AppListTextWithDividerLine :text="item.text" :isLast="getStatus(item, subtext)"></AppListTextWithDividerLine>
        </div>
    </div>
    </div>
    <AppButtonTertiary class="mt-2" name="Audit starten"></AppButtonTertiary>
</template>
        
<script lang="ts">
import { ref, defineComponent } from "vue";
import AppButtonTertiary from "./AppButtonTertiary.vue";
import AppListTextWithDividerLine from "./AppListTextWithDividerLine.vue";


export default defineComponent({
    name: "TaskList",
    components: {
    AppListTextWithDividerLine,
    AppButtonTertiary
},
    props: {
        subtext: {
            type: Object,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        title: {
            tpye: String,
            required: true
        },
        action: {
            type: String,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        getStatus(item: any, array: any) {
            if (item === array[array.length - 1]) {
                return true
            } else {
                return false
            }
        }
    },

}
);
</script>