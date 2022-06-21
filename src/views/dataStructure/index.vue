<template>
  <div>
    dataStructure
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import {findContinuesChart1} from "@/utils/dataStructure/continuesChart"

@Component
export default class DataStructure extends Vue {


  created() {
    const str = 'avcdeeeeee1e1253'
    console.log(findContinuesChart1(str))


  }

  // beforeDestroy() {
  // }
}
</script>
