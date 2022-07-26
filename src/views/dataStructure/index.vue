<template>
  <div>
    <iframe src="http://localhost:8080/#/pages/warehouseControl/checkInventory/main" width="400" height="800"></iframe>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import '@/utils/dataStructure/lazy-man'

@Component
export default class DataStructure extends Vue {
  created() {
    // const arr = [1,[2,[3,['a',[true],'b']],4],5]
    // console.info(flatenDeep2(arr))
  }
  //

}
</script>
