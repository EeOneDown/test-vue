Vue.use(httpVueLoader);

new Vue({
  el: "#app",
  components: {
    'app': httpVueLoader('App.vue')
},
})