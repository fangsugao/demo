<template>
    <div class="coolect">
         <headers :txt="txt" />
         <div class="collectList">
             <!-- <div class="touchClear"> -->
                 <div class="test" v-for="item in collectArr" :key="item.id">
                     <div class="collectItem" @click="collectClick(item.value_id,item.name)">
                            <img v-lazy="item.list_pic_url" alt="">
                            <div class="collectMsg">
                                <div>{{item.name}}</div>
                                <div>{{item.goods_brief}}</div>
                                <div>￥{{item.retail_price}}</div>
                            </div>
                     </div>
                     <div class="clean" @click="remove(item.value_id)">删除</div>
                 </div>
             <!-- </div> -->
         </div>
    </div>
</template>

<script>
    import { headers } from "@/components";
    import { mapState, mapActions } from "vuex";

    export default {
        data() {
            return {
                txt:'easyLikeGoods'
            }
        },
        components: { 
            headers 
        },
        computed: {
            ...mapState("collect", ["collectArr"])
        },
        methods: {
            ...mapActions("collect", ["getCollectList","getCollectDel"]),
            collectClick(id,name){
                this.$router.push({path:`/goods/${id}`,query:{text:name}})
            },
            remove(valueId){
                this.getCollectDel({ typeId: 0, valueId })
            }
        },
        created() {
            this.getCollectList({ typeId:0 })
        },
    }
</script>

<style lang="scss" scoped>
.coolect{
    display: flex;
    flex-direction: column;
    font-size: .14rem;
}
.collectList{
    flex: 1;
    overflow: auto;
    margin-top: .5rem;
    background-color: #f5f5f9;
}
// .touchClear{
//     height: auto;
    .test{
        height: 1.25rem;
        padding: .1rem;
        background: #fff;
        display: flex;
        position: relative;
        .collectItem{
            width: 90%;
            display: flex;
            img{
                width: auto;
                height: 100%;
            }
            .collectMsg{
                flex: 1;
                div{
                    height: 33.333%;
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                div:nth-of-type(2){
                    color: #a9a9a9;
                }
                div:nth-of-type(3){
                    color: red;
                }
            }
        }
        .clean{
           line-height: 1.25rem;
           text-align: center;
           color: red;
        }
        &::after{
            content: '';
            width: 200%;
            background: #ededed;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: scale(0.5);
            transform-origin: 0;
        }
    }

// }

</style>