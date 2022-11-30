<template>
    <div class="flex h-3 w-28 mr-4 rounded justify-end items-center gap-1" id="auditBarChart">
        <div v-for="item in auditList.slice(0,8)" :key="item.id">
            <div v-if="item.color==='green'" class="h-3 w-3 rounded-sm bg-cl-green"></div>
            <div v-if="item.color==='yellow'" class="h-3 w-3 rounded-sm bg-cl-yellow"></div>
            <div v-if="item.color==='red'" class="h-3 w-3 rounded-sm bg-cl-red"></div>
        </div>
        <div class="ml-1" v-if="(auditList.length > 8)">+{{(auditList.length-8)}}</div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";


export default defineComponent({
  name: "LPAHistoryBar",
  components: {
    
  },
  props: {
    auditList: {
        type: Object,
        required: true
    }
  },
  mounted(){
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
});
</script>