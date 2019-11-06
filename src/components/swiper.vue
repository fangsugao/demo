<template>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banrlist" :key="item.id">
          <img v-lazy="flag?item.image_url:item.img_url" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  props: {
    banrlist:Array,
    flag:Boolean
  },
  components: {},
  data() {
    return {
      headper:'',
      swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }    
      };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    // console.log(this.banrlist)
  },
};
</script>
<style>

 .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color:#ccc;
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper{
      width: 100%;
      height: 100%;
  }
  .swiper-slide{
    width: 100%;
    height: 100%;
  }
  .swiper-slide>img{
      width: 100%;
      height: 100%;
  }
</style>