<template>
    <div class="circleProgress_wrapper" v-if="deteShow">
         <svg class="circle1" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
            <circle class="circle2" cx="70" cy="70" r="55" fill="none" stroke="#666" stroke-width="6" /> 
            <circle class="circle3" cx="70" cy="70" r="55" fill="none" stroke="#41B883" stroke-width="6" stroke-dasharray="346" :stroke-dashoffset="dashOffsetCircle" />
        </svg>
        <div class="text">
            <p v-if="gou">黑名单检测中</p>
            <p v-else style="font-size:70px;color:#41B883">
                <van-icon class="gou" name="success" />
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'deteShow',
            event: 'showloading'
        },
        props:{
            deteShow: {
                type: Boolean,
                default: false
            }
        },
        data (){
            return {
                dashOffsetCircle:346, //圆的周长
                gou:true,
            }
        },
        mounted(){
            
        },
        methods: {
            
            time(){
                
                this.dashOffsetCircle = this.dashOffsetCircle-4;
                if(this.dashOffsetCircle>0){
                    setTimeout(() => {
                        this.time();
                    }, 10);
                }else{
                    this.dashOffsetCircle = 0;
                    this.gou = false;
                    setTimeout(() => {
                        this.$emit('showloading', false)
                    },300)
                }
            }
        },
        watch:{
             deteShow: function (newQuestion, oldQuestion) {
                if (newQuestion) {
                    this.dashOffsetCircle = 346
                    this.gou = true
                    this.time();
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    .circleProgress_wrapper{
        width: 240px;
        height: 240px;
        margin: auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
    }
    .circle1{
        margin: auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .text{
            width: 240px;
            height: 240px;
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            p{
                width: 100%;
                height: 100%;
                line-height: 240px;
                text-align: center;
                color: #000;
                font-weight: 600;
                .gou{
                   line-height: 247px; 
                }
            }
    }
</style>