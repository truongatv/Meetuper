<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="meetup in meetups" :key="meetup._id">
        <nb-text>{{meetup.title}}</nb-text>
      </nb-list-item>
    </nb-list>
  </scroll-view>
</template>

<script>
import Hello from "@/components/Hello";
export default {
  components: {
    Hello
  },
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      title: "Home screen",
    };
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    meetups () {
      return this.$store.state.meetups
    }
  },
  created() {
    this.$store.dispatch('fetchTodo')
    this.$store.dispatch('fetchMeetups')
  },
  methods: {
    goToScreen1() {
      this.navigation.navigate("ScreenOne");
    }
  }
};
</script>


