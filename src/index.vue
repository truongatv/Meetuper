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
import moment from 'moment'

Vue.prototype.$store = store
Vue.use(VueNativeBase);
Vue.component('ScreenWithDrawer', ScreenWithDrawer)
Vue.filter('upperCase', function(value) {
  if(!value) return ''

  return value.toUpperCase()
})

Vue.filter('formatDate', function (value, formatType='LL') {
  if(!value) return ''

  return moment(value).format(formatType)
})

Vue.filter('fromNow', function (value) {
  if(!value) return ''

  return moment(value).fromNow()
})
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