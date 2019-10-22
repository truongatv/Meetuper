<template>
  <view class="container">
    <Navigation />
  </view>
</template>

<script>
import Navigation from "./navigation";
import Vue from "vue-native-core";
import store from './store'
import { VueNativeBase } from "native-base";
import ScreenWithDrawer from '@/components/ScreenWithDrawer'

Vue.prototype.$store = store
Vue.use(VueNativeBase);
Vue.component('ScreenWithDrawer', ScreenWithDrawer)
export default {
  components: {
    Navigation
  }
};
</script>

<style>
  .container {
    flex: 1;
  }
</style>