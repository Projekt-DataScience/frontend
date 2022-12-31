<template>
  <MainHeader></MainHeader>
  <!-- Hier muss das Grid angepasst werden -->
  <div class="grid gap-6 grid-cols-3 m-6">
    <div class="grid gap-6 grid-cols-1 col-span-2">
      <AppContainer container-name="Favoriten">
        <template #content>
          <div v-for="(item, index) in favourites" :key="index">
            <AppListContainer :isLast="getStatus(item, favourites)">
              <template #wrapperLeft>
                <AppIconLibrary v-if="item.available === true" styling="h-10 w-10 text-primary-blue mr-2"
                  :icon="item.icon">
                </AppIconLibrary>
                <AppIconLibrary v-else styling="h-10 w-10 text-gray-400 mr-2" :icon="item.icon"></AppIconLibrary>
              </template>
              <template #wrapperContent>
                <div>
                  {{ item.name }}
                </div>
              </template>
              <template #wrapperRight>
                <router-link :to="{ name: item.routerName }">
                  <AppButtonSecondary v-if="item.available === false" name="Lizenz erwerben" class="mr-6">
                  </AppButtonSecondary>
                  <AppButtonPrimary v-bind:isActive="true" v-else name="Öffnen" class="mr-6"></AppButtonPrimary>
                </router-link>
                <AppButtonOption v-bind:is-vertical="true"> </AppButtonOption>
              </template>
            </AppListContainer>
          </div>
        </template>
      </AppContainer>
      <AppContainer container-name="Anwendungen">
        <template #content>
          <div v-for="(item, index) in apps" :key="index">
            <AppListContainer :isLast="getStatus(item, apps)">
              <template #wrapperLeft>
                <AppIconLibrary v-if="item.available === true" styling="h-10 w-10 text-primary-blue mr-2"
                  :icon="item.icon">
                </AppIconLibrary>
                <AppIconLibrary v-else styling="h-10 w-10 text-gray-400 mr-2" :icon="item.icon"></AppIconLibrary>
              </template>
              <template #wrapperContent>
                <div>
                  {{ item.name }}
                </div>
              </template>
              <template #wrapperRight>
                <router-link :to="{ name: item.routerName }">
                  <AppButtonSecondary v-if="item.available === false" name="Lizenz erwerben" class="mr-6">
                  </AppButtonSecondary>
                  <AppButtonPrimary v-bind:isActive="true" v-else name="Öffnen" class="mr-6"></AppButtonPrimary>
                </router-link>
                <AppButtonOption v-bind:is-vertical="true"> </AppButtonOption>
              </template>
            </AppListContainer>
          </div>
        </template>
      </AppContainer>
    </div>

    <div>
      <AppContainer container-name="Aktuelle Aufgaben">
        <template #header>
          <div class="flex items-center px-6 py-4">
            <div class="text-md font-semibold">Aktuelle Aufgaben</div>
            <div class="flex-auto">
              <div class="flex justify-end items-center">
                <AppButtonTertiary name="Alle anzeigen"></AppButtonTertiary>
              </div>
            </div>
          </div>
        </template>
        <template #content>
          <div v-for="(item, index) in tasks" :key="index">
            <AppListContainer alignement="start" :isLast="getStatus(item, tasks)">
              <template #wrapperLeft>
                <div>
                  <AppIconLibrary styling="h-10 w-10 text-primary-blue mr-2 mt-2 " :icon="item.icon"></AppIconLibrary>
                </div>
              </template>
              <template #wrapperContent>
                <AppTaskList :title="getLongNameForApp(item.app_name)" :text="item.title" :subtext="[
  {
    text: concateStrings('Layer', item.parameter),
  },
  {
    text: new Date(item.date).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  },
]" :action="item.parameter">
                </AppTaskList>
              </template>
              <template #wrapperRight>
                <!-- <LPAQuestionBar :green="22" :orange="22" :red="22"></LPAQuestionBar> -->
                <AppButtonOption class="mt-2" v-bind:isVertical="false"></AppButtonOption>
              </template>
            </AppListContainer>
          </div>
        </template>
      </AppContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "../components/MainHeader.vue";
import {
  AppContainer, AppListContainer, AppButtonOption, AppButtonSecondary, AppIconLibrary,
  AppButtonPrimary, AppTaskList, AppButtonTertiary
} from "../../../libraries/components";


import { useApplications } from "../store/applications";
import { useTasks } from "../../../libraries/stores";
import { Task } from "../../../libraries/interfaces";

import { stringMixin } from "../../../libraries/mixins";

export default defineComponent({
  name: "MainDashboard",
  mixins: [stringMixin.concateStringMixin, stringMixin.changeAppName],
  components: {
    AppButtonOption,
    AppButtonSecondary,
    AppContainer,
    AppListContainer,
    MainHeader,
    AppIconLibrary,
    AppButtonPrimary,
    AppTaskList,
    AppButtonTertiary,
  },
  setup() {
    const applicationStore = useApplications();
    return {
      apps: applicationStore.getApps,
      favourites: applicationStore.getFavourites,
    };
  },
  async mounted() {
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
      tasks: [] as Task[],
      allTasks: [] as Task[],
      maxTasks: 3,
    };
  },
  methods: {
    getStatus(item: any, array: any) {
      if (item === array[array.length - 1]) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>