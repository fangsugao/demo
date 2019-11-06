<template>
  <div class="netitle">{{title}}</div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style scoped>
.netitle {
  margin-top: 0.1rem;
  height: 0.6rem;
  background: white;
  text-align: center;
  font-size: 0.2rem;
  line-height: 0.6rem;
  letter-spacing: 0.02rem;
  font-weight: bold;
}
</style>