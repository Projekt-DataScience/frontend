<template>
    <div v-for="item in listItems" :key="item.id" class="grid grid-cols-1">
      <div
        class="grid grid-cols-10"
      >
        <div class="col-span-8">
          <div class="flex">
            <div class="flex items-center justify-start"><slot name="wrapperLeft"></slot></div>
            <div class="flex-initial">
              <div class="text-md font-base">{{item.name}}</div>
              <div class="flex items-center text-gray-400 pt-1 font-base">
                <div v-for="list in item.listItems" :key="list.id">
                  <AppTextWithDividerLine v-bind:isLast="false" :text="list.name" v-if="list.id < item.listItems.length - 1"></AppTextWithDividerLine>
                  <AppTextWithDividerLine v-bind:isLast="true" :text="list.name" v-else></AppTextWithDividerLine>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2 flex items-center justify-end">
          <slot name="wrapperRight"></slot>
        </div>
      </div>
      <div
        class="border-b-2 border-gray-200 mb-4 mt-4"
        v-if="item.id < listItems.length - 1"
      ></div>
    </div>
  </template>
      
  <script lang="ts">
  import { ref, defineComponent } from "vue";
  import AppTextWithDividerLine from "./AppTextWithDividerLine.vue";
  
  export default defineComponent({
    name: "AppItemList",
    components: {
      AppTextWithDividerLine
    },
    emits: {
      toggleSidebar: null,
      toggleSidebarHeader: null,
    },
    props: {
      listItems: {
        type: Object,
        required: true,
      },
    },
    methods: {},
  });
  </script>