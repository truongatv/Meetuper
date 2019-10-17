 <template>
    <view>
        <text class="text-color-primary">{{message}}</text>
        <button :title="btnMessage" :on-press="handleClick"></button>
        <text class='click-count'>{{clickCount}}</text>
        <text>{{clickMotivation}}</text>
    </view>
 </template>
 <script>
 export default {
     data() {
        return {
            message: 'Hello world!!!',
            btnMessage: 'Click me!!!',
            clickCount: 0
        }
    },
    computed: {
        clickMotivation() {
            if(this.clickCount == 0) {
                return 'Nothing clicked!!!'
            } else {
                return 'Good job ! keep click'
            }
        }
    },
    methods: {
        handleClick() {
            this.clickCount++
        }
    },
 }
 </script>

 <style>
.text-color-primary {
  color: blue;
}
.click-count {
    font-size: 20px;
}
 </style>