import {get_config} from '@api'
import store from '@store'
import {Toast} from 'vant';
import {SET_CONFIG} from '@store/actions/type'

export default async (to, from, next) => {
  let host = location.hostname.split('.')[0]
  if (to.path === '/') {
    const {data, code , error} = await get_config({link_name: host})
    if (code !== 200) {
      Toast(error)
    }
    const config = Object.assign(data, {host})
    store.dispatch(SET_CONFIG, config)
  }
  next()
}