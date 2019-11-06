<template>
  <div class="swiper-container seamless">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in topicList" :key="item.id" @click="topItem(item.id)">
        <img class="Pices" v-lazy="item.scene_pic_url" alt />
        <div class="topGoodSubTitle">
          {{item.title}}
          <span class="topGoodPrice">￥ {{item.price_info}}</span>
        </div>
        <div class="topGoodTitle">{{item.subtitle}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "swiper";
export default {
  props: ["topicList"],
  components: {},
  data() {
    return {
      seam: ""
    };
  },
  created() {
    this.$nextTick(() => {
      this.seam = new swiper(".seamless", {
        autoplay: false,
        speed: 3000,
        loop: true,
        freeMode: true,
        slidesPerView: 1,
        slidesPerGroup: 1
      });
    });
  },
  methods: {
      topItem(id){
        this.$router.push({path:`/topicDetail/${id}`})
      }
  },
};
</script>
<style scoped lang="scss">
.seamless {
  background: white;
  height: 2.5rem;
}
.swiper-slide {
  box-sizing: border-box;
  padding: 0.1rem;
  height: 2rem;
}
.topGoodSubTitle {
  margin-top: 0.1rem;
  height: 0.2rem;
  line-height: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .topGoodPrice {
    color: darkred;
  }
}
.topGoodTitle {
  height: 0.2rem;
  line-height: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.12rem;
  color: #ccc;
}
</style>