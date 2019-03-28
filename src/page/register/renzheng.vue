<template>
  <div class="index">
    <img src="~@common/images/xf/renzheng-banner@2x.png" class="banner">
    <h2 class="title">认证提额</h2>
    <div class="form">
      <div class="form-item">
        <span class="logo weixin"></span>
        <div class="content">
          <span class="name" @click="vxReg">微信认证</span>
          <span class="text">已认证</span>
        </div>
      </div>
      <div class="form-item">
        <span class="logo base"></span>
        <div class="content" @click="showPop = true">
          <span class="name">基础认证</span>
          <span class="text">已认证</span>
        </div>
      </div>
    </div>
    <button class="confirm" @click="regTap">提交审核</button>
    <transition name="slideDown">
      <div class="popup-ts" v-if="showPop">
          <div class="form-box">
            <div class="input-item border-1px">
              <input class="inps" type="text" style="width:220px" placeholder="请输入姓名" pattern="[0-9]*" maxlength="8" v-model="form.name">
            </div>
            <div class="input-item border-1px">
              <input class="inps" type="text" style="width:220px" pattern="^([0-9]){15,18}(x|X)?$" minlength="15" maxlength="18" placeholder="请输入身份证号码" v-model="form.idNumber">
            </div>
            <div class="input-item border-1px">
              <input class="inps" type="text" style="width:220px" placeholder="请输入年龄" pattern="[0-9]*" maxlength="4" v-model="form.age">
            </div>
            <div class="input-item border-1px">
              <input class="inps" type="text" style="width:220px" pattern="[0-9]*" maxlength="4" placeholder="请输入芝麻分" v-model="form.zhima">
            </div>
          </div>
          <button class="confirm" @click="mediTap">立即认证</button>
        </div>
    </transition>
  </div>
</template>
<script>
// import { getAuth, appAuth, quotaAuth, qitaAuth } from "@api";
const STATUS_OK = 200;
export default {
  data () {
    return {
      data: {},
      v_config: this.$store.getters.GET_CONFIG,
      phone: this.$store.getters.GET_CONFIG.phone,
      showPop: false,
      form:{
        name:'',
        idNumber:'',
        zhima:'',
        age:''
      }
    }
  },
  computed: {
    
  },
  created () {
  },
  methods: {
    async vxReg(){
      this.$router.push('vxrz')
    },
    async mediTap(){
      const { name, idNumber, zhima, age } = this.form;
      if (!name) {
        this.$toast("请输入姓名!");
        return false;
      }
      if (!idNumber) {
        this.$toast("请输入身份证号码!");
        return false;
      }
      if (!age) {
        this.$toast("请输入年龄!");
        return false;
      }
      if (!zhima) {
        this.$toast("请输入芝麻分!");
        return false;
      }
      this.showPop = false
    },
    async regTap(){
      this.$router.push('success')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@common/css/mixin.scss';

.index{
  color: #313131;
  font-size: 18px;
  font-family:PingFangSC-Regular;
  .banner{
    display: block;
    width: 100%;
    border: none;
  }
  h2{
    background: #fff;
    padding: 0 15px;
    height: 47px;
    line-height: 47px;
    font-weight: 500;
    &::before{
      content: '';
      display: inline-block;
      width: 4px;
      height: 16.5px;
      background: #FFCF3E;
      border-radius: 2px;
      line-height: 16.5px;
      margin-right: 10px;
    }
  }
  .form{
    .form-item{
      background: #fff;
      padding: 0 15px;
      height: 60px;
      display: flex;
      align-items: center;
      margin-top: 5px;
      .logo{
        display: block;
        width: 32px;
        height: 32px;
        background-size: 32px 32px;
        background-repeat: no-repeat;
        border-radius: 5px; /*no*/
        &.base{
          @include bg-image('icon-information-d');
        }
        &.weixin{
          @include bg-image('icon-wx-d');
        }
        &.app{
          @include bg-image('icon-app-d');
        }
        &.extra{
          @include bg-image('icon-Amount-d');
        }
        &.other{
          @include bg-image('icon-other-d');
        }
      }
      .content{
        margin-left: 15px;
        flex: 1;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        .text{
          color: #999;
          font-size: 15px;
          &.red{
            color: #F44157;
          }
        }
      }
    }
  }
  .confirm{
    border: none;
    display: block;
    background-color: #FFCF3E;
    border-radius: 45px;
    width: 290px;
    height: 45px;
    color: #fff;
    margin: 40px auto 0;
    font-size: 18px;
    font-weight: 400;
    &:disabled{
      background: rgba(203,203,203,1);
    }
  }
  .pop{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    .pop-wrapper{
      position: absolute;
      top: 180px;
      width: 320px;
      height: 220px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      border-radius: 7px;
      box-sizing: border-box;
      padding: 25px 25px;
      .pop-logo{
        width: 53px;
        height: 64px;
        border: none;
        display: block;
        margin: 0 auto;
      }
      .title{
        margin-top: 16px;
        font-size: 18px;
        font-weight: 500;
        color: #313131;
        text-align: center;
      }
      .btns{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .reject{
          display: block;
          width: 120px;
          height: 45px;
          border-radius: 25px;
          background-color: transparent;
          border: 1px solid rgb(211, 211, 211); /*no*/
        }
        .resolve{
          display: block;
          width: 120px;
          height: 45px;
          border-radius: 25px;
          background-color: rgb(255,207,62);
        }
      }
    }
  }
  .popup-ts {
    position: fixed;
    top: 15%;
    width: 80%;
    left: 10%;
    padding-top:60px;
    padding-bottom: 60px;
    background: #FFFFFF;
    z-index: 999;
    border-radius: 8px;
    display: block;
    .input-item{
      margin: 10px 10px 16px 10px;
      border: 1px solid #DDDDDD;
      clear: both;
      box-sizing: content-box;
      height: 38px;
      background-color: white;
      color: #555;
      border-radius: 100px;
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
      .inps {
          height: 38px;
          font-size: 16px;
          border: none;
          outline: none;
          margin-top: 0px;
          line-height: 38px;
          padding: 0;
      }
    }
  }
}
</style>
