/**
 * Created by zzmhot on 2017/3/23.
 *
 * 状态管理器
 *
 * @author: hwh
 * @github: ''
 * @email: 916879598@qq.com
 * @Date: 2017/11/11 1:17
 * @Copyright(©) 2017 by jwj.
 *
 */

import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

// 引入模块
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './states'
import createLogger from 'vuex/dist/logger' //每次修改会去控制台打一个状态

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})