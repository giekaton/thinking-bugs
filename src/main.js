import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    // Needed for spa-prerender-plugin
    document.dispatchEvent(new Event('render-event'))
  }
})