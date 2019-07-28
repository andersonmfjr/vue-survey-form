import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueAwesome from 'vue-awesome';
import VFC from 'vfc';
import 'vfc/dist/vfc.css';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.use(VeeValidate);
Vue.component('v-icon', VueAwesome);
Vue.use(VFC);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
