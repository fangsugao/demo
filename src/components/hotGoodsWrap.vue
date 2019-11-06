<template>
    <div class="hotGoodsWrap">
        <div class="hotGoodsItem" v-for="ele in hotGoods" :key="ele.id" @click="goodclick(ele.id,ele.name)">
            <img v-lazy="ele.list_pic_url" alt="">
            <div class="hotGoodsInfos">
                <div>{{ele.name}}</div>
                <div class="hotcolor">{{ele.goods_brief}}</div>
                <div class="hotpice">￥ {{ele.retail_price}}</div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props:['hotGoods'],
    methods:{
        goodclick(id,name){
            this.$router.push({path:`/goods/${id}`,query:{text:name}})
        }
    }
}
</script>
<style scoped lang="scss">
.hotGoodsWrap{
     width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    min-height: 200px;
    background: white;
    .hotGoodsItem{
        display: flex;
        height: 1.5rem;
         border-top:1px solid #ccc;
        img{
            width: auto;
            height: 90%;
        }
        .hotGoodsInfos{
            flex: 1;
            padding: .3rem 0;
            div{
                margin: 0;
                padding: 0;
                border: 0;
                height: 0.35rem;
            }
            .hotcolor{
                color: #ccc;
                font-size: 12px;
            }
            .hotpice{
                color: darkred;
            }
        }
    }
}
   
</style>