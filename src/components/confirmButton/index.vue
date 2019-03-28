<template>
  <button :disabled="disabled">
    <div :hidden="loading" @click="loading = !loading">
      <slot></slot>
    </div>
    <div class="loaing_container"  :hidden="!loading">
        <svg id="loading" width="24" height="24" viewBox="0 0 24 24">
          <g fill="none"  stroke="currentColor">
            <path id="loadingPath" ref="loadingPath" stroke-width="1" d="M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.9 1 12 1"/>
            <path id="check" ref="check" stroke-width="0"  d="M3.5 13.5l4 4 11-11"/>
            <path id="cross" ref="cross" stroke-width="0" d="M5.2 5.2l13.6 13.6m0-13.6L5.2 18.8"/>
          </g>
        </svg>
    </div>
  </button>
</template>
<script>
import anime from 'animejs'
export default {
  props: {
    disabled: false,
  },
  data () {
    return {
      loading: false,
      animation:{
        type:Object
      }
    }
  },
  mounted () {
    this.loadingAnimationHandler(this.loading)
  },
  watch: {
    loading : {
      handler (boo) {      
        this.loadingAnimationHandler(boo)
      }
    }
  },
  methods: {
    loadingAnimationHandler(boo) {
      console.log(boo)
      if(boo){
        this.animation = anime({
          targets:this.$refs.loadingPath,
          strokeDashoffset: [anime.setDashoffset, 0],
          rotate:360,
          direction: 'alternate',
          easing: 'easeInOutSine',
          duration: 500,
          loop:true
        })
      }else{
        this.$refs.cross.style.strokeWidth = "0";
        this.$refs.check.style.strokeWidth = "0";
        this.animation = null;
        document.activeElement.blur();
      }
    },
    fail(){
      this.animation.pause();
      this.$.cross.style.strokeWidth = "1";
      var success = anime({
        targets:this.$refs.loadingPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        rotate:0,
        duration: 100,
        loop:false,
        easing:'easeInOutQuad'
      });
      var path = anime({
        targets: this.$refs.cross,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 300,
        complete:function () {
          setTimeout(()=>{
            this.dispatchEvent(new CustomEvent('finish',{detail:{type:'fail'}}),false);
          }, 300)
        }.bind(this)
      })
    },
    success(){
      this.animation.pause();
      this.$.check.style.strokeWidth = "1";
      var success = anime({
        targets:this.$refs.loadingPath,
        strokeDashoffset: [anime.setDashoffset, 0],
        rotate:0,
        duration: 100,
        loop:false,
        easing:'easeInOutQuad'
      });
      var path = anime({
        targets: this.$refs.check,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 300,
        complete:function () {
          setTimeout(()=>{
            this.dispatchEvent(new CustomEvent('finish',{detail:{type:'success'}}),false);
          }, 300)
        }.bind(this)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
button{
    max-width: 100%;
    width: 80%;
    border:none;
    border-radius: 25px;
    margin-top: 15px;
    padding: 10px;
    font-size: 15px;
    color: #fff;
    transition: transform .3s,borderRadius .3s,background .1s;
}
button:hover{
  outline: none;
  background: red;
  transform: translateY(0px);
}
button:focus{
  outline: none;
}
.loaing_container{
  width: 24px;
  height: 24px;
  overflow: visible;
  position: relative;
}
#success{
  position: absolute;
  left: 0;
  top: 0;
}
#loadingPath{
  transform-origin: 50% 50%;
}
</style>
