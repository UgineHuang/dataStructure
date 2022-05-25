<template>
  <div>
    dataStructure
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import {findTwoNumbers1,findTwoNumbers2} from '@/utils/dataStructure/two-number-sum'
import '@/utils/dataStructure/binary-search-tree.ts'

@Component
export default class DataStructure extends Vue {


  created() {
    console.log('数据结构学习')
    const arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,5,5,5,5,6,6,6,6,6,6,6,7,11,15]
    const target = 15
    console.log(findTwoNumbers1(arr,target))
    console.time('1')
    for(let i=0;i<10000*100;i++) {
      findTwoNumbers1(arr,target)
    }
    console.timeEnd('1')

    console.time('2')
    for(let i=0;i<10000*100;i++) {
      findTwoNumbers2(arr,target)
    }
    console.timeEnd('2')

  }

  // beforeDestroy() {
  // }
}
</script>
