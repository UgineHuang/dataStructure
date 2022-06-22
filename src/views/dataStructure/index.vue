<template>
  <div>
    dataStructure
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { switchLetterCase1,switchLetterCase2 } from '@/utils/dataStructure/switchLetterCase';

@Component
export default class DataStructure extends Vue {


  created() {
    const str = '123ABGabcswiHtchL29etteHrCase123ABGabcswiHtchL29etteHrCase123ABGabcswiHtchL29etteHrCase123ABGabcswiHtchL29etteHrCase'
    console.time('switchLetterCase1')
    for(let i=0;i<10*10000;i++) {
      switchLetterCase1(str)
    }
    console.timeEnd('switchLetterCase1')

    console.time('switchLetterCase2')
    for(let i=0;i<10*10000;i++) {
      switchLetterCase2(str)
    }
    console.timeEnd('switchLetterCase2')

  }

  // beforeDestroy() {
  // }
}
</script>
