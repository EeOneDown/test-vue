var app = new Vue({
  el: "#app",
  data: {
    message: "Привет, Vue!"
  }
})

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Вы загрузили эту страницу: " + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Изучить JavaScript" },
      { text: "Изучить Vue" },
      { text: "Создать что-нибудь классное" }
    ]
  }
})

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Привет, Vue.js!"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("")
    }
  }
})

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Привет, Vue!"
  }
})

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
})

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      {id: 1, text: "Овощи"},
      {id: 2, text: "Сыр"},
      {id: 3, text: "Что там еще люди едят?"}
    ]
  }
})

var app8 = new Vue({
  el: "#app-8",
  data: {
    message: "старый текст",
    rawHTML: "<span style=\"color: red\">Текст должен быть красным.</span>",
    dynamicId: 1,
    isButtonDisabled: true,
    number: 8,
    ok: true,
    id: 8
  }
})

var app9 = new Vue({
  el: "#app-9",
  data: {
    seen: true,
    url: "https://eeonedown.github.io/test-vue/"
  },
  methods: {
    showHide: function () {
      this.seen = !this.seen
    }
  }
})
