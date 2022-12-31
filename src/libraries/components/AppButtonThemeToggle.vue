<template>
  <div class="rounded-xl border-2 border-gray-200 p-1">
    <div class="grid grid-cols-2 gap-4">
        <button class="px-4 py-2 flex items-center" :class="getActiveToggle('light')" @click="handleToggle('light')">
            <AppIconLibrary icon="light"></AppIconLibrary>
            <div class="ml-2 text-sm font-semibold">Hell</div>
        </button>
        <button class="px-4 py-2 flex items-center" :class="getActiveToggle('dark')" @click="handleToggle('dark')">
            <AppIconLibrary icon="dark"></AppIconLibrary>
            <div class="ml-2 text-sm font-semibold">Dunkel</div>
        </button>
    </div>
  </div>
</template>
      
      <script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";

export default defineComponent({
  name: "AppButtonThemeToggle",
  components: {
    AppIconLibrary,
  },
  data(){
    return{
        isLight: true
    }
  },
  methods: {
    getActiveToggle(currentToggle: String){
        if(this.isLight === true){
            if(currentToggle === "light"){
                return "bg-gray-200 rounded-xl"
            }else{
                return
            }
        }else{
            if(currentToggle === "dark"){
                return "bg-gray-200 rounded-xl"
            }else{
                return
            }
        }
    },
    handleToggle(currentToggle: String){
        if(this.isLight === true && currentToggle === "dark"){
            this.isLight = false;
        }else if(this.isLight === false && currentToggle === "light"){
            this.isLight = true;
        }
    }
  },
});
</script>