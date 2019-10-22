<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="todo in todos" :key="todo.id">
        <nb-text>{{todo.title}}</nb-text>
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
    }
  },
  created() {
    this.$store.dispatch('fetchTodo')
  },
  methods: {
    goToScreen1() {
      this.navigation.navigate("ScreenOne");
    }
  }
};
</script>


