<template>
  <div class="wrap">
    <div class="searchWrap">
      <div class="searchInput">
          <router-link to="/goodsSearch">搜索商品，共239款好物</router-link>
      </div>
    </div>
    <div class="main">
      <div class="cateR" v-if="classList.length">
        <ul>
          <li
            v-for="(item,index) in classList"
            :class="{lactive:ind==index}"
            @click="clickme(item.id,index)"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="cateL">
        <div class="cateBaner">
          <img v-if="classList.length" v-lazy="classList[ind].wap_banner_url" alt />
        </div>
        <div class="catetitle" v-if="classList.length">——&emsp;{{classList[ind].name}}&emsp;——</div>
        <div class="heng" v-if="renderArr.length">
          <div
            class="newGoodsItem"
            v-for="element in renderArr"
            :key="element.id"
            @click="goCateDetail(element.id)"
          >
            <img v-lazy="element.wap_banner_url" alt />
            <p>{{element.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <foots />
  </div>
</template>

<script>
import { foots } from "@/components";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      txt: "商品分类",
      ind: 0,
      id: "1005000"
    };
  },
  components: { foots },
  computed: {
    ...mapState("catalog", ["classList", "renderArr"])
  },
  methods: {
    ...mapActions("catalog", ["getCategorys", "category"]),
    clickme(id, ind) {
      this.ind = ind;
      this.category(id);
    },
    goCateDetail(id) {
      this.$router.push({ name: "categorys", params: { id } });
    }
  },
  created() {
    this.getCategorys();
    this.category(this.id);
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
}
.searchWrap{
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
    .searchInput{
      width: 90%;
      height: 70%;
      background: #ededed;
      border-radius: .05rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .14rem;
      a{
        color: #666;
      }
    }
}
.main {
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
  .cateR {
    width: 25%;
    flex-shrink: 0;
    position: relative;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 0.45rem;
        display: flex;
        align-items: center;
        justify-content: center;
        // transition: 2s all linear;
      }
      .lactive {
        color: rgb(103, 192, 228);
        border-left: 1px solid rgb(103, 192, 228);
      }
    }
  }
  .cateL {
    flex: 1;
    overflow-y: scroll;
    padding: 0.1rem;
    .catetitle {
      color: #2196f3;
      text-align: center;
      height: 0.45rem;
      line-height: 0.45rem;
    }
    .cateBaner {
      width: 100%;
      height: 1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .heng {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .newGoodsItem {
        width: 50%;
        height: 1.5rem;
        text-align: center;
        padding: 0.2rem 0;
        img {
          height: 50%;
        }
        p {
          padding: 0.08rem 0;
        }
        .Picolor {
          color: darkred;
          font-weight: 100;
          height: 0.15rem;
          line-height: 0.15rem;
        }
      }
    }
  }
}
</style>