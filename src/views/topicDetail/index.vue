<template>
    <div class="topicDetail">
        <Header :txt="detailList.title"></Header>
        <main>
            <div class="topicDetailImg" v-html="detailList.content"></div>

            <div class="commentWrap">
                <div class="titleLine">
                    <span>精选留言</span>
                    <router-link :to="`/topicCommentWrite/${detailList.id}`">
                        <svg t="1569315726252" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5029" width="12" height="12"><path d="M990.88 347.12a32.456 32.456 0 0 0-32.456 32.448v524.488c0 30.36-24.72 55.048-55.08 55.048H120.616a55.104 55.104 0 0 1-55.04-55.048v-784.08c0-30.36 24.688-55.08 55.04-55.08H643.76a32.456 32.456 0 0 0 0-64.896H120.616C54.488 0 0.672 53.84 0.672 119.976v784.08C0.672 970.2 54.48 1024 120.616 1024h782.736c66.168 0 119.976-53.808 119.976-119.944V379.568a32.448 32.448 0 0 0-32.448-32.448z" fill="#838384" p-id="5030"></path><path d="M219.584 784.968a32.344 32.344 0 0 0 22.944 9.504 32.344 32.344 0 0 0 22.944-9.504L988.848 61.6a32.44 32.44 0 1 0-45.88-45.88L219.584 739.088a32.424 32.424 0 0 0 0 45.88z" fill="#838384" p-id="5031"></path></svg>
                    </router-link>
                </div>

                <div v-if="commitDate.length===0" class="noComment">
                    <img src="/img/comment.png" alt="">
                    <span>等你来消息</span>
                </div>

                <div v-else class="commentList">                   
                    <div class="commentItem" v-for="item in commitDate" :key="item.id">
                        <div class="userInfo">
                            <span>{{item.user_info.username}}</span>
                            <span>{{item.add_time}}</span>
                        </div>
                        <div class="userComment">{{item.content}}</div>
                    </div>
                    <router-link class="moreComment" :to="`/comment/${314}`">查看更多评论</router-link>
                </div>
            </div>

            <div class="relateTopic">
                <div class="relateTopicTitle">推荐专题</div>
                <div class="relateTopicItem" v-for="item in relatedList" :key="item.id" @click="relateDetail(item.id)">
                    <img :src="item.scene_pic_url" alt="">
                    <div>{{item.title}}</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Header from '@/components/header'

    export default {
        data() {
            return {
               id:'',
            }
        },
        components:{
            Header
        },
        computed:{
            ...mapState({
                detailList:state=>state.topic.detailList,
                commitDate:state=>state.topic.commitDate,
                relatedList:state=>state.topic.relatedList
            })
        },
        mounted() {
            this.getlist()
            this.$store.dispatch('topic/getCommitList')
            this.$store.dispatch('topic/getrelated')
        },
        methods: {
            getlist(){
                this.$store.dispatch('topic/getTopicDetail' ,{
                    id:this.$route.params.id
                })
            },
            relateDetail(id){
                this.$router.history.push(`/topicDetail/${id}`)
                this.$router.go(0)
                
            }
        },
    }
</script>

<style lang="scss">
main{
    margin-top: .5rem;
    width: 100%;
    height: 100%;
    font-size: .15rem;
}
.topicDetailImg>img{
    width: 100%;
    height: auto;
    display: block
}
.commentWrap{
    width: 100%;
    height: auto;
    background: white;
    margin-top: .2rem;
    padding: 0 .1rem;
    .titleLine{
        height: .5rem;
        line-height: .5rem;
        display: flex;
        span:nth-of-type(1){
            flex: 8;
        }
        span:nth-of-type(2){
            flex: 2;
            text-align: center;
            font-size: .2rem;
        }
    }
    .titleLine{
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
.commentList{
    padding: .1rem;
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

.moreComment{
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    display: block;
    color: #000;
}

.noComment{
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        padding: .1rem;
        width: 1.3rem;
        height: 1.3rem;
    }
}

.relateTopic{
    margin-top: .1rem;
    padding: 0 .1rem;
    background-color: #eeeeee;
    .relateTopicTitle{
        line-height: .4rem;
        text-align: center;
    }
    .relateTopicItem{
        background: white;
        padding: .1rem .1rem 0 .1rem;
        margin-bottom: .1rem;
        display: block;
        img{
            width: 100%;
            height: 2rem;
        }
        div{
            line-height: .5rem;
            color: gray;
            font-size: .14rem;
        }
    }
}
</style>