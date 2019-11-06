<template>
  <div class="branWrap">
    <headers :txt="title" />
    <div class="branImg">
        <img v-lazy="brandArr.list_pic_url" alt="">
    </div>
     <div class="branTxt">
            {{brandArr.simple_desc}}
    </div>
    <div class="branImgList">
        <cateGoryGoods v-if="branList.length" :goodsList="branList" :flag="false"  />
        <empty v-else/>
    </div>
  </div>
</template>

<script>
import { headers, cateGoryGoods, empty } from "@/components";
import { getBrandList } from '@/service/bran'
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      title: "标题",
      branList:[]
    };
  },
  components: { headers, cateGoryGoods, empty },
  methods: {
    ...mapActions("catalog", ["branddetail"]),
    getBrandLists: async (that,id)=>{
        let data = await getBrandList({brandId:id});
        that.branList = data;
        console.log(data)
    }
  },
  computed:{
      ...mapState('catalog',['brandArr'])
  },
  created() {
    let { id } = this.$route.params;
    let { name } = this.$route.query;
    this.title = name;
    this.branddetail(id)
    this.getBrandLists(this,id)
  }
};
</script>

<style lang="scss" scoped>
.branWrap{
    width: 100%;
    height: 100%;
    padding-top:.5rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .branImg{
        img{
            width: 100%;
        }
    }
    .branTxt{
        width: 100%;
        box-sizing: border-box;
        line-height: .2rem;
        padding: .2rem;
        background: white;
        text-indent: 2em;
        color: gray;
    }
    // .branImgList{
    //     flex: 1;
    //     overflow: auto;
    // }
}
</style>