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
          <div class="fixed z-40 bottom-0 items-end group">
            <button
              type="button"
              class="
                rounded-xl
                p-1
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-primary-blue
                focus:ring-offset-2
                my-3
                w-full
                border-2 border-gray-300
                group-hover:border-gray-500
              "
              id="user-dual-button"
              aria-expanded="false"
              aria-haspopup="true"
              @click="handleDualButton()"
            >
              <div
                class="
                  flex
                  max-w-xs
                  items-center
                  rounded-full
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary-blue
                  focus:ring-offset-2
                "
                :style="`width: ${width}px !important;`"
              >
                <span class="sr-only">Open dual menu</span>
                <div class="flex items-center w-full">
                  <img
                    class="h-12 w-12 rounded-full p-2"
                    :src="user.profile_picture_url"
                    alt="Profile Picture"
                  />
                  <div class="text-sm font-medium">
                    {{ concateStrings(user.first_name, user.last_name) }}
                  </div>
                  <div class="flex-auto ml-4">
                    <div class="flex justify-end items-center mr-1">
                      <div
                        class="
                          flex
                          rounded-xl
                          border-2 border-gray-300
                          group-hover:border-gray-500
                          px-3
                          py-1
                        "
                      >
                        <AppIconLibrary icon="bell"></AppIconLibrary>
                        <div
                          class="text-lg font-semibold ml-2 text-primary-blue"
                        >
                          {{ allTasks.length }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <div
              class="
                absolute
                bottom-0
                mb-20
                hidden
                group-hover:block
                z-30
                w-128
                origin-top-right
                rounded-md
                bg-white
                py-1
                shadow-lg
                ring-1 ring-black ring-opacity-5
                focus:outline-none
              "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
              :class="getActiveStatus(dualIsActive)"
            >
              <div class="">
                <div
                  class="
                    flex
                    items-center
                    border-b-2 border-gray-200
                    px-6
                    py-4
                    mb-4
                  "
                >
                  <div class="text-md font-semibold">Aktuelle Aufgaben</div>
                  <div class="flex-auto">
                    <div class="flex justify-end items-center">
                      <AppButtonTertiary
                        name="Alle anzeigen"
                      ></AppButtonTertiary>
                    </div>
                  </div>
                </div>
                <div v-for="(item, index) in tasks" :key="index">
                  <AppListContainer
                    alignement="start"
                    :isLast="false"
                  >
                    <template #wrapperLeft>
                      <div>
                        <AppIconLibrary
                          styling="h-10 w-10 text-primary-blue mr-2 mt-2 ml-6"
                          :icon="item.icon"
                        ></AppIconLibrary>
                      </div>
                    </template>
                    <template #wrapperContent>
                      <AppTaskList
                        :title="getLongNameForApp(item.app_name)"
                        :text="item.title"
                        :showButton="false"
                        :subtext="[
                          {
                            text: concateStrings('Layer', item.parameter),
                          },
                          {
                            text: new Date(item.date).toLocaleDateString(
                              'de-DE',
                              {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              }
                            ),
                          },
                        ]"
                        :action="item.parameter"
                      >
                      </AppTaskList>
                    </template>
                    <template #wrapperRight>
                      <!-- <LPAQuestionBar :green="22" :orange="22" :red="22"></LPAQuestionBar> -->
                      <AppButtonOption
                        class="mt-2 mr-6"
                        v-bind:isVertical="false"
                      ></AppButtonOption>
                    </template>
                  </AppListContainer>
                </div>

                <!-- Active: "bg-gray-100", Not Active: "" -->
                <div class="px-6 pb-6 pt-2 w-96">
                  <AppButtonThemeToggle></AppButtonThemeToggle>
                </div>

                <button
                  @click="handleSettingsToggle()"
                  class="block px-6 text-sm text-gray-700"
                >
                  <div class="flex items-center text-gray-400">
                    <AppIconLibrary
                      styling="h-7 w-7"
                      icon="configuration"
                    ></AppIconLibrary>
                    <div class="ml-4 text-sm font-semibold">Einstellungen</div>
                  </div>
                </button>

                <button
                  @click="handleLogoutToggle()"
                  class="block px-6 mb-6 mt-4 text-sm text-gray-700"
                >
                  <div class="flex items-center text-gray-400">
                    <AppIconLibrary
                      styling="h-7 w-7"
                      icon="logout"
                    ></AppIconLibrary>
                    <div class="ml-4 text-sm font-semibold">Ausloggen</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
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
import { User } from "../../../interfaces/user";
import { useUser } from "../../../store/user";
import AppButtonThemeToggle from "../../../components/AppButtonThemeToggle.vue";
import authService from "../../../services/auth.service";
import { useTasks } from "../../../store/tasks"; 
import { Task } from "../../../interfaces/task"; 

import { concateStringMixin, changeAppName } from "../../../mixins/stringMixin";
import { getIsLast } from "../../../mixins/arrayMixin";
import AppTaskList from "../../../components/AppTaskList.vue";
import AppListContainer from "../../../components/AppListContainer.vue";
import AppButtonOption from "../../../components/AppButtonOption.vue";
import AppButtonTertiary from "../../../components/AppButtonTertiary.vue";

export default defineComponent({
  name: "LPASidebar",
  components: {
    AppSidebarHeader,
    AppNavigationItem,
    AppNavigationItemActive,
    AppIconLibrary,
    AppButtonThemeToggle,
    AppTaskList,
    AppListContainer,
    AppButtonOption,
    AppButtonTertiary
  },
  mixins: [concateStringMixin, changeAppName, getIsLast],
  props: {
    currentPage: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    const userStore = useUser();
    await userStore.fetchUser();
    this.user = userStore.user;
    this.addSidebarResizeListener();
    this.changeDualButtonWidth();
    const taskStore = useTasks();
    await taskStore.fetchTasks();
    this.allTasks = taskStore.getTasks;
    if (this.allTasks.length > this.maxTasks) {
      for (let i = 0; i < this.maxTasks; i++) {
        this.tasks.push(this.allTasks[i]);
      }
    } else {
      this.tasks = this.allTasks;
    }
  },
  data() {
    return {
      sidebarIsActive: true,
      sidebarHeaderIsActive: false,
      testActive: true,
      test2Active: false,
      user: {} as User,
      width: 0,
      dualIsActive: false,
      tasks: [] as Task[],
      allTasks: [] as Task[],
      maxTasks: 3,
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
    handleDualButton() {
      if (this.dualIsActive === true) {
        this.dualIsActive = false;
      } else {
        this.dualIsActive = true;
      }
    },
    addSidebarResizeListener() {
      const element = document.getElementById("sidebar");
      if (element) {
        const resize = new ResizeObserver(() => {
          this.changeDualButtonWidth();
        });
        resize.observe(element);
      }
    },
    changeDualButtonWidth() {
      const element = document.getElementById("sidebar");
      if (element instanceof HTMLElement) {
        const calculatedWidth = element.offsetWidth - 36;
        this.width = calculatedWidth;
      }
    },
    getActiveStatus(isActive: Boolean) {
      if (isActive) {
        return "block";
      } else {
        return "hidden";
      }
    },
    handleSettingsToggle() {},
    handleLogoutToggle() {
      authService.logout();
      this.$router.push("/Login");
    },
  },
});
</script>
    