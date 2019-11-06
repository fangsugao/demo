<template>
  <div class="wrap">
    <headers :txt="title"></headers>
    <div class="bg"></div>
    <div class="main">
      <div class="collectItem">
        <div class="collectName">李狗蛋</div>
        <div class="collectAddress">
          <p>12345678901</p>
          <p>北京市 海定区 上地街道</p>
          <p>北京市 海定区 上地街道 上地七街</p>
        </div>
        <div class="collectDelete">删除</div>
      </div>
      <div class="collectItem">
        <div class="collectName">李狗蛋</div>
        <div class="collectAddress">
          <p>12345678901</p>
          <p>北京市 海定区 上地街道</p>
          <p>北京市 海定区 上地街道 上地七街</p>
        </div>
        <div class="collectDelete">删除</div>
      </div>
      <div class="collectItem">
        <div class="collectName">李狗蛋</div>
        <div class="collectAddress">
          <p>12345678901</p>
          <p>北京市 海定区 上地街道</p>
          <p>北京市 海定区 上地街道 上地七街</p>
        </div>
        <div class="collectDelete">删除</div>
      </div>
      <div class="collectItem">
        <div class="collectName">李狗蛋</div>
        <div class="collectAddress">
          <p>12345678901</p>
          <p>北京市 海定区 上地街道</p>
          <p>北京市 海定区 上地街道 上地七街</p>
        </div>
        <div class="collectDelete">删除</div>
      </div>
    </div>
    <div class="addMeta" @click="add">+ 添加地址</div>
    <div :class="['addressPos',{'addresanmit':flag}]">
      <div class="addresHead">添加地址</div>
      <div class="addresWrap">
        <div class="addressIpt">
          <input type="text" name="name" placeholder="姓名" v-model="obj.name" />
        </div>
        <div class="addressIpt">
          <input type="text" name="mobile" placeholder="电话号码" v-model="obj.mobile" />
        </div>
        <div>北京市/北京市/东城区</div>
        <div class="addressIpt">
          <input type="text" name="address" placeholder="详细地址" v-model="obj.address" />
        </div>
        <div>
          设置默认地址
          <input name="is_default" type="checkbox" v-model="obj.is_default" />
        </div>
      </div>
      <div class="addresFooter">
        <button class="cancel" @click="cacel">取消</button>
        <button class="save">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import { headers } from "@/components";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      title: "地址管理",
      flag: false,
      obj:{
        name:'',
        mobile:'',
        address:'',
        is_default:false
      }
    };
  },
  components: { headers },
  methods: {
    ...mapActions("address", ["getAddressList"]),
    add() {
      this.flag = true;
    },
    cacel() {
      this.flag = false;
    }
  },
  computed: {
    ...mapState("address", ["addressList"])
  },
  created() {
    this.getAddressList();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  background-size: auto;
  position: relative;
  .bg {
    width: 100%;
    height: 0.1rem;
    overflow: hidden;
    background: url("/img/line.png") round;
  }
  .main {
    flex: 1;
    padding: 0.1rem;
    padding-top: 0.55rem;
    .collectItem {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      margin: 0.05rem auto;
      .leftBorder {
        border-left: 0.02rem solid rgb(63, 172, 235);
      }
      .collectName {
        padding: 0.15rem;
        color: #ff9500;
      }
      .collectAddress {
        flex: 1;
        p {
          font-size: 0.12rem;
        }
      }
      .collectDelete {
        padding: 0.15rem;
        display: flex;
        align-items: center;
      }
    }
  }

  .addMeta {
    width: 100%;
    height: 0.45rem;
    background: rgb(63, 172, 235);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .addMeta:active {
    background: rgb(9, 127, 206);
  }
  .addressPos {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    z-index: 22;
    transition: all 0.5s linear;
    .addresHead {
      width: 100%;
      height: 0.45rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 13px 0px #ccc;
    }
    .addresWrap {
      flex: 1;
      padding: 0.1rem 0;
      div{
        height: .45rem;
        line-height: .45rem;
          text-indent: 0.2rem;
          border-bottom: 1px solid #ccc;
      }
      .addressIpt {
        width: 100%;
        height: 0.45rem;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 90%;
          height: 95%;
          border: 0;
          outline: none;
        }
      }
    }
    .addresFooter {
      width: 100%;
      height: 0.45rem;
      display: flex;
      button {
        flex: 1;
        border: 0;
        outline: 0;
      }
      .cancel {
        background: #ccc;
      }
      .save {
        background: #72adde;
      }
      .save:active {
        background: #2d96ec;
      }
    }
  }
  .addresanmit {
    left: 0;
  }
}
</style>