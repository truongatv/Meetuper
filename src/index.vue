<template> 
    <Navigation />
</template>

<script>
import Navigation from './navigation'
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);
export default {
    components: {
        Navigation
    }
}
</script>