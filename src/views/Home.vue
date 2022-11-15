<template>
    <h1>Home!!</h1>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import Test from './Test.vue'
import router from '../router/index';

export default defineComponent({
  name: "Home",
  components: {
    
  },
  data() {
    return {
      
    };
  },
  mounted() {
    router.addRoute({
        name: "dynamic",
        path: "/dynamic",
        component: () => import("/src/views/Test.vue")
    });
    //router.replace(router.currentRoute.value.fullPath);
    //this.$router.push('/dynamic');
  },
}); 
</script>