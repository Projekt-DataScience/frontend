<template>
  <div>
    <!-- App Sidebar Header -->
    <AppSidebar :toggleIsActive="isActive">
      <template #sidebarHeader>
        <AppSidebarHeader brandingName="MyCompany" moduleName="Layered Process Audit"
          v-on:toggleSidebar="handleSidebarToggle($event)">
          <AppIconLibrary icon="lpa"></AppIconLibrary>
        </AppSidebarHeader>
      </template>
      <template #navigationItems>
        <!-- Dashboard Navigation Item -->
        <AppNavigationItemActive itemName="Übersicht" iconName="dashboard" :toggleIsActive="getToggleStatus()"
          v-if="currentPage === 'LPADashboard'"></AppNavigationItemActive>
        <AppNavigationItem itemName="Übersicht" iconName="dashboard" :toggleIsActive="getToggleStatus()" v-else
          routerName="LPADashboard"></AppNavigationItem>
        <!-- Question Navigation Item -->
        <AppNavigationItemActive itemName="Fragen" iconName="question" :toggleIsActive="getToggleStatus()"
          v-if="currentPage === 'LPAQuestions'"></AppNavigationItemActive>
        <AppNavigationItem itemName="Fragen" iconName="question" :toggleIsActive="getToggleStatus()" v-else
          routerName="LPAQuestions"></AppNavigationItem>
        <!-- History Navigation Item -->
        <AppNavigationItemActive itemName="Historie" iconName="history" :toggleIsActive="getToggleStatus()"
          v-if="currentPage === 'LPAHistory'"></AppNavigationItemActive>
        <AppNavigationItem itemName="Historie" iconName="history" :toggleIsActive="getToggleStatus()" v-else
          routerName="LPAHistory"></AppNavigationItem>
        <!-- Analytics Navigation Item -->
        <AppNavigationItemActive itemName="Analysen" iconName="analytics" :toggleIsActive="getToggleStatus()"
          v-if="currentPage === 'LPAAnalytics'"></AppNavigationItemActive>
        <AppNavigationItem itemName="Analysen" iconName="analytics" :toggleIsActive="getToggleStatus()" v-else
          routerName="LPAAnalytics"></AppNavigationItem>
        <!-- Configuration Navigation Item -->
        <AppNavigationItemActive itemName="Konfiguration" iconName="configuration" :toggleIsActive="getToggleStatus()"
          v-if="currentPage === 'LPAConfiguration'"></AppNavigationItemActive>
        <AppNavigationItem itemName="Konfiguration" iconName="configuration" :toggleIsActive="getToggleStatus()" v-else
          routerName="LPAConfiguration"></AppNavigationItem>
      </template>
    </AppSidebar>
  </div>
</template>
    
<script lang="ts">
import { ref, defineComponent } from "vue";
import {
  AppSidebarHeader, 
  AppNavigationItem, 
  AppNavigationItemActive, 
  AppIconLibrary, 
  AppSidebar
} from "../../../libraries/components";


export default defineComponent({
  name: "LPASidebar",
  components: {
    AppSidebarHeader,
    AppNavigationItem,
    AppNavigationItemActive,
    AppIconLibrary,
    AppSidebar,
  },
  props: {
    currentPage: {
      type: String,
      required: true,
    },
  },
  emits: {
    toggleSidebar: null,
  },
  data() {
    var storageToggleSidebar = JSON.parse(
      localStorage.getItem("toggleSidebarStatus") || "{}"
    );

    if (JSON.stringify(storageToggleSidebar) === '{}') {
      // object is empty
      localStorage.setItem('toggleSidebarStatus', JSON.stringify(this.isActive));
    } else {
      // storage object exists
      this.isActive = storageToggleSidebar;
    }
    return {
      isActive: storageToggleSidebar
    };
  },
  methods: {
    handleSidebarToggle(event: boolean) {
      this.isActive = event;
      this.$emit("toggleSidebar", this.isActive);
    },
    getToggleStatus() {
      return this.isActive
    }
  },
});
</script>
    