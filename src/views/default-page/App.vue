<template>
  <div id="app">
    <router-view />
    <div id="box">
      ddds
      <p>
        Hello
        <b>world</b>
      </p>
      <img src="https://scms.popicorns.com/static/img/logo.57d1c0d6.png" alt="">
      <!-- 注释 -->
      <ul>
        <li>a</li>
        <li>b</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import '@/utils/dataStructure/dom-tranverse'
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
