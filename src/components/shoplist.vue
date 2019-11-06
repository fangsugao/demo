<template>
  <div class="cateGoryWrap">
    <div class="cateGoryBox" v-for="ele in shopArr" :key="ele.name">
      <div class="cateGoryName">{{ele.name}}</div>

      <cateGory :goodsList="ele.goodsList" :flag="true" :id="ele.id" :eleName="ele.name"></cateGory>
      
    </div>
  </div>
</template>
<script>
  import cateGory from './cateGoryGoods.vue'

  export default {
    props: {
      shopArr:Array,
    },
    components: {
      cateGory
    }
  };
</script>
<style scoped lang="scss">
.cateGoryName {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f9;
}
.cateGoryBox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>