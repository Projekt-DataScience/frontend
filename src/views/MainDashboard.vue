<template>
    <MainHeader></MainHeader>
    <div class="grid gap-6 grid-cols-3 m-6">
      <div class="grid gap-6 grid-cols-1 col-span-2">
        <AppContainer container-name="Favoriten">
          <template #content>
            <AppListContainer>
              <template #wrapperLeft>
                <AppIconLibrary icon="lpa" styling="h-10 text-primary-blue"></AppIconLibrary>
              </template>
              <template #wrapperContent>
                <div>
                  {{favourite[0].name}}
                </div>
              </template>
              <template #wrapperRight>
                
                <router-link :to="{name : 'LPADashboard'}">
                  <AppButtonSecondary name="Öffnen" class="mr-6"></AppButtonSecondary>
                </router-link>
                <AppButtonOption v-bind:is-vertical="true">
                </AppButtonOption>
              
              </template>
            </AppListContainer>
          </template>
        </AppContainer>
        <AppContainer container-name="Anwendungen">
          <template #content>
            <AppListContainer>
              <template #wrapperLeft>
                <AppIconLibrary icon="lpa" styling="h-10 text-primary-blue"></AppIconLibrary>
              </template>
              <template #wrapperContent>
                <div>
                  {{apps[1].name}}
                </div>
              </template>
              <template #wrapperRight>
                
                <router-link :to="{name : 'LPADashboard'}">
                  <AppButtonSecondary name="Öffnen" class="mr-6"></AppButtonSecondary>
                </router-link>
                <AppButtonOption v-bind:is-vertical="true">
                </AppButtonOption>
              
              </template>
            </AppListContainer>
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
import { defineComponent} from "vue";
import MainHeader from "../components/MainHeader.vue";
import AppContainer from "../components/AppContainer.vue";
import AppListContainer from "../components/AppListContainer.vue";
import AppButtonOption from "../components/AppButtonOption.vue";
import AppButtonSecondary from "../components/AppButtonSecondary.vue";
import AppIconLibrary from "../components/AppIconLibrary.vue";

import { useApplications } from "../store/applications"; 


export default defineComponent({
  name: "MainDashboard",
  components: {
    AppButtonOption,
    AppButtonSecondary,
    AppContainer,
    AppListContainer,
    MainHeader,
    AppIconLibrary
  },
  setup() {
    const store = useApplications();
    console.log(store.$state.apps)
    return { 
      apps:  store.getApps,
      favourite: store.getFavourites
    };
    
  },
  data() {
    return {
      favourites: [
        {
          appName: "Layered Process Audit"
        }
      ],
      applications: [
        {
          appName: "Gerätemanager"
        },
        {
          appName: "Urlaubsplanung"
        }
      ]
     
      
    };
  },
}); 
</script>