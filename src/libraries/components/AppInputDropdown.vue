<template>
  <!--<label class="block text-base text-gray-500">{{ headline }}</label>
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
  </select>-->
  <label v-if="headline" class="block text-base text-gray-500">{{ headline }}</label>
  <select @change="updateValue($event)" v-model="selectedOption" class="
      block
      w-full
      max-w-lg
      rounded-md
      border-2 border-gray-300
      shadow-sm
      focus:border-primary-blue focus:ring-primary-blue
      sm:max-w-xs sm:text-sm
      mt-1
    ">
    <option v-if="initialOption" :value="null">{{initialOption}}</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.id"
    >{{option.description}}</option>
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
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    initialOption: {
      type: String,
      required: false
    },
    currentValue: {
      type: String,
      required: true
    }
  },
  emits: {
    input: null,
  },
  data() {
    return {
      selectedOption: this.getSelectedOption(),
      isLoaded: false
    }
  },
  /*data() {
    return {
      value: "test",
      colors: [
        {
          options: ["red", "yellow", "green"],
          selectedOption: "null",
        },
      ],
    };
  },*/
  methods: {
    updateValue(event: any) {
      this.$emit("input", event.target.value);
    },
    getSelectedOption(){
      if(this.currentValue === ""){
        return "null"
      }else{
        return this.currentValue
      }
    }
  },
});
</script>