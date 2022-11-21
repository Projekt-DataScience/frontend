<template>
  <div class="relative">
    <div v-if="isActive">
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
          pl-4
          pr-4
          py-2
        "
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @click="$emit('buttonClick')"
      >
        <div class="flex text-white">
          <div><slot name="icon" v-if="hasIconSlot()"></slot></div>
          <div class="flex-initial font-medium">Audit erstellen</div>
        </div>
      </button>
    </div>
    <div v-else>
      <button
        type="button"
        class="
          flex
          max-w-xs
          items-center
          rounded-md
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-primary-blue
          border-2 border-gray-200
          focus:ring-offset-2
          pl-4
          pr-4
          py-2
        "
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @click="$emit('buttonClick')"
      >
        <div class="flex text-gray-400">
          <div><slot name="icon" v-if="hasIconSlot()"></slot></div>
          <div class="flex-initial font-medium">{{name}}</div>
        </div>
      </button>
    </div>
  </div>
</template>
      
      <script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppButtonPrimary",
  components: {},
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  emits: {
    buttonClick: null
  },
  data() {
    return {

    };
  },
  methods: {

    hasIconSlot() {
      return !!this.$slots.icon;
    },
  },
});
</script>