/**
 * @file: main.js.
 * @intro: 全局配置文件.
 * @author: hwh.
 * @email: 916879598@qq.com.
 * @Date: 2018/6/13 18:14.
 * @Copyright(©) 2018 by ive.
 *
 */

//导入Vue框架
import Vue from "vue";

//导入主视图文件
import App from "./App";

// 导入状态管理器
import store from './store'

//导入路由
import router from "./router";

//导入click事件
import FastClick from "fastclick";

//导入Vant-ui框架
import Vant from "vant";

//导入Vant-ui样式
import "vant/lib/vant-css/index.css";

import VueLoading from './plugins/loading/loading';

Vue.use(Vant);
Vue.use(VueLoading,{
    container: '#app'
})
//导入rem
import rem from "@common/js/rem";
//导入公共样式
import "@common/css/index";

import eruda from 'eruda'
import {getParam} from '@/common/js/app'

if (getParam().eruda){
    eruda.init()
}

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: {
        App
    },
    template: "<App/>"
});