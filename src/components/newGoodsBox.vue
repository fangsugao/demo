<template>
  <div class="newGoodsBox">
    <div class="newGoodsItem" v-for="element in newGoodList" :key="element.id" @click="goodclick(element.id,element.name)">
      <img v-lazy="element.list_pic_url" alt />
      <p>{{element.name}}</p>
      <b class="Picolor">￥ {{element.retail_price}}</b>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    newGoodList: Array
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    goodclick(id,name){
      this.$router.push({path:`/goods/${id}`,query:{text:name}})
    }
  }
};
</script>
<style scoped lang="scss">
.newGoodsBox {
  background: white;
  display: flex;
  flex-wrap: wrap;
  .newGoodsItem {
    width: 50%;
    height: 2rem;
    text-align: center;
    img {
      height: 70%;
    }
    p {
      padding: 0.08rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .Picolor {
      color: darkred;
      font-weight: 100;
      height: 0.15rem;
      line-height: 0.15rem;
    }
  }
}
</style>