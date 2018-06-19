import routes from './routes'

(async () => {
  const VueModule = await import("../node_modules/vue/dist/vue.esm")
  const VrModule = import("../node_modules/vue-router/dist/vue-router")
  const VuetifyModule = await import("../node_modules/vuetify/dist/vuetify")
  const Vue = VueModule.default
  const Vr = VrModule.default

  window.Vue = Vue

  //register router
  VrModule.then(Vr => {
    Vue.use(Vr.default)

    const router = new Vr.default({
      routes
    })

    return new Vue({
      router
    }).$mount('#app')
  
  })

  Vue.use(VuetifyModule.default)

})();
