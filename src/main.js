import Vue from 'vue';
import 'lib-flexible/flexible';

import router from './config/router';
import App from './app';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
