<template>
  <div class="relative group">
    <button type="button" class="
        rounded-full
        p-1
        text-gray-400
        hover:text-gray-500
        focus:outline-none
        focus:ring-2
        focus:ring-primary-blue
        focus:ring-offset-2
        my-2
      " id="user-notification-button" aria-expanded="false" aria-haspopup="true" @click="handleNotificationToggle()">
      <span class="sr-only">View notifications</span>
      <div class="flex items-center">
        <AppIconLibrary icon="bell" styling="h-7 text-gray-400"></AppIconLibrary>
        <div class="text-lg font-semibold ml-2 text-primary-blue">{{ allTasks.length }}</div>
      </div>
    </button>
    <div class="
        absolute
        right-0
        block
        group-hover:block
        z-10
        w-128
        origin-top-right
        rounded-md
        bg-white
        shadow-lg
        ring-1 ring-black ring-opacity-5
        focus:outline-none
        pb-6
      " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"
      :class="getActiveStatus(buttonIsActive)">
      <div class="flex items-center border-b-2 border-gray-200 px-6 py-4 mb-4">
        <div class="text-md font-semibold">Aktuelle Aufgaben</div>
        <div class="flex-auto">
          <div class="flex justify-end items-center">
            <AppButtonTertiary name="Alle anzeigen"></AppButtonTertiary>
          </div>
        </div>
      </div>
      <div v-for="(item, index) in tasks" :key="index">
        <AppListContainer alignement="start" :isLast="getStatus(item, tasks)">
          <template #wrapperLeft>
            <div>
              <AppIconLibrary styling="h-10 w-10 text-primary-blue mr-2 mt-2 ml-6" :icon="item.icon"></AppIconLibrary>
            </div>
          </template>
          <template #wrapperContent>
            <AppTaskList :title="getLongNameForApp(item.app_name)" :text="item.title" :showButton="false" :subtext="[
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
            <AppButtonOption class="mt-2 mr-6" v-bind:isVertical="false"></AppButtonOption>
          </template>
        </AppListContainer>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { ref, defineComponent } from "vue";
import AppIconLibrary from "./AppIconLibrary.vue";
import { useTasks } from "../stores/tasks"; 
import { Task } from "../interfaces/task";

import { concateStringMixin, changeAppName } from "../mixins/stringMixin";
import AppTaskList from "./AppTaskList.vue";
import AppListContainer from "./AppListContainer.vue";
import AppButtonOption from "./AppButtonOption.vue";
import AppButtonTertiary from "./AppButtonTertiary.vue";

export default defineComponent({
  name: "AppButtonNotification",
  mixins: [concateStringMixin, changeAppName],
  components: {
    AppIconLibrary,
    AppTaskList,
    AppListContainer,
    AppButtonOption,
    AppButtonTertiary,
  },
  data() {
    return {
      buttonIsActive: false,
      tasks: [] as Task[],
      allTasks: [] as Task[],
      maxTasks: 3,
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
  methods: {
    handleNotificationToggle() {
      if (this.buttonIsActive === true) {
        this.buttonIsActive = false;
      } else {
        this.buttonIsActive = true;
      }
    },
    getActiveStatus(isActive: Boolean) {
      if (isActive) {
        return "block";
      } else {
        return "hidden";
      }
    },
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