<template>
    <div class="loginBox">
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div class="loginMain">
          <div class="inputWrap onePx_bottom">
            <input type="text" v-model="mobile"  placeholder="请输入手机号码15323807318" @change="telphone"/>
          </div>
          <div class="inputWrap onePx_bottom">
            <input type="password" v-model="password" placeholder="请输入登录密码123456" @change="passChange" />
          </div>
          <div class="loginBtn">
            <button @click="submit">登录</button>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        data() {
          return {
              mobile:'15323807318' || window.localStorage.getItem('nideShopUser'),
              password:'123456' || window.localStorage.getItem('password'),
          }
        },
        methods: {
          telphone(e){
              this.mobile=e.target.value
          },
          passChange(e){
            this.password=e.target.value
          },
          submit(){
            if(this.mobile !== '15323807318'){
                alert('手机号错误，请重新输入！')
            }

            if(this.password !== '123456'){
               alert('密码错误，请重新输入！')
            }

            this.$store.dispatch('login/getUserLogin',{
              mobile:this.mobile,
              password:this.password
            })
            
            this.$router.history.replace('/home')
          }
        },
    }
</script>

<style lang="scss">
.loginBox{
    width: 100%;
    height: 100%;
    background: white;
    .logo{
        width: 100%;
        padding: .5rem 0 .25rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 1.6rem;
        }
    }
    .loginMain{
        padding: .9rem .2rem 0 .2rem;
        .inputWrap{
            height: .9rem;
            display: flex;
            justify-content: center;
            align-items: center;
            input{
                display: block;
                height: 80%;
                border: none;
                width: 100%;
                font-size: .2rem;
            }
        }
        .loginBtn{
            margin-top: .5rem;
            button{
              width: 100%;
              height: .45rem;
              color: #fff;
              background-color: #108ee9;
              border: 1PX solid #108ee9;
              border-radius: 5px;
              font-size: .18rem;
            }
        }
        .onePx_bottom{
           &{
                position: relative;
            }
            &::after{
                content:'';
                position: absolute;
                left: 0;right: 0;
                bottom: 0;
                height: 1px;
                background: #ededed;
                transform:scaleY(0.5)
            }
        }
    }
}
.login{
    height: 100%;
}
</style>