<template>
  <div class="flex items-center h-full w-full">
    <div class="flex-initial">
      <form class="flex w-34 ml-4" action="#" method="GET">
        <label for="search-field" class="sr-only">Search</label>
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
            placeholder="Search"
            type="search"
            name="search"
          />
        </div>
      </form>
    </div>
    <div class="flex-auto">
        <div class="flex justify-end mr-4">
            <div class="ml-4 flex items-center md:ml-5">
            <!-- Image upload -->
            <div class="relative mr-6">
              <div>
                <button
                  type="button"
                  class="
                    flex
                    max-w-xs
                    items-center
                    rounded-md
                    bg-primary-blue
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary-blue
                    focus:ring-offset-2
                    pl-3
                    pr-4
                    py-2
                  "
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="handleUploadToggle()"
                >
                  <div class="flex text-white">
                    <AppPlusIcon class="mr-2 p-0.5"></AppPlusIcon>
                    <div class="flex-initial font-medium">
                      Audit erstellen
                    </div>
                  </div>
                </button>
              </div>

              <div
                class="
                  hidden
                  absolute
                  right-0
                  z-10
                  mt-2
                  w-96
                  origin-top-right
                  rounded-md
                  bg-white
                  p-3
                  shadow-lg
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
                v-bind:class="{ active: uploadIsActive }"
              >
                <ImageUpload></ImageUpload>
                 
              </div>
            </div>

            <button
              type="button"
              class="
                rounded-full
                bg-white
                p-1
                text-gray-400
                hover:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-primary-blue
                focus:ring-offset-2
                my-2
              "
            >
              <span class="sr-only">View notifications</span>
              <AppBellIcon class="h-6 w-6 text-gray-400"></AppBellIcon>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-5">
              <div>
                <button
                  type="button"
                  class="
                    flex
                    max-w-xs
                    items-center
                    rounded-full
                    bg-white
                    text-sm
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary-blue
                    focus:ring-offset-2
                  "
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="handleProfileToggle()"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <div
                class="
                  hidden
                  absolute
                  right-0
                  z-10
                  mt-2
                  w-48
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
                v-bind:class="{ active: profileIsActive }"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your Profile</a
                >

                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Settings</a
                >

                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
    
  <script lang="ts">
import { ref, defineComponent } from "vue";
import AppBellIcon from "../assets/Icons/AppBellIcon.vue"
import AppPlusIcon from "../assets/Icons/AppPlusIcon.vue"

export default defineComponent({
  name: "AppSearchAndFilterBar",
  components: {
    AppBellIcon,
    AppPlusIcon
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