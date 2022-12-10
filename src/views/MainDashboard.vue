<template>
  <MainHeader></MainHeader>
  <div class="grid gap-6 grid-cols-3 m-6">
    <div class="grid gap-6 grid-cols-1 col-span-2">
      <AppContainer container-name="Favoriten">
        <template #content>
          <div v-for="(item, index) in favourites" :key="index">
            <AppListContainer :isLast="getStatus(item, favourites)">
              <template #wrapperLeft>
                <AppIconLibrary v-if="(item.available === true)" styling="h-9 w-9 text-primary-blue mr-2" :icon="item.icon">
                </AppIconLibrary>
                <AppIconLibrary v-else styling="h-9 w-9 text-gray-400 mr-2" :icon="item.icon"></AppIconLibrary>
              </template>
              <template #wrapperContent>
                <div>
                  {{ item.name }}
                </div>
              </template>
              <template #wrapperRight>

                <router-link :to="{ name: item.routerName }">
                  <AppButtonSecondary v-if="(item.available === false)" name="Lizenz erwerben" class="mr-6"></AppButtonSecondary>
                  <AppButtonPrimary v-bind:isActive="true" v-else name="Öffnen" class="mr-6"></AppButtonPrimary>
                </router-link>
                <AppButtonOption v-bind:is-vertical="true">
                </AppButtonOption>

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
                <AppIconLibrary v-if="(item.available === true)" styling="h-9 w-9 text-primary-blue mr-2" :icon="item.icon">
                </AppIconLibrary>
                <AppIconLibrary v-else styling="h-9 w-9 text-gray-400 mr-2" :icon="item.icon"></AppIconLibrary>
              </template>
              <template #wrapperContent>
                <div>
                  {{ item.name }}
                </div>
              </template>
              <template #wrapperRight>

                <router-link :to="{ name: item.routerName }">
                  <AppButtonSecondary v-if="(item.available === false)" name="Lizenz erwerben" class="mr-6"></AppButtonSecondary>
                  <AppButtonPrimary v-bind:isActive="true" v-else name="Öffnen" class="mr-6"></AppButtonPrimary>
                </router-link>
                <AppButtonOption v-bind:is-vertical="true">
                </AppButtonOption>

              </template>
            </AppListContainer>
          </div>
        </template>
      </AppContainer>
    </div>
    <div>
      <AppContainer container-name="Aktuelle Aufgaben">
      </AppContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "../components/MainHeader.vue";
import AppContainer from "../components/AppContainer.vue";
import AppListContainer from "../components/AppListContainer.vue";
import AppButtonOption from "../components/AppButtonOption.vue";
import AppButtonSecondary from "../components/AppButtonSecondary.vue";
import AppIconLibrary from "../components/AppIconLibrary.vue";
import AppButtonPrimary from "../components/AppButtonPrimary.vue";

import { useApplications } from "../store/applications";


export default defineComponent({
  name: "MainDashboard",
  components: {
    AppButtonOption,
    AppButtonSecondary,
    AppContainer,
    AppListContainer,
    MainHeader,
    AppIconLibrary,
    AppButtonPrimary
  },
  setup() {
    const store = useApplications();
    console.log(store.$state.apps);
    console.log(store.getFavourites);
    return {
      apps: store.getApps,
      favourites: store.getFavourites
    };

  },
  data() {
    return {

    };
  },
  methods: {
    getStatus(item: any, array: any) {
      if (item === array[array.length - 1]) {
        return true
      } else {
        return false
      }
    }
  }
}); 
</script>