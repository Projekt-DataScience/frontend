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
          focus:ring-offset-2
          py-2
        "
       
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @click="$emit('buttonClick')"
      >
        <div class="flex text-primary-blue">
          <div class="flex-initial font-semibold">{{name}}</div>
        </div>
      </button>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppButtonTertiary",
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