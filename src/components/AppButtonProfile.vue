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
          h-12 w-12
        "
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @click="handleProfileToggle()"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-full w-full rounded-full p-2"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
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
          w-52
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
        
        <button @click="handleSettingsToggle()" class="block px-4 py-2 text-sm text-gray-700">
          Einstellungen
        </button>

        <button @click="handleLogoutToggle()" class="block px-4 py-2 text-sm text-gray-700">
          Ausloggen
        </button>

        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import authService from "../services/auth.service";

export default defineComponent({
  name: "AppButtonProfile",
  components: {},
  data() {
    return {
      profileIsActive: false,
    };
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
    handleSettingsToggle(){
      
    },
    handleLogoutToggle(){
      authService.logout();
    }
  },
});
</script>