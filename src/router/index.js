import Vue from "vue";
import Router from "vue-router";
import hooks from './hooks/';

import spread from '@page/spread';

//微信认证
import vxrz from '@page/register/vxrz'
//认证页面
import Renzheng from '@page/register/renzheng';
//成功页面
import success from '@page/register/success';


Vue.use(Router);

let routes = [{
    path: '/',
    name: "spread",
    component: spread
  },{
    path: "/vxrz",
    name: "vxrz",
    component: vxrz,
    meta: {
      title: "微信认证",
      showTrue: true
    }
  },{
    path: "/renzheng",
    name: "renzheng",
    component: Renzheng,
    meta: {
      title: '认证中心',
      showTrue: true
    }
  },{
    path: "/success",
    name: "success",
    component: success,
    meta: {
      title: '成功页面',
      showTrue: true
    }
  }
]

const router = new Router({
  routes
})

hooks(router)

export default router
