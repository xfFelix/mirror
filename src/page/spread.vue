<template>
    <!-- start -->
    <div class="download" id="fund" :style="{'background-image': `url(${config.banner})`}">
        <div class="box">
            <div class="load_input">
                <span class="icon iconfont icon-phone" :style="{color: config.color}"></span>
                <input type="text" class="phone" pattern="[0-9]*" maxlength="11" v-model="form.phone" placeholder="请输入手机号" :style="{color: config.color}">
            </div>
            <div class="load_input">
                <span class="icon iconfont icon-lock" :style="{color: config.color}"></span>
                <input type="text" maxlength="6" class="iimg" placeholder="请输入图片验证码" v-model="form.verify" id="iimg" :style="{color: config.color}">
                <img class="imgVerify" :src="imgUrl" @click="getVerify">
            </div>
            <div class="load_input" v-if="config.type == 1">
                <span class="icon iconfont icon-lock" :style="{color: config.color}"></span>
                <input type="text" maxlength="6" class="iimg" placeholder="请输入手机验证码" v-model="form.smscode" id="iimg" :style="{color: config.color}">
                <button class="send-code" @click="sendCode" :disabled="identify.disabled" :style="{color: config.color}">{{ identify.text}}</button>
            </div>
            <button class="confirm" :style="{color: config.color}" @click="register">
                马上拿钱
            </button>
            <!-- <confirmButton :disabled="false"><span>马上拿钱</span></confirmButton> -->
        </div>
        <transition name="fade">
          <detection v-model="showloading"></detection>
        </transition>
    </div>
     <!-- end -->
</template>
<script>
import {DEV_HOST} from '@api/config';
import { register, sendCode } from "@api";
import detection from '@/components/detection/';
import {mapActions } from 'vuex'
import {SET_CONFIG} from '@/store/actions/type'
// import confirmButton from '@/components/confirmButton';
export default {
  data () {
    return {
      config: this.$store.getters.GET_CONFIG,
      imgUrl: '',
      verifyId: 0,
      form: {
        phone: '',
        verify: '',
        smscode: ''
      },
      showloading: false,
      identify: {
        wait: 60,
        disabled: false,
        text: "获取验证码"
      }
    }
  },
  components: {
    detection
    // confirmButton
  },
  created () {
    this.getVerify()
  },
  methods: {
    ...mapActions({
      set_config: SET_CONFIG
    }),
    getVerify () {
      this.verifyId = new Date().getTime()*1000 + Math.round(Math.random()*999)
      this.imgUrl =  `${DEV_HOST}/api/pich5?verify_id=${this.verifyId}`
    },
    async register() {
      let {phone, verify, smscode} = this.form
      let {uid, bid, host, lid, type} = this.config
      let form = Object.assign({}, {
        phone,
        pic: verify,
        verify_id: this.verifyId,
        uid,
        bid,
        lid,
        prefix_link: host,
        type,
        smscode
      })
      if (!this.checkForm(form))return
      const {code, data, error} = await register(form)
      if (code !== 200) {
        this.getVerify()
        return this.$toast(error)
      } else{
        if (this.config.type === 1) {
          this.$toast({type: 'success', message: '登录成功', duration: 1000})
          setTimeout(() => {
            let info = Object.assign(this.config, data)
            this.set_config(info)
            this.$router.push({
              name: "vxrz"
            })
          }, 1000)
        } else {
          this.showloading = true
          setTimeout(() => {
              window.location.href = this.config.link
          }, 2000)
        }
      }
    },
    async sendCode () {
      this.identify.text = '短信发送中...'
      this.identify.disabled = true
      const {verify, phone} = this.form
      if (!verify) {
        this.identify.text = '获取验证码'
        this.identify.disabled = false
        return this.$toast('请填写图片验证码')
      }
      if (!phone){
        this.identify.text = '获取验证码'
        this.identify.disabled = false
        return this.$toast('请填写手机号')
      }
      const {code, data, error} = await sendCode({pic: verify, phone,verify_id: this.verifyId,bid: this.config.bid})
      if (code !== 200) {
        this.getVerify()
        this.identify.text = '获取验证码'
        this.identify.disabled = false
        return this.$toast(error)
      } else {
        if (data.pic) {
          this.identify.text = '登录成功'
          this.$toast({type: 'success', message: '登录成功', duration: 1000})
          setTimeout(() => {
            let info = Object.assign(this.config, data)
            this.set_config(info)
            return this.$router.push("/vxrz")
          }, 1000)
        } else {
          this.time()
        }
      }
    },
    checkForm (form) {
      if (!form.phone) {
        this.$toast('请填写手机号')
        return false
      } else if (!form.pic) {
        this.$toast('请填写图片验证码')
        return false
      }
      if (this.config.type === 1) {
        if (!form.smscode) {
          this.$toast('请填写短信验证码')
          return false
        }
      }
      return true
    },
    //验证码倒计时
    time() {
      if (this.identify.wait === 0) {
        this.identify.disabled = false;
        this.identify.wait = 60;
        this.identify.text = '获取验证码'
      } else {
        this.identify.disabled = true;
        this.identify.wait--;
        this.identify.text = `重新获取(${this.identify.wait})`
        setTimeout(() => {
          this.time();
        }, 1000);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./spread.scss";
</style>
