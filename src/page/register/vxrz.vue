<template>
    <div class="main-prod">
            <div class="wx-top">
                <div class="img-top">
                    <img src="../../common/images/xf/vx-top.png">
                </div>
                <div class="two-code">
                    <van-loading class="loading" v-if="get_config.pic?false:true" color="white" size="80px"/>
                    <img :src="get_config.pic" v-else>
                </div>
                <p class="gzhao1">长按识别扫一扫，添加您的专属微信客服({{get_config.name}})，进行额度初审</p>
                <!-- <p class="gzhao2"></p> -->
            </div>
            <div class="wx-bottom">
                <h3>客服审核步骤：</h3>
                <div class="step">
                    <p>第一步：添加您的专属微信客服({{get_config.name}})，微信号:({{get_config.wechatname}}) </p>
                    <p>第二步：提交基本资料，进行额度审批</p>
                    <p>第三步：审核通过，等待财务放款</p>
                </div>
            </div>
            <div class="footer">
                <p>* 本数据服务由 前海征信&鹏元征信提供</p>
            </div>
    </div>  
</template>
           
<script>
import { mapGetters } from 'vuex'
import {GET_CONFIG} from '@/store/getters/type';
export default{
    watch: {
        $route: {
            handler (route) {
                this.verifyPic = route.query.qrcode
            },
            immediate: true
        }
    },
    computed: {
        ...mapGetters({get_config: GET_CONFIG})
    }
}
</script>
<style scoped lang="scss">
        .main-prod{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: scroll;
            background-color: #F4F4F4;
                .wx-top{
                    width: 100%;
                    // height: 230px;
                    background-color: #fff;
                    overflow: hidden;
                    text-align: center;
                    .img-top{
                        width: 100%;
                        height: 240px;
                        img{
                            width: 100%;
                        }
                    }
                    .two-code{
                        width: 119px;
                        height: 119px;
                        border: none;
                        margin: 15px auto 15px auto;
                        background-color: #999;
                        position: relative;
                        .loading{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            // margin-top: -40px;
                            // margin-left: -40px;
                            transform: translate(-50%,-50%);
                        }
                        img{
                            width: 100%;
                            height: 100%;
                            display: block;
                            background: transparent;
                            border: 1px solid #fff;
                        }
                    }
                    p{
                        color: #101010;
                        font-size: 12px;
                    }
                    .gzhao1{
                        margin-bottom: 14px;
                        padding: 0 20%;
                        line-height: 18px;
                    }
                    .gzhao2{
                        margin-bottom: 15px;
                    }
                }
                .wx-bottom{
                    margin-top: 10px;
                    width: 100%;
                    // height: 150px;
                    background-color: #fff;
                    overflow: hidden;
                    padding-left: 37px;
                    box-sizing: border-box;
                    h3{
                        font-size: 14px;
                        // height: 47px;
                        // line-height: 47px;
                        color: #44ACFB;
                        margin-top: 20px;
                        // border-left: 4px solid #FFCF3E;
                        font-weight: bold;
                    }
                    .step{
                        width: 100%;
                        margin-top: 13px;
                        // background-color: pink;
                        p{
                            font-size: 12px;
                            color: #666;
                            line-height: 20px;
                            // height: 20px;
                            margin-bottom: 15px;
                        }
                    }
                }
                .footer{
                    width: 100%;
                    // height: 80px;
                    text-align: center;
                    overflow: hidden;
                    p{
                        font-size: 12px;
                        color: #DDD;
                        margin-top: 36px;
                        margin-bottom: 27px;
                    }
                }
        }
</style>