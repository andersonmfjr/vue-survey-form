import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import FontAwesome from './assets/fontawesome';

Vue.use('fa-icon', FontAwesome);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
