<template>
    <nb-container v-if="isMeetupLoaded">
        <!-- meetup title -->
        <view :style="styles.container">
            <nb-h1 :style="styles.headerOne">{{meetup.title}}</nb-h1>
            <!-- meetup creator avatar  -->
            <nb-thumbnail :source="{uri: meetupCreator.avatar }" />
            <nb-text :style="styles.label">
                by {{meetupCreator.name}}
            </nb-text>
        </view>
        <!-- apply styles label and padding left -->
        <!-- meetup creator name -->
        <nb-content>
            <nb-card>
                <nb-tabs>
                    <nb-tab heading="Details">
                        <MeetupDetailInfo :meetup="meetup" />
                    </nb-tab>
                    <nb-tab heading="Tab2">
                        <text></text>
                    </nb-tab>
                    <nb-tab heading="Tab3">
                        <text></text>
                    </nb-tab>
                </nb-tabs>
            </nb-card>
        </nb-content>
    </nb-container>
</template>
<script>
import styles from '@/styles'
import MeetupDetailInfo from '@/components/MeetupDetailInfo'
export default {
    components : {
        MeetupDetailInfo
    },
    props: {
        navigation: {
            type: Object
        }
    },
    data () {
        return {
            styles
        }
    },
    computed: {
        meetup() {
            return this.$store.state.meetups.item
        },
        isMeetupLoaded () {
            return Object.keys(this.meetup).length > 0
        },
        meetupCreator () {
            return this.meetup.meetupCreator || {}
        }
    },
    created () {
        const meetupId = this.navigation.getParam('meetupId', 'undefined')
        this.$store.dispatch('meetups/fetchMeetupById', meetupId)
    }
}
</script>
<style>
    
</style>