<template>
    <div>
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
        <div class="flex text-black">
          <div class="flex-initial font-medium">{{name}}</div>
        </div>
      </button>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppButtonSecondary",
  components: {},
  props: {
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
    
  },
});
</script>