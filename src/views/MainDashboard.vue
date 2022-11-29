<template>
    <MainHeader></MainHeader>
    <div class="grid gap-6 grid-cols-3 m-6">
      <div class="grid gap-6 grid-cols-1 col-span-2">
        <AppContainer container-name="Favoriten">
          <template #content>
            <AppItemList>
              <template #wrapperLeft>
                <AppLPAIcon class="h-10"></AppLPAIcon>
              </template>
              <template #wrapperContent>
                <div>
                  {{favourites[0].appName}}
                </div>
              </template>
              <template #wrapperRight>
                
                <router-link :to="{name : 'LPADashboard'}">
                  <AppButtonSecondary name="Öffnen" class="mr-6"></AppButtonSecondary>
                </router-link>
                <AppButtonOption v-bind:is-vertical="true">
                </AppButtonOption>
              
              </template>
            </AppItemList>
          </template>
        </AppContainer>
        <AppContainer container-name="Anwendungen">
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
import AppItemList from "../components/AppItemList.vue";
import AppButtonOption from "../components/AppButtonOption.vue";
import AppButtonSecondary from "../components/AppButtonSecondary.vue";
import AppLPAIcon from "../assets/Icons/AppLPAIcon.vue";

export default defineComponent({
  name: "MainDashboard",
  components: {
    AppButtonOption,
    AppButtonSecondary,
    AppContainer,
    AppItemList,
    AppLPAIcon,
    MainHeader
  },
  data() {
    return {
      favourites: [
        {
          id: 0,
          appName: "Layered Process Audit"
        }
      ],
      applications: [
        {
          id: 0,
          appName: "Gerätemanager"
        },
        {
          id: 1,
          appName: "Urlaubsplanung"
        }
      ]
      
    };
  },
}); 
</script>