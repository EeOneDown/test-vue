httpVueLoader.register(Vue, './src/hello.vue');

new Vue({
  el: "#app",
  components: [
    'hello'
  ]
})