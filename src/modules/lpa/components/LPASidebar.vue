<template>
  <div>
    <div class="flex flex-grow flex-col overflow-y-auto">
      <!-- App Sidebar Header -->
      <AppSidebarHeader
        brandingName="MyCompany"
        moduleName="Layered Process Audit"
        @toggleSidebar="toggleSidebar()"
        @toggleSidebarHeader="toggleSidebarHeader()"
      >
        <AppIconLibrary icon="lpa"></AppIconLibrary>
      </AppSidebarHeader>
      <!-- App Sidebar Header when toggleSidebarHeader event is true-->
      <div v-if="sidebarHeaderIsActive" class="border-b-2 border-gray-200">
        Test
      </div>
      <div class="flex">
        <div class="flex-initial w-full p-3">
          <!-- Dashboard Navigation Item -->
          <AppNavigationItemActive
            itemName="Übersicht"
            iconName="dashboard"
            v-if="currentPage === 'LPADashboard'"
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Übersicht"
            iconName="dashboard"
            v-else
            routerName="LPADashboard"
          ></AppNavigationItem>
          <!-- Question Navigation Item -->
          <AppNavigationItemActive
            itemName="Fragen"
            iconName="question"
            v-if="currentPage === 'LPAQuestions'"
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Fragen"
            iconName="question"
            v-else
            routerName="LPAQuestions"
          ></AppNavigationItem>
          <!-- History Navigation Item -->
          <AppNavigationItemActive
            itemName="Historie"
            iconName="history"
            v-if="currentPage === 'LPAHistory'"
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Historie"
            iconName="history"
            v-else
            routerName="LPAHistory"
          ></AppNavigationItem>
          <!-- Analytics Navigation Item -->
          <AppNavigationItemActive
            itemName="Analysen"
            iconName="analytics"
            v-if="currentPage === 'LPAAnalytics'"
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Analysen"
            iconName="analytics"
            v-else
            routerName="LPAAnalytics"
          ></AppNavigationItem>
          <!-- Configuration Navigation Item -->
          <AppNavigationItemActive
            itemName="Konfiguration"
            iconName="configuration"
            v-if="currentPage === 'LPAConfiguration'"
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Konfiguration"
            iconName="configuration"
            v-else
            routerName="LPAConfiguration"
          ></AppNavigationItem>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">
import { ref, defineComponent } from "vue";
import AppSidebarHeader from "../../../components/AppSidebarHeader.vue";
import AppNavigationItem from "../../../components/AppNavigationItem.vue";
import AppNavigationItemActive from "../../../components/AppNavigationItemActive.vue";
import AppIconLibrary from "../../../components/AppIconLibrary.vue";

export default defineComponent({
  name: "LPASidebar",
  components: {
    AppSidebarHeader,
    AppNavigationItem,
    AppNavigationItemActive,
    AppIconLibrary,
  },
  props: {
    currentPage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sidebarIsActive: true,
      sidebarHeaderIsActive: false,
      testActive: true,
      test2Active: false,
    };
  },
  methods: {
    toggleSidebar() {
      if (this.sidebarIsActive === true) {
        this.sidebarIsActive = false;
        this.sidebarHeaderIsActive = false;
      } else {
        this.sidebarIsActive = true;
      }
    },
    toggleSidebarHeader() {
      if (
        this.sidebarHeaderIsActive === false &&
        this.sidebarIsActive === true
      ) {
        this.sidebarHeaderIsActive = true;
      } else if (this.sidebarHeaderIsActive === true) {
        this.sidebarHeaderIsActive = false;
      }
    },
  },
});
</script>
    