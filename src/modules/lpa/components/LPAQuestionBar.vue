<template>
    <div class="flex h-3 w-28 mr-4 rounded gap-1" id="barChart">
        <div class="h-3 bg-green-500" :style="`width: ${greenWidth}px !important;`"></div>
        <div class="h-3 bg-orange-500" :style="`width: ${orangeWidth}px !important;`"></div>
        <div class="h-3 bg-red-500" :style="`width: ${redWidth}px !important;`"></div>
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
    orange: {
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
      orangePercentage: 0,
      redPercentage: 0,
      greenWidth: 0,
      orangeWidth: 0,
      redWidth: 0
    }
  },
  methods: {
    calculateWidth(){
         const element = document.getElementById("barChart");

         if(element instanceof HTMLElement){
            this.total = this.green + this.orange + this.red;
            this.greenPercentage = this.green * this.total / 100;
            this.orangePercentage = this.orange * this.total / 100;
            this.redPercentage = this.red * this.total / 100;

            const targetWidth = element.offsetWidth;

            this.greenWidth = 100 * this.greenPercentage / targetWidth;
            this.orangeWidth = 100 * this.orangePercentage / targetWidth;
            this.redWidth = 100 * this.redPercentage / targetWidth;
         }
     }
  },
});
</script>