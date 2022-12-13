<template>
    <div>{{audit['auditor']['id']}}</div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import { useAudit } from "../store/audit";
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
  },
  data() {
    return {
      audit: {} as Audit,
    };
  },
}); 
</script>