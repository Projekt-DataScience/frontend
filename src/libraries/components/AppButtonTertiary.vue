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
        @click='passEvent'
      >
        <div v-if="isActive" class="flex text-primary-blue">
          <div class="flex-initial font-semibold">{{name}}</div>
        </div>
        <div v-else class="flex text-gray-400">
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
    id: {
      type: Number,
      required: false,
      default: null
    },
    isActive: {
      type: Boolean,
      required: false,
      default: true
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
    passEvent(){
      this.$emit('buttonClick',this.id)
    }
  },
});
</script>