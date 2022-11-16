<template>
  <div>
    <!-- Static sidebar for desktop -->
    <div
      class="
        hidden
        md:fixed md:inset-y-0 md:flex md:w-96 md:flex-col
        bg-gray-100
      "
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="
          flex flex-grow flex-col
          overflow-y-auto
          border-r-2 border-gray-200
        "
      >
        <!-- App Sidebar Header -->
        <AppSidebarHeader brandingName="MyCompany" moduleName="Layered Process Audit" iconPath="src/assets/Icons/LPAIcon.svg" @toggleSidebar="toggleSidebar()"></AppSidebarHeader>
        <div class="flex">
          <div class="flex-initial w-full p-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">
    import { ref, defineComponent } from "vue";
    import AppSidebarHeader from "../../../components/AppSidebarHeader.vue"

    export default defineComponent({
        name: "LPASidebar",
        components: {
            AppSidebarHeader
        },
        data(){
          return {
            sidebarIsActive: true
          }
        },
        methods: {
          toggleSidebar(){
            console.log("toggleSidebar")
          },
        }
    });
</script>
    