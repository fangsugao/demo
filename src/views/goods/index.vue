<template>
    <div class="goodsPage">
        <headers :txt="txt" />

        <div class="bannerImg">
            <swiper :banrlist="gallery" :flag="false"></swiper>
        </div>

        <service></service>

        <ol class="goodsMsgWrap">
            <li>{{info.name}}</li>
            <li>{{info.goods_brief}}</li>
            <li>￥{{info.retail_price}}</li>
        </ol>

        <div class="goodsSize">
            <span></span>
            <span>x{{numSize}}</span>
            <span @click="ruleClick">选择规格<i>></i></span>
        </div>

        <div class="goodsComment">
            <div class="goodsCommentTitle">
                <span>评论（{{comment.count}}）</span>
                <span @click="allLook">查看全部></span>
            </div>
            <div class="commentList">
                <div class="commentItem">
                    <div class="userInfo">
                        <span>匿名用户</span>
                        <span>{{commentData.add_time}}</span>
                    </div>
                    <div class="userComment">{{commentData.content}}</div>
                    <div class="commentPicList" v-for="item in commentData.pic_list" :key="item.id">
                        <img v-lazy="item.pic_url" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="goodsAttribute">
            <div class="goodsAttributeLine">商品参数</div>
            <div class="goodsAttributeList">
                <div class="goodsAttributeItem" v-for="(item,i) in attribute" :key="i">
                    <div class="attributeLabel">{{item.name}}</div>
                    <div class="attributeContent">{{item.value}}</div>
                </div>
            </div>
        </div>

        <div class="topicDetailImg" v-html="info.goods_desc"></div>
        
        <div class="goodsAttribute">
            <div class="goodsAttributeLine">常见问题</div>
            <div class="problemWrap" v-for="item in issue" :key="item.id">
                <div class="problemLabel">
                   <span>√</span>{{item.question}}
                </div>
                <div class="problemContent">{{item.answer}}</div>
            </div>
        </div>

        <div class="goodsAttribute">
            <div class="goodsAttributeLine">大家都在看</div>
        </div>

        <cateGoryGoods :goodsList="goodsList" :flag="false"></cateGoryGoods>

        <div class="goodsPageDo">
            <div class="isLike" :style="{color:info.is_app_exclusive?'gold':''}" @click="collect">☆</div>
            <div class="cartNum" @click="shopCart">
                <svg t="1569464963457" class="icon iconCart" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2560" width="23" height="23"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z" p-id="2561" fill="#1296db"></path></svg>
                <span>{{numCar}}</span>
            </div>
            <div class="addCart" @click="addMaxCart">加入购物车</div>
            <div class="payGoods">立即购买</div>
        </div>

        <div v-show="isShow" class="deailog">
            <div class="mask">
                <div class="goodsSizeDo">
                    <div class="goodsSizeSetMsg">
                        <img :src="img" alt="">
                        <ul class="gooodsSizePriceAndSize">
                            <li>
                                <span>单价：</span>
                                <span>￥{{info.retail_price}}</span>
                            </li>
                            <li>
                                <span>库存：</span>
                                <span>{{info.goods_number}}{{info.goods_unit}}</span>
                            </li>
                            <li>
                                <span>已选择：</span>
                                <span></span>
                            </li>
                        </ul>
                        <div class="closeModel" @click="close">X</div>
                    </div>
                    <div class="goodsSizeWrap">
                        <div>数量</div>
                        <div class="goodsBuyCount">
                            <span @click="min">-</span>
                            <span>{{numSize}}</span>
                            <span @click="add">+</span>
                        </div>
                    </div>
                </div>
                <div class="goodsDoWrap">
                    <div @click="addShop">加入购物车</div>
                    <div>立即下单</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { headers, swiper, service, cateGoryGoods } from '@/components'
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                id:'',
                txt:'',
                isShow:false,
                numSize:0
            }
        },
        components:{
            headers,
            swiper,
            service,
            cateGoryGoods
        },
        computed: {
            ...mapState({
                gallery:state=>state.good.gallery,
                info:state=>state.good.info,
                comment:state=>state.good.comment,
                commentData:state=>state.good.commentData,
                attribute:state=>state.good.attribute,
                issue:state=>state.good.issue,
                goodsList:state=>state.good.goodsList,
                img:state=>state.good.img,
                numCar:state=>state.good.numCar,
                productList:state=>state.good.productList,
            })
        },
        mounted() {
            this.id=this.$route.params.id
            this.txt=this.$route.query.text
            this.$store.dispatch('good/getGood',{id:this.id})
            this.$store.dispatch('good/getGoodLook',{id:this.id})
        },
        methods: {
            ruleClick(){
                this.isShow=true
            },
            close(){
                this.isShow=false
            },
            addMaxCart(){
                this.isShow=true
            },
            min(){
                if(this.numSize===0) return;
                this.numSize--;
            },
            add(){
                this.numSize++;
            },
            addShop(){
                this.$store.commit('good/setNumCar',this.numSize)

                this.$store.dispatch('cart/getAddShop',{
                    goodsId:this.productList.goods_id,
                    number:this.numSize,
                    productId:this.productList.id
                })

            },
            allLook(){
                this.$router.history.push(`/comment/${this.id}`)
            },
            shopCart(){
                this.$router.history.push('/cart')
            },
            // 添加收藏
            collect(){
                this.$store.dispatch('good/getCollectAdd',{ typeId: 0 , valueId: this.id })
            }
        },
    }
</script>

<style lang="scss" >
.goodsPage{
    background-color: #f5f5f9;
}
.bannerImg{
    margin-top: .5rem;
    width: 100%;
    height: 3.5rem;
    .swiper-container {
        width: 100%;
        height: 100%;
    }
}
.serviceList{
    height: .4rem;
    background: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
        flex: 1 ;
        color: #666;
        font-size: .14rem;
        text-align: center;
        span{
            color: red;
            margin-right: .07rem;
            font-size: .15rem;
        }
    }
}
.goodsMsgWrap{
    padding: .2rem;
    background: #fff;
    li:nth-of-type(1){
        font-size: .2rem;
        text-align: center;
        padding-bottom: .1rem;
    }
    li:nth-of-type(2){
        font-size: .15rem;
        color: #444;
        text-align: center;
        padding-bottom: .05rem;
    }
    li:nth-of-type(3){
        font-size: .2rem;
        text-align: center;
        line-height: .5rem;
        color: red;
    }
}
.goodsSize{
    margin-top: .01rem;
    height: .5rem;
    padding: 0 .2rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    span:nth-of-type(1){
        flex: 4;
    }
    span:nth-of-type(2){
        flex: 3;
        color: red;
        font-weight: bolder;
        padding: 0 .05rem;
        text-align: right;
    }
    span:nth-of-type(3){
        flex: 3;
        padding: 0 .1rem;
        text-align: right;
        font-size: .15rem;
        i{
            font-style: normal;
        }
    }
    
}
.goodsComment{
    margin-top: .1rem;
    background-color: #fff;
    .goodsCommentTitle{
        display: flex;
        justify-content: center;
        align-items: center;
        height: .5rem;
        padding: 0 .2rem;
        border-bottom: .5px solid gainsboro;
        span:nth-of-type(1){
            flex: 1;
            text-align: left;
        }
        span:nth-of-type(2){
            flex: 1;
            text-align: right;
        }
    }
}
.commentList{
    padding: .1rem;
    background-color: #fff;
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
        img{
            display: block;
            width: 1rem;
            height: 1rem;
            box-sizing: content-box;
            margin-right: .5rem;
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
.goodsAttribute{
    margin-top: .1rem;
    padding: .2rem;
    background: #fff;
    .goodsAttributeLine{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #2196f3;
        padding: .05rem 0;
        &::before{
            content: '';
            width: .2rem;
            height: 1px;
            background: #2196f3;
            margin: 0 .1rem;
        }
        &::after{
            content: '';
            width: .2rem;
            height: 1px;
            background: #2196f3;
            margin: 0 .1rem;
        }
    }
    .goodsAttributeItem{
        display: flex;
        align-items: center;
        line-height: .4rem;
        background: #dcdfe6;
        margin-top: .05rem;
        .attributeLabel{
            width: 1rem;
            color: #666;
            padding: 0 .05rem;
            font-size: .16rem;
            text-align: center;
        }
        .attributeContent{
            flex: 1;
            font-size: .15rem;
            line-height: .3rem;
            padding: 0 .05rem;

        }
    }
    .problemWrap{
        margin-bottom: .1rem;
        .problemLabel{
            font-size: .16rem;
            line-height: .3rem;
            span{
                color: red;
                margin-right: .05rem;
            }
        }
        .problemContent{
            font-size: .15rem;
            line-height: .25rem;
            color: #666;
        }
    }
}
.topicDetailImg{
    img{
        width: 100%;
        height: auto;
        display: block;
    }
}
.cateWrap{
    margin-bottom: .5rem;
}
.goodsPageDo{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .49rem;
    background: #fff;
    box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    .isLike{
        width: 20%;
        height: 100%;
        line-height: .49rem;
        font-size: .3rem;
        text-align: center;
        font-weight: bolder;
    }
    .cartNum{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconCart{
            position: relative;
        }
        span{
            position: absolute;
            font-size: .32rem;
            right: 2.4rem;
            top: .1rem;
            color: red;
            font-size: .14rem;
            font-weight: bolder;
        }
    }
    .addCart{
        width: 30%;
        height: 100%;
        line-height: .49rem;
        text-align: center;
        font-size: .15rem;
        color: #fff;
        background: linear-gradient(90deg, #ff9500, #ff5e3a);
    }
    .payGoods{
        width: 30%;
        height: 100%;
        line-height: .49rem;
        text-align: center;
        font-size: .15rem;
        color: #fff;
        background: linear-gradient(90deg, #1d62f0, #19d5fd);
    }
}
.deailog{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
    .mask{
        width: 100%;
        height: 2.6rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        font-size: .15rem;
        color: #888;
    }
}
.goodsSizeDo{
    padding: .2rem .1rem;
    .goodsSizeSetMsg{
        display: flex;
        height: 100%;
        img{
            width: 1rem;
            height: 1rem;
            display:block;
        }
        .gooodsSizePriceAndSize{
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 .05rem;
            flex: 1;
            height: 100%;
            font-size: .15rem;
            text-align: left;
            li{
                width: 100%;
                height: auto;
                line-height: .3rem;
                span:nth-of-type(2){
                    color: red;
                }
            }
        }
        .closeModel{
            width: auto;
            color: red;
            font-size: .16rem;
        }
    }
}
.goodsSizeWrap{
    div:nth-of-type(1){
        text-align: left;
        color: #000;
        padding: .05rem 0;
    }
    .goodsBuyCount{
        width: 2rem;
        height: .4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        span{
            height: .4rem;
            line-height: .4rem;
            display: inline-block;
            text-align:center;
            border: 1px solid #ededed;
        }
        span:nth-of-type(1),
        span:nth-of-type(3){
            width: 30%;
        }
        span:nth-of-type(2){
            width: 40%;
        }
    }
}
.goodsDoWrap{
    height: .5rem;
    display: flex;
    div{
        width: 50%;
        color: white;
        line-height: .5rem;
        text-align: center;
    }
    div:nth-of-type(1){
        background: linear-gradient(90deg, #ff9500, #ff5e3a);
    }
    div:nth-of-type(2){
        background: linear-gradient(90deg, #1d62f0, #19d5fd);
    }
}
</style>