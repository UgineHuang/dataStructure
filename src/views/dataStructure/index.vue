<template>
  <div>
    dataStructure
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { format1 } from '@/utils/dataStructure/thousand-format';

@Component
export default class DataStructure extends Vue {


  created() {
    console.log(format1(123400))
  }

  // beforeDestroy() {
  // }
}
</script>
