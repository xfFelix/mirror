import hostToken from './beforEach/hostToken';

export default (router) => {
  router.beforeEach(hostToken)
}