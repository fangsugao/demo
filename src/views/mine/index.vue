<template>
  <div class="wrap">
    <main class="main">
      <div class="userMesWrap">
        <div class="userLogo"></div>
        <div class="userMsgs">
          <div>15323807318</div>
          <div>普通用户</div>
        </div>
      </div>
      <div class="userPower" >
        <div class="userP" v-for="(item,index) in userlist" :key="item.id" @click="clickME(index)">
          <i :class="item.icon"></i>
          <div>{{item.name}}</div>
        </div>
      </div>
      <div class="loginOut">退出登录</div>
    </main>
    <foots />
  </div>
</template>

<script>
import { foots } from "../../components";
import "@/assets/fonts/iconfont.css";
export default {
  data() {
    return {
      userlist: [
        {
          fn: true,
          icon: "iconfont icon-gongzuojilu",
          name: "我的收藏",
          id: 0,
          pathName:"collect"
        },
        {
          fn: true,
          icon: "iconfont icon-address",
          name: "地址管理",
          id: 1,
          pathName:"address"
        },
        {
          fn: false,
          icon: "iconfont icon-wodedingdan",
          pathName:'',name: "我的订单",
          id: 2
        },
        {
          fn: false,
          icon: "iconfont icon-riqixuanze",
          pathName:'',name: "周末拼单",
          id: 3
        },
        {
          fn: false,
          icon: "iconfont icon-youhuiquan-01",
          pathName:'',name: "优惠券",
          id: 4
        },
        {
          fn: false,
          icon: "iconfont icon-zhifu-01",
          pathName:'',name: "优选购",
          id: 5
        },
        {
          fn: false,
          icon: "iconfont icon-31",
          pathName:'',name: "我的红包",
          id: 6
        },
        {
          fn: false,
          icon: "iconfont icon-xiala",
          pathName:'',name: "会员plus",
          id: 7
        },
        {
          fn: false,
          icon: "iconfont icon-faxiandingdan",
          pathName:'',name: "邀请返利",
          id: 8
        },
        {
          fn: false,
          icon: "iconfont icon-quanbudingdan-01",
          pathName:'',name: "意见反馈",
          id: 9
        },
        {
          fn: false,
          icon: "iconfont icon-erji",
          pathName:'',name: "客服咨询",
          id: 10
        },
        {
          fn: false,
          icon: "iconfont icon-50",
          pathName:'',name: "账户安全",
          id: 12
        }
      ]
    };
  },
  components: { foots },
  methods: {
    clickME(i) {
      let flag = this.userlist[i].fn
      if(flag){
          this.$router.push({name:this.userlist[i].pathName,params:{id:this.userlist[i].name}})
      }else{
        alert(this.userlist[i].name+'还未完善')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.main {
  flex: 1;
  background: rgba(0.1, 0.1, 0.1, 0.1);
  overflow-y: scroll;
}

.userMesWrap {
  height: 1.5rem;
  background: url("http://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png")
    no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .userLogo {
    width: 0.8rem;
    height: 0.8rem;
    background: url("http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png")
      no-repeat;
    background-size: 100%;
    border-radius: 50%;
  }
  .userMsgs {
    font-size: 0.15rem;
    div {
      height: 0.35rem;
      display: flex;
      align-items: center;
      color: white;
    }
  }
}
.userPower {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  // height: 20rem;
  .userP {
    width: 33.3%;
    height: 1.3rem;
    background: white;
    border: 0.5px solid gainsboro;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 9;
    i {
      display: block;
      font-size: 0.3rem;
      text-align: center;
      color: #9e9e9e;
    }

    div {
      text-align: center;
    }
  }
  .userP:nth-child(1) {
    color: rgb(33, 150, 243);
    i {
      color: rgb(33, 150, 243);
    }
  }
  .userP:nth-child(2) {
    color: rgb(33, 150, 243);
    i {
      color: rgb(33, 150, 243);
    }
  }
}

.loginOut {
  height: 1rem;
  width: 100%;
  margin: 0.2rem 0;
  background: white;
  text-align: center;
  line-height: 1rem;
}
</style>