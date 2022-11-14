<template>
    <h1>Home!!</h1>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: "ProjectsDashboard",
  components: {
    
  },
  data() {
    return {
      
    };
  },
  mounted() {
    this.$router.addRoute({
        name: "dynamic",
        path: "/dynamic",
        component: () => import("../modules/lpa/views/Home.vue")
    })
  },
}); 
</script>