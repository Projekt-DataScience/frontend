<template>
  <div>
    <!-- Static sidebar for desktop -->
    <div
      class="
        hidden
        md:fixed md:inset-y-0 md:flex md:w-80 md:flex-col
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
        <AppSidebarHeader brandingName="MyCompany" moduleName="Layered Process Audit" @toggleSidebar="toggleSidebar()" @toggleSidebarHeader="toggleSidebarHeader()"></AppSidebarHeader>
        <!-- App Sidebar Header when toggleSidebarHeader event is true-->
        <div v-if="sidebarHeaderIsActive" class="border-b-2 border-gray-200">
          Test
        </div>
        <div class="flex">
          <div class="flex-initial w-full p-3">
            <AppNavigationItem :isActive="testActive"></AppNavigationItem>
            <AppNavigationItem :isActive="test2Active"></AppNavigationItem>
            <AppNavigationItem :isActive="test2Active"></AppNavigationItem>
            <AppNavigationItem :isActive="test2Active"></AppNavigationItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">
    import { ref, defineComponent } from "vue";
    import AppSidebarHeader from "../../../components/AppSidebarHeader.vue"
    import AppNavigationItem from "../../../components/AppNavigationItem.vue";

    export default defineComponent({
        name: "LPASidebar",
        components: {
            AppSidebarHeader,
            AppNavigationItem
        },
        data(){
          return {
            sidebarIsActive: true,
            sidebarHeaderIsActive: false,
            testActive: true,
            test2Active: false
          }
        },
        methods: {
          toggleSidebar(){
            if(this.sidebarIsActive === true){
              this.sidebarIsActive = false;
              this.sidebarHeaderIsActive = false;
            }else{
              this.sidebarIsActive = true;
            }
          },
          toggleSidebarHeader(){
            if(this.sidebarHeaderIsActive === false && this.sidebarIsActive ===true){
              this.sidebarHeaderIsActive = true;
            }else if(this.sidebarHeaderIsActive === true){
              this.sidebarHeaderIsActive = false;
            }
          }
        }
    });
</script>
    