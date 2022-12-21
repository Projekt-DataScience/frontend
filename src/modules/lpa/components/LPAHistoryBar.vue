<template>
  <div class="flex h-3 w-28 mr-4 rounded justify-end items-center gap-1" id="auditBarChart">
    <div v-for="item in answers" :key="item.id">
      <div v-if="item.answer == 0" class="h-3 w-3 rounded-sm bg-cl-green"></div>
      <div v-if="item.answer == 1" class="h-3 w-3 rounded-sm bg-cl-yellow"></div>
      <div v-if="item.answer == 2" class="h-3 w-3 rounded-sm bg-cl-red"></div>
    </div>
    <div class="ml-1" v-if="(answers.length > 8)">+{{ (answers.length - 8) }}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";



export default defineComponent({
  name: "LPAHistoryBar",
  components: {

  },
  props: {
    answers: {
      type: Object,
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