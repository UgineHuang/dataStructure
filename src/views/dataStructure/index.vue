<template>
  <div @click="handleClick">
    dataStructure
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import {flatenDeep2} from '@/utils/dataStructure/arrayFlaten'

@Component
export default class DataStructure extends Vue {
  created() {
    const arr = [1,[2,[3,['a',[true],'b']],4],5]
    console.info(flatenDeep2(arr))
  }
  //

}
</script>
