<template>
  <AppListText :text="text"></AppListText>
  <div class="flex items-center text-gray-400 pt-1 font-base">
    <div v-for="(item, index) in subtext" :key="index">
      <AppListTextWithDividerLines
        v-bind:isLast="true"
        :text="item.text"
        v-if="getStatus(item, subtext)"
      ></AppListTextWithDividerLines>
      <AppListTextWithDividerLines
        v-bind:isLast="false"
        :text="item.text"
        v-else
      ></AppListTextWithDividerLines>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import AppListText from "./AppListText.vue";
import AppListTextWithDividerLines from "./AppListTextWithDividerLines.vue";

export default defineComponent({
  name: "AppListTextAndSubtext",
  components: {
    AppListText,
    AppListTextWithDividerLines
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
  },
  methods: {
    getStatus(item: any, array: any) {
      if (item === array[array.length - 1]) {
        return true;
      } else {
        return false;
      }
    }
  }
});
</script>