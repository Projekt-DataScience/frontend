<template>
  <label class="block text-base text-gray-500">{{ headline }}</label>
  <select
    id="country"
    name="country"
    autocomplete="country-name"
    class="
      block
      w-full
      max-w-lg
      rounded-md
      border-2 border-gray-300
      shadow-sm
      focus:border-indigo-500 focus:ring-indigo-500
      sm:max-w-xs sm:text-sm
      mt-1
    "
    @change="updateValue()"
  >
    <option value="United States">United States</option>
    <option value="Canada">Canada</option>
    <option value="Mexico">Mexico</option>
  </select>
</template>



<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "AppInputDropdown",
  components: {},
  props: {
    headline: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue() {
      this.$emit("input", this.value);
    },
  },
});
</script>