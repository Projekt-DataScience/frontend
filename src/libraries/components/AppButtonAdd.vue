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
        <div class="flex text-gray-500 items-center">
            <div class="h-8 w-8 rounded-full border-2 border-gray-500 flex items-center justify-center p-2">
                <AppIconLibrary icon="plus"></AppIconLibrary>
            </div>
          <div class="font-semibold pl-2">{{name}}</div>
        </div>
      </button>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { AppIconLibrary } from "../components"; 

export default defineComponent({
  name: "AppButtonAdd",
  components: { AppIconLibrary },
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