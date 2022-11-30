<template>
    
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppListText",
  props: {
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    width: {

    },
    height: {

    },
    stroke: {

    },
    color: {

    }
  }
});
</script>