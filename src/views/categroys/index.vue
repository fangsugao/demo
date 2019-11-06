<template>
  <div class="wrap">
    <headers :txt="txt" />
    <div class="cateBox">
      <div class="catd" ref="catd">
        <div class="content">
          <span
            v-for="(ele) in categorysArr"
            :class="{cative:id==ele.id}"
            @click="setInd(ele.id,ele)"
            :key="ele.id"
            :ref="ele.id"
          >{{ele.name}}</span>
        </div>
      </div>
      <commonScroll
        :list="{
        ...category,
        refreshDispatch: 'category/pullRefresh',
        loadMoreDispatch: 'category/loadMore'}"
      >
        <template slot="headDetail">
          <div class="categoryDetail">
            <div>{{name}}</div>
            <div>{{frontName}}</div>
          </div>
        </template>

        <template v-slot:default="slotProps">
          <cateGoryGoods :flag="false" :goodsList="slotProps.data" />
        </template>
      </commonScroll>
    </div>
  </div>
</template>

<script>
import { getCategory } from "@/service/bran";
import { headers, cateGoryGoods, commonScroll } from "@/components";
import { mapActions, mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      txt: "奇趣分类",
      id: "1005000", 
      scroll: null,
      obj: {
        name: "",
        frontName: ""
      },
      ind: 0
    };
  },
  components: {
    headers,
    cateGoryGoods,
    commonScroll
  },
  computed: {
    ...mapState({
      categorysArr: state => state.catalog.categorysArr,
      name: state => state.catalog.name,
      frontName: state => state.catalog.frontName,
      category: state => state.category
    })
  },
  methods: {
    ...mapActions("catalog", ["getGoodCategory"]),
    ...mapActions({
      pullRefresh: "category/pullRefresh"
    }),
    ...mapMutations({
      setCategoryId: "category/setCategoryId"
    }),
    setInd(id, ele) {
      this.obj.name = ele.name;
      this.obj.frontName = ele.front_name;
      this.id = id;

      // 获取第一页数据
      this.setCategoryId(id);
      this.pullRefresh();
    }
  },
  mounted() {
    //导航的better-scroll
    this.scroll = new BScroll(this.$refs.catd, {
      click: document.body.width > 768 ? false : true,
      scrollX: true,
      eventPassthrough: "vertical"
    });
    // 获取第一页数据
    this.setCategoryId(this.id);
    this.pullRefresh();
  },
  created() {
    this.id = this.$route.params.id;

    // 分类各项的跳转
    this.getGoodCategory({ id: this.id });
  },
  watch: {
    id(id) {
      let target = this.$refs[id]; //点击的每一项
      target && this.scroll.scrollToElement(target[0], 500);
    },

  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  font-size: 0.14rem;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
}
.cateBox {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f5f5f9;
  .catd {
    width: 100%;
    height: 0.45rem;
    overflow: hidden;
    background-color: #fff;
    position: absolute;
    z-index: 5;
    .content {
      width: 6.75rem;
      height: 100%;
      display: flex;
      span {
        width: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
    }
  }
}
.cative {
  color: skyblue;
  border-bottom: 1px solid skyblue;
}
.cateGoryItem {
  width: 50%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>