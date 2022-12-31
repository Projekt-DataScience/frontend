<template>
  <!-- Profile dropdown -->
  <div class="relative group">
    <div>
      <button
        type="button"
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
          h-12
          w-12
        "
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @click="handleProfileToggle()"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-full w-full rounded-full p-2"
          :src="user.profile_picture_url"
          alt="Profile Picture"
        />
      </button>
    </div>
    <div
      class="
        absolute
        right-0
        hidden
        group-hover:block
        z-10
        w-96
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
      :class="getActiveStatus(profileIsActive)"
    >
      <div class="">
        <!-- Active: "bg-gray-100", Not Active: "" -->
        <div class="px-6 py-6">
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
            <AppIconLibrary styling="h-7 w-7" icon="logout"></AppIconLibrary>
            <div class="ml-4 text-sm font-semibold">Ausloggen</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import authService from "../services/authService";
import AppButtonThemeToggle from "./AppButtonThemeToggle.vue";
import AppIconLibrary from "./AppIconLibrary.vue";
import { User } from "../interfaces/user";
import { useUser } from "../stores/user";

export default defineComponent({
  name: "AppButtonProfile",
  components: { AppButtonThemeToggle, AppIconLibrary },
  data() {
    return {
      profileIsActive: false,
      user: {} as User,
    };
  },
  async mounted() {
    const taskStore = useUser();
    await taskStore.fetchUser();
    this.user = taskStore.user;
  },
  methods: {
    handleProfileToggle() {
      if (this.profileIsActive === true) {
        this.profileIsActive = false;
      } else {
        this.profileIsActive = true;
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