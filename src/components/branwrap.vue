<template>
    <div class="brandWrap">
      <div class="brandItem" v-for="ele in brandList" :key="ele.name" @click="clickme(ele.id,ele.name)">
        <div class="brandItemName">{{ele.name}}</div>
        <div class="brandItemMinPrice">{{ele.floor_price}}元起</div>
        <img v-lazy="ele.new_pic_url" alt />
      </div>
    </div>
</template>
<script>
export default {
  name:"",
    props:['brandList'],
    methods:{
      clickme(id,name){
        console.log(id,name)
        this.$router.push({name:"brandDetail",params:{id},query:{name}})
      }
    }
}
</script>
<style scoped lang="scss">
.brandWrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .brandItem {
    width: 50%;
    height: 1.2rem;
    position: relative;
    overflow: hidden;
    .brandItemName {
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
      font-size: 0.15rem;
    }
    .brandItemMinPrice {
      position: absolute;
      top: 0.3rem;
      left: 0.1rem;
      font-size: 0.1rem;
      color: darkgrey;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>