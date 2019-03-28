# hwh

> jdx

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<meta charset="utf-8">
<meta name="Cache-Control" content="private">
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no">
<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=0.5,maximum-scale=0.5,minimum-scale=0.5">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"/>
<!-- 添加到主屏后的标题（iOS 6 新增） -->
<meta name="apple-mobile-web-app-title" content="">
<!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- 设置苹果工具栏颜色 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<meta name="format-detection" content="telephone=no, email=no" />
<!--清除缓存 微信浏览器缓存严重又无刷新-->
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<!-- 页面修改信息 -->
<meta name="revised" content="2018/6/13" />



token = 2ad19faf7868e68e9fa31c79d4ebedfa
<!-- 绑定银行卡 -->
http://www-test.xianjinbaobei1.com/csb/#/bankcard?token=token

<!-- 运营商认证 -->
http://www-test.xianjinbaobei1.com/csb/#/bankoper?token=token

<!-- 订单详情页 -->
http://www-test.xianjinbaobei1.com/csb/#/orderdetails/1?token=token

<!-- 个人信息采集授权声明协议 -->
http://www-test.xianjinbaobei1.com/csb/#/collment


<!-- 分销商合作协议 -->
http://www-test.xianjinbaobei1.com/csb/#/cooperate

<!-- 订货单 -->
http://www-test.xianjinbaobei1.com/csb/#/purchase

<!-- 登录 -->
http://www-test.xianjinbaobei1.com/csb/#/login

<!-- 注册 -->
http://www-test.xianjinbaobei1.com/csb/#/reg

<!-- 忘记密码 -->
http://www-test.xianjinbaobei1.com/csb/#/forget

<!-- 意见反馈 -->
http://www-test.xianjinbaobei1.com/csb/#/feedback

<!-- 合同列表/查看合同 -->
http://www-test.xianjinbaobei1.com/csb/#/contractlist

<!-- 分销订单列表 -->
http://www-test.xianjinbaobei1.com/csb/#/distribution

<!-- 查看物理 -->
http://www-test.xianjinbaobei1.com/csb/#/logistics

<!-- 我的银行卡 -->
http://www-test.xianjinbaobei1.com/csb/#/mybank

<!-- 我的银行卡 -->
http://www-test.xianjinbaobei1.com/csb/#/paymentpwd

<!-- 资质认证审核进度 -->
http://www-test.xianjinbaobei1.com/csb/#/aptitudeaudit

<!-- 分销商合同 -->
http://www-test.xianjinbaobei1.com/csb/#/cooperate

<!-- 订单合同 -->
http://www-test.xianjinbaobei1.com/csb/#/purchase

<!-- 注册协议 -->
http://www-test.xianjinbaobei1.com/csb/#/regments

## 米米茶商城
快捷延期链接：http://www-test.xianjinbaobei1.com/csb/#/my-loan/?status=2&login=1
快捷还款链接：http://www-test.xianjinbaobei1.com/csb/#/my-loan/?status=1&login=1


<!-- 实物商品购买页 -->
http://www-test.xianjinbaobei1.com/csb/#/stuffgoods/1?token=token

<!-- 实物订单列表商品详情页 -->
http://www-test.xianjinbaobei1.com/csb/#/goodsdetails/1?token=token

  // switch (err.response.status) {
  //   case 400:
  //     err.message = '请求错误'
  //     break

  //   case 403:
  //     err.message = '拒绝访问'
  //     break

  //   case 404:
  //     err.message = `请求地址出错: ${err.response.config.url}`
  //     break

  //   case 408:
  //     err.message = '请求超时'
  //     break

  //   case 500:
  //     err.message = '服务器内部错误'
  //     break

  //   case 501:
  //     err.message = '服务未实现'
  //     break

  //   case 502:
  //     err.message = '网关错误'
  //     break

  //   case 503:
  //     err.message = '服务不可用'
  //     break

  //   case 504:
  //     err.message = '网关超时'
  //     break

  //   case 505:
  //     err.message = 'HTTP版本不受支持'
  //     break

  //   default:
  // }