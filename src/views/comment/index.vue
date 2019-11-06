<template>
    <div>
        <Header :txt="title"></Header>
        <div class="commentList">
            <div class="commentItem" v-for="item in commit.data" :key="item.id">
                <div class="userInfo">
                    <span>{{item.user_info.username}}</span>
                    <span>{{item.add_time}}</span>
                </div>
                <div class="userComment">{{item.content}}</div>
                <div class="commentPicList">
                    <img v-for="ele in item.pic_list" :key="ele.id" v-lazy="ele.pic_url" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Header from '@/components/header'

    export default {
        data() {
            return {
                title:'查看更多评论'
            }
        },
        components:{
            Header
        },
        computed:{
            ...mapState({
                commit:state=>state.topic.commit,
            })
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList(){
                this.$store.dispatch('topic/getCommit',this.$route.params.id)
            }
        },
    }
</script>

<style lang="scss" scoped>
.commentList{
    padding: .1rem;
    margin-top: .5rem;
    .commentItem{
        height: auto;
        color: #666;
        padding-bottom: .05rem;
        .userInfo{
            height: .4rem;
            line-height: .4rem;
            font-size: .12rem;
            display: flex;
            span:nth-of-type(1){
                flex: 6;
                color: #000;
            }
            span:nth-of-type(2){
                flex: 4;
                text-align: right;
            }
        }
        .userComment{
            line-height: .3rem;
            font-size: .15rem;
        }
        .commentPicList{
            display: flex;
            img{
                width: 1rem;
                height: 1rem;
                box-sizing: content-box;
                margin-right: .05rem;
            }
        }
        &{
             position: relative;
        }
        &::after{
            content:'';
            position: absolute;
            left: 0;right: 0;
            bottom: 0;
            height: 1px;
            background: #666;
            transform:scaleY(0.5)
        }
    }
    
}
</style>