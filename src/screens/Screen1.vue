<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <button :title="`Go to screen 1`" :on-press="goToScreen2" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'I AM SCREEN 1'
    }
  },
  props: {
      navigation: {
        type: Object
      }
  },
  methods: {
      goToScreen2() {
        this.navigation.navigate('Screen2')
      }
  },
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
