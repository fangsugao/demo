<template>
    <div class="noTabPageContent">
        <Header :txt="titile"></Header>
        <div class="textAreaContent">
            <textarea class="inputArea" maxlength="80" :value="text" @input="textChange"></textarea>
            <span>{{text.length}}/80</span>
        </div>
        <div class="buttons">
            <div class="clean" v-if="text!==''" @click="cleanClick">
                <span>清空</span>
            </div>
            <div class="lange" @click="langeClick">
                <span>留言</span>
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
                titile:'填写留言',
                text:''
            }
        },
        components:{
            Header
        },
        computed:{
            ...mapState({
                lange:state=>state.topic.lange
            })
        },
        methods: {
            textChange(e){
                this.text=e.target.value
            },
            cleanClick(){
                this.text=''
            },
            langeClick(){
                this.$store.commit('topic/setContent',this.text)
                this.$store.dispatch('topic/getLange')
                this.$router.history.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
.noTabPageContent{
    padding-top: .5rem;
    min-height: 100%;
    background-color: #f5f5f9;
}
.textAreaContent{
    width: 100%;
    height: 2rem;
    padding: .1rem .1rem .2rem;
    position: relative;
    .inputArea{
        width: 100%;
        height: 100%;
        border: none;
    }
    span{
        height: .2rem;
        position: absolute;
        bottom: 0;
        left: .1rem;
        right: .1rem;
        text-align: right;
        text-indent: 1em;
        line-height: .2rem;
        padding: 0 .1rem;
        width: auto;
        color: gray;
        background: white;
        font-size: .14rem;
    }
}
.buttons{
    width: 100%;
    height: auto;
    padding: .1rem .2rem;
    display: flex;
    justify-content: space-between;
    div{
        flex: 5;
        cursor: pointer;
        span{
            display: inline-block;
            width: 1rem;
            height: .3rem;
            line-height: .3rem;
            padding: 0 .15rem;
            border-radius: 5px;
            text-align: center;
        }
    }
    .clean>span{
            background-color: #fff;
            color: #000;
        }
    .lange>span{
        background-color: #108ee9;
        color: #fff;
        float: right;
    }
}
</style>