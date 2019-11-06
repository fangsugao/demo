<template>
    <div class="searchPage">
       <div class="searchFix">
           <div class="searchInputWrap">
               <div class="goBack" @click="goBack">＜</div>
               <div class="icon">
                   <svg t="1569658740959" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2534" width="30" height="30"><path d="M465.4 654.3c-48.4 0-96.8-18.4-133.6-55.2-73.7-73.7-73.7-193.6 0-267.3 73.7-73.7 193.6-73.7 267.3 0 73.7 73.7 73.7 193.6 0 267.3-36.9 36.8-85.3 55.2-133.7 55.2z m0-335.8c-37.7 0-75.3 14.3-104 43-57.3 57.3-57.3 150.6 0 207.9 57.3 57.3 150.6 57.3 207.9 0 57.3-57.3 57.3-150.6 0-207.9-28.6-28.7-66.3-43-103.9-43z" fill="#707070" p-id="2535"></path><path d="M569.288 599.035l29.698-29.698 148.491 148.49-29.698 29.699z" fill="#707070" p-id="2536"></path><path d="M570.4 465.4h-42c0-34.7-28.3-63-63-63v-42c57.9 0 105 47.1 105 105z" fill="#707070" p-id="2537"></path></svg>
               </div>
               <input type="text" placeholder="520元礼包抢先领" class="searchInput" :value="valChooes">
               <div class="cancelSearch" @click="cancel">取消</div>
           </div>
           <div class="searchMsg" v-if="isShow===true">
               <div class="searchItemWrap">
                   <div class="title">
                       <span>历史记录</span>
                       <img src="/img/del-address.png" alt="" @click="del">
                   </div>
                   <div class="listWrap">
                       <button class="listItem" v-for="(item,i) in historyLsit" :key="i" @click="listclick(item)">{{item}}</button>
                   </div>
               </div>
               <div class="searchItemWrap">
                   <div class="title">热门搜索</div>
                   <div class="listWrap">
                        <button 
                            v-for="(item,i) in hotList" 
                            :key="i"
                            @click="listclick(item.keyword)"
                            :class="['listItem',{'active':item.is_hot===1}]">{{item.keyword}}</button>
                   </div>
               </div>
           </div>
       </div>
       <div class="searchGoods" v-if="isShow===false">
            <ul class="searchConditionWrap">
                <li :class="{active:ind===0}" @click="navClick(0,'id','default')">综合</li>
                <li :class="{active:ind===1}" @click="priceClick(1,'price')">价格</li>
                <li :class="{active:ind===2}" @click="navClick(2,'id','desc')">全部分类</li>
            </ul>
            <div class="goods">
                <cateGoryGoods :flag="false" :goodsList="goodArr"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    import { cateGoryGoods } from '@/components'

    export default {
        data() {
            return {
                isShow:true,
                valChooes:'',
                ind:0,
                cont:true
            }
        },
        components: { cateGoryGoods },
        computed: {
            ...mapState("search", ["historyLsit", "hotList","goodArr"])
        },
        methods: {
            ...mapActions("search", ["getSearch","getSearchDetail","getSearchDel"]),
            listclick(keyword){
                this.getSearch()
                this.getSearchDetail({keyword, page: 1, size: 100, sort: 'id', order: 'desc', categoryId: 0})
                this.isShow=false
                this.valChooes=keyword
            },
            goBack(){
                this.$router.history.go(-1)
            },
            cancel(){
                this.isShow=true
                this.getSearch()
                this.valChooes=''
            },
            del(){
                this.getSearchDel()
                this.getSearch()

            },
            navClick(i,sort,order){
                console.log(i,sort,this.valChooes)
                this.getSearchDetail({keyword:this.valChooes, page: 1, size: 100, sort, order, categoryId: 0})
                this.ind=i
            },
            priceClick(i,sort,order){
                if(this.cont){
                    this.getSearchDetail({keyword:this.valChooes, page: 1, size: 100, sort, order:'asc', categoryId: 0})
                    this.cont=false
                }else{
                    this.getSearchDetail({keyword:this.valChooes, page: 1, size: 100, sort, order:'desc', categoryId: 0})
                    this.cont=true
                }
                
                this.ind=i
            },
        },
        created() {
            this.getSearch()
            
        },
    }
</script>

<style lang="scss" scoped>
.searchPage{
    width: 100%;
    height: 100%;
    background-color: #f5f5f9;
}
.searchFix{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .5rem;
    background: #fff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    z-index: 3;
    font-size: .14rem;
    .searchInputWrap{
        width: 100%;
        height: .5rem;
        padding: .05rem 0;
        background: white;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .goBack{
            padding: 0 .1rem;
            font-size: .2rem;
        }
        .icon{
            background: #f5f5f9;
            width: .32rem;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .searchInput{
            flex: 1;
            height: 100%;
            background: #f5f5f9;
            border: none;
            font-size: .16rem;
            border-radius: 0;
        }
        .cancelSearch{
            padding: 0 .1rem;
        }
    }
}
.searchMsg{
    width: 100%;
    height: auto;
}
.searchItemWrap{
    width: 100%;
    height: auto;
    padding: .1rem;
    padding-top: 0;
    background: #ffffff;
    margin-top: .05rem;
    .title{
        width: 100%;
        height: .35rem;
        font-size: .15rem;
        line-height: .35rem;
        img{
            width: .2rem;
            height: .2rem;
            float: right;
        }
    }
    .listWrap{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .listItem{
            display: inline-block;
            white-space: nowrap;
            cursor: pointer;
            background-color: #fff;
            border: 1px solid #dcdfe6;
            border-color: #dcdfe6;
            color: #606266;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            font-weight: 500;
            user-select: none;
            padding: .08rem .12rem;
            font-size: .14rem;
            border-radius: .04rem;
            margin: .05rem;
        }
        .active{
            color: red;
            border-color: red;
        }
    }
}
.searchGoods{
    .searchConditionWrap{
        position: fixed;
        top: .5rem;
        width: 100%;
        height: .35rem;
        z-index: 10;
        background-color: #fff;
        display: flex;
        font-size: .14rem;
        box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
        li{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .active{
            color: red;
        }
    }
}
.goods{
    margin-top: .9rem;
}

</style>