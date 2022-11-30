<template>
  <div class="flex items-center h-full w-full">
    <div class="flex-initial">
      <form class="flex w-34 ml-4" action="#" method="GET">
        <label for="search-field" class="sr-only">Suche</label>
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <div
            class="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              flex
              items-center
            "
          >
            <!-- Heroicon name: mini/magnifying-glass -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            id="search-field"
            class="
              block
              h-full
              w-full
              border-transparent
              py-2
              pl-8
              pr-3
              text-gray-900
              placeholder-gray-500
              focus:border-transparent
              focus:placeholder-gray-400
              focus:outline-none
              focus:ring-0
              sm:text-sm
            "
            placeholder="Suche"
            type="search"
            name="search"
          />
        </div>
      </form>
    </div>
    <div class="flex-auto">
        <div class="flex justify-end mr-4">
            <div class="ml-4 flex items-center md:ml-5">
            <AppButtonPrimary class="mr-6" name="Audit erstellen" v-bind:isActive="true">
              <template #icon>
                <AppPlusIcon class="mr-2 pr-0.5 py-0.5"></AppPlusIcon>
              </template>
            </AppButtonPrimary>
            <!--Notification Button-->
            <AppButtonNotification>
              <template #icon>
                <AppBellIcon class="h-6 w-6 text-gray-400"></AppBellIcon>
              </template>
            </AppButtonNotification>

            <!-- Profile dropdown -->
            <AppButtonProfile class="ml-5 mr-5"></AppButtonProfile>
          </div>
        </div>
    </div>
  </div>
</template>
    
  <script lang="ts">
import { ref, defineComponent } from "vue";
import AppBellIcon from "../assets/Icons/AppBellIcon.vue"
import AppPlusIcon from "../assets/Icons/AppPlusIcon.vue"
import AppButtonPrimary from "./AppButtonPrimary.vue";
import AppButtonProfile from "./AppButtonProfile.vue";
import AppButtonNotification from "./AppButtonNotification.vue";

export default defineComponent({
  name: "AppSearchAndFilterBar",
  components: {
    AppBellIcon,
    AppPlusIcon,
    AppButtonPrimary,
    AppButtonProfile,
    AppButtonNotification
  },
  data() {
    return {
      profileIsActive: false,
      uploadIsActive: false,
    };
  },
  methods: {
    handleProfileToggle() {
      this.profileIsActive = !this.profileIsActive;
    },
    handleUploadToggle() {
      this.uploadIsActive = !this.uploadIsActive;
    },
  },
});
</script>