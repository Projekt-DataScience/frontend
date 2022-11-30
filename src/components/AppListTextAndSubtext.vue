<template>
  <AppListText :text="text"></AppListText>
  <div class="flex items-center text-gray-400 pt-1 font-base">
    <div v-for="list in subtext" :key="list.id">
      <AppListTextWithDividerLine
        v-bind:isLast="false"
        :text="list.name"
        v-if="list.id < subtext.length - 1"
      ></AppListTextWithDividerLine>
      <AppListTextWithDividerLine
        v-bind:isLast="true"
        :text="list.name"
        v-else
      ></AppListTextWithDividerLine>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import AppListText from "./AppListText.vue";
import AppListTextWithDividerLine from "./AppListTextWithDividerLine.vue";

export default defineComponent({
  name: "AppListTextAndSubtext",
  components: {
    AppListText,
    AppListTextWithDividerLine
  },
  props: {
    subtext: {
      type: Object,
      required: true,
    },
    text: {
        type: String,
        required: true
    }
  }
});
</script>