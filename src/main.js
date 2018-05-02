// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './index'
import VueRouter from 'vue-router'
import router from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)
//let router = new VueRouter({
//	mode:'history',
//	routes:[
//		{path:"/",component:Index}
//	]
//})
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
