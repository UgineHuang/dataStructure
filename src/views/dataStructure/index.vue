<template>
  <div>
    dataStructure
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import {moveZero2} from '@/utils/dataStructure/moveZero'

@Component
export default class DataStructure extends Vue {


  created() {
    // const arr = []
    // for(let i=0; i<20*10000;i++) {
    //   if(i % 10 === 0) {
    //     arr.push(0)
    //   } else {
    //     arr.push(i)
    //   }
    // }
    // console.time('moveZero1')
    // moveZero1(arr)
    // console.timeEnd('moveZero1')

    // const arr1 = []
    // for(let i=0; i<20*10000;i++) {
    //   if(i % 10 === 0) {
    //     arr1.push(0)
    //   } else {
    //     arr1.push(i)
    //   }
    // }
    // console.time('moveZero2')
    // moveZero2(arr1)
    // console.timeEnd('moveZero2')
    const arr = [1,0,3,4,0,0,0,11,13]
    moveZero2(arr)

  }

  // beforeDestroy() {
  // }
}
</script>
