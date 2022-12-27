<template>
    <div class="flex h-3 w-28 mr-4 rounded gap-1" id="barChart">
        <div class="h-3 bg-cl-green" :style="`width: ${greenWidth}px !important;`"></div>
        <div class="h-3 bg-cl-yellow" :style="`width: ${yellowWidth}px !important;`"></div>
        <div class="h-3 bg-cl-red" :style="`width: ${redWidth}px !important;`"></div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";


export default defineComponent({
  name: "LPASidebar",
  components: {
    
  },
  props: {
    green: {
        type: Number,
        required: true
    },
    yellow: {
        type: Number,
        required: true
    },
    red: {
        type: Number,
        required: true
    },
  },
  mounted(){
    this.calculateWidth();
  },
  data() {
    return {
      total: 0,
      greenPercentage: 0,
      yellowPercentage: 0,
      redPercentage: 0,
      greenWidth: 0,
      yellowWidth: 0,
      redWidth: 0
    }
  },
  methods: {
    calculateWidth(){
         const element = document.getElementById("barChart");

         if(element instanceof HTMLElement){
            this.total = this.green + this.yellow + this.red;
            this.greenPercentage = this.green * 100 / this.total;
            this.yellowPercentage = this.yellow * 100 / this.total;
            this.redPercentage = this.red * 100 / this.total;

            const targetWidth = element.offsetWidth;

            this.greenWidth = this.greenPercentage * targetWidth;
            this.yellowWidth = this.yellowPercentage * targetWidth;
            this.redWidth = this.redPercentage * targetWidth;
         }
     }
  },
});
</script>