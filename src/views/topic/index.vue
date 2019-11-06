<template>
    <div class="tabPageContent">
        <div class="main">
            <router-link class="topicItem" v-for="(item,i) in list" :key="i" :to="`/topicDetail/${item.id}`">
                <span :style="{backgroundImage:`url(${item.scene_pic_url})`}"></span>
                <div class="topicItemTitle">{{item.title}}</div>
                <div class="topicItemSubtitle">{{item.subtitle}}</div>
                <div class="topicItemPrice">{{item.price_info}}元起</div>
            </router-link>
        </div>
        <foots></foots>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { foots } from '@/components'

    export default {
        components:{
            foots
        },
        computed:{
            ...mapState({
                list:state=>state.topic.list
            })
        },
        mounted() {
            this.getlist()
        },
        methods: {
            getlist(){
                this.$store.dispatch('topic/getTopic' ,{
                    page:'1',
                    size:'100'
                })
            }
        }
    }
</script>

<style scoped>
.tabPageContent{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.main{
    flex:1;
    overflow-y:scroll;
}
.topicItem{
    height: 2.9rem;
    background: white;
    display: block;
    color: #000;
    cursor: pointer;
}
.topicItem>span{
    display: inline-block;
    width: 100%;
    height: 2rem;
    background-size: 100%;
    background-position: center center;
}
.topicItemTitle{
    font-size: .14rem;
    line-height: .2rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .1rem;
}
.topicItemSubtitle{
    padding: .05rem .1rem;
    font-size: .12rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: gray;
    height: .2rem;
}
.topicItemPrice{
    padding: .05rem;
    padding-bottom: .1rem;
    font-size: .14rem;
    text-align: center;
    color: red;
    line-height: .2rem;
    height: .35rem;
}

</style>