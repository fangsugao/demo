<template>
    <div class="head">
        <span @click="goback">＜</span>
        <span>{{txt}}</span>
        <span></span>
    </div>
</template>

<script>
    export default {
        props:{
            txt:String
        },
        methods: {
            goback(){
                this.$router.history.go(-1)
            }
        },
    }
</script>

<style scoped lang="scss">
.head{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .5rem;
    background: #fff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    font-size: .14rem;
    span:not(:nth-of-type(2)){
        flex: 2;
        text-align: center;
        font-size: .2rem;
    }
    span:nth-of-type(2){
        flex: 6;
        text-align: center;
    }
}
</style>