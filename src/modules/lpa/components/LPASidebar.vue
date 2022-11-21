<template>
  <div>
    <div
      class="flex flex-grow flex-col overflow-y-auto"
    >
      <!-- App Sidebar Header -->
      <AppSidebarHeader
        brandingName="MyCompany"
        moduleName="Layered Process Audit"
        @toggleSidebar="toggleSidebar()"
        @toggleSidebarHeader="toggleSidebarHeader()"
      >
      <LPAIcon></LPAIcon>
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
            v-if="currentPage === 'LPADashboard'"
            ><LPADashboard></LPADashboard
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Übersicht"
            v-else
            routerName="LPADashboard"
            ><LPADashboard></LPADashboard
          ></AppNavigationItem>
          <!-- Question Navigation Item -->
          <AppNavigationItemActive
            itemName="Fragen"
            v-if="currentPage === 'LPAQuestions'"
            ><LPAQuestionIcon></LPAQuestionIcon
          ></AppNavigationItemActive>
          <AppNavigationItem itemName="Fragen" v-else routerName="LPAQuestions"
            ><LPAQuestionIcon></LPAQuestionIcon
          ></AppNavigationItem>
          <!-- History Navigation Item -->
          <AppNavigationItemActive
            itemName="Historie"
            v-if="currentPage === 'LPAHistory'"
            ><LPAHistoryIcon></LPAHistoryIcon
          ></AppNavigationItemActive>
          <AppNavigationItem itemName="Historie" v-else routerName="LPAHistory"
            ><LPAHistoryIcon></LPAHistoryIcon
          ></AppNavigationItem>
          <!-- Analytics Navigation Item -->
          <AppNavigationItemActive
            itemName="Analysen"
            v-if="currentPage === 'LPAAnalytics'"
            ><LPAAnalyticsIcon></LPAAnalyticsIcon
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Analysen"
            v-else
            routerName="LPAAnalytics"
            ><LPAAnalyticsIcon></LPAAnalyticsIcon
          ></AppNavigationItem>
          <!-- Configuration Navigation Item -->
          <AppNavigationItemActive
            itemName="Konfiguration"
            v-if="currentPage === 'LPAConfiguration'"
            ><LPAConfigurationIcon></LPAConfigurationIcon
          ></AppNavigationItemActive>
          <AppNavigationItem
            itemName="Konfiguration"
            v-else
            routerName="LPAConfiguration"
            ><LPAConfigurationIcon></LPAConfigurationIcon
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
import LPADashboard from "../../../assets/Icons/LPADashboard.vue";
import LPAQuestionIcon from "../../../assets/Icons/LPAQuestionIcon.vue";
import LPAHistoryIcon from "../../../assets/Icons/LPAHistoryArrowIcon.vue";
import LPAConfigurationIcon from "../../../assets/Icons/LPAConfigurationIcon.vue";
import LPAAnalyticsIcon from "../../../assets/Icons/LPAAnalyticsIcon.vue";
import LPAIcon from "../../../assets/Icons/LPAIcon.vue";

export default defineComponent({
  name: "LPASidebar",
  components: {
    AppSidebarHeader,
    AppNavigationItem,
    LPADashboard,
    AppNavigationItemActive,
    LPAQuestionIcon,
    LPAHistoryIcon,
    LPAConfigurationIcon,
    LPAAnalyticsIcon,
    LPAIcon
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
    