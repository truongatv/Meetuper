<template>
  <scroll-view>
    <nb-text class="header-1">Featured Meetups</nb-text>
  <!-- Iterate meetups "v-for"  -->
    <nb-card v-for="meetup in meetups" :key = "meetup._id">
      <nb-card-item bordered>
        <nb-left>
          <nb-thumbnail :source="{uri: meetup.meetupCreator.avatar}"></nb-thumbnail>
          <nb-body>
            <nb-text>{{meetup.title}}</nb-text>
            <nb-text note>Start Date</nb-text>
          </nb-body>
        </nb-left>
      </nb-card-item>
      <nb-card-item>
        <nb-body>
          <image :source="{uri: meetup.image}" 
                  class="card-item-image" 
                  :style="stylesObj.cardItemImage"/>
          <nb-text>{{meetup.description}}</nb-text>
        </nb-body>
      </nb-card-item>
      <nb-card-item :style="{ paddingVertical: 0 }">
        <nb-left>
          <nb-button transparent>
            <nb-icon name="person"></nb-icon>
            <nb-text>{{meetup.joinedPeopleCount}}</nb-text>
          </nb-button>
        </nb-left>
      </nb-card-item>
    </nb-card>
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
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: '100%',
          marginBottom: 10
        }
      }
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    meetups () {
      return this.$store.state.meetups.items
    }
  },
  created() {
    this.$store.dispatch('fetchTodo')
    this.$store.dispatch('meetups/fetchMeetups')

  },
  methods: {
    goToScreen1() {
      this.navigation.navigate("ScreenOne");
    }
  }
};
</script>

<style>
  .card-item-image {
    flex: 1;
    height: 200;
  }
  .header-1 {
    font-size: 23px;
    padding: 20px;
    font-weight: bold;
  }
</style>