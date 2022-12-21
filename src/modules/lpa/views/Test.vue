<template>
    <div v-if="dataReady">
        <div>{{test.test2.test3}}</div>
        <div>{{audit['auditor']['id']}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import { useAudit } from "../store/audits";
import { Audit } from "../interfaces/audit";
import { isTemplateNode } from "@vue/compiler-core";
import { User } from "../../../interfaces/user";


export default defineComponent({
  name: "Test",
  components: {
    
  },
  async mounted() {
    const store = useAudit();
    this.audit = store.audit;
    console.log(this.audit.auditor.profile_picture_url)
    this.dataReady = true;
  },
  data() {
    return {
      audit: {} as Audit,
      dataReady: false,
      test:{
        test2:{
            test3: "Test"
        }
      }
    };
  },
  methods: {

  }
}); 
</script>