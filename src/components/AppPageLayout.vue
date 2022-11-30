<template>
    <div class="h-screen">
         <div class="relative">
             <div class="fixed w-80 hidden md:inset-y-0 md:flex md:w-80 md:flex-col bg-gray-100 border-r-2 border-gray-200" id="sidebar" v-if="hasSidebar()">
                 <slot name="sidebar"></slot>
             </div>
         </div>
         <div class="ml-80">
             <div class="relative">
                 <div class="border-gray-200 border-b-2 h-18 z-10 fixed bg-white" :style="`width: ${width}px !important;`">
                     <slot name="header"></slot>
                 </div>
             </div>
             
             <div class="flex pt-18">
                 <div class="flex-none w-80 h-screen m-6" v-if="hasSubsidebar()">
                    <slot name="subsidebar"></slot>
                </div>
                 <div class="flex-auto m-6">
                     <slot name="content"></slot>
                 </div>
             </div>
         </div>
    </div>
 </template>
 
 <script lang="ts">
 import { ref, defineComponent } from "vue";
 
 export default defineComponent({
   name: "AppPageLayout",
   components: {},
   data() {
     return {
         width: 0,
     };
   },
   mounted(){
     this.addHeaderResizeListener();
   },
   methods: {
     addHeaderResizeListener(){
         const element = document.getElementById("sidebar");
         if(element){
             const resize = new ResizeObserver(() => {
                 this.changeHeaderWidth();
             });
             resize.observe(element);
         }
     },
     changeHeaderWidth(){
         const element = document.getElementById("sidebar");
         let windowWidth = window.innerWidth;
         if(element instanceof HTMLElement){
             const calculatedWidth = windowWidth - element.offsetWidth;
             this.width = calculatedWidth;
         }
     },
     hasSubsidebar() {
      return !!this.$slots.subsidebar;
    },
    hasSidebar() {
      return !!this.$slots.sidebar;
    },
   },
 });
 </script>
     