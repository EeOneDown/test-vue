new Vue({
  el: '#my-app',
  components: {
    'hello': httpVueLoader('src/hello.vue')
  }
})