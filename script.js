Vue.component("todo-item", {
  template: '\
    <li class="lead">\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')" class="btn btn-danger">Удалить</button>\
    </li>\
  ',
  props: ["title"]
})

var app = new Vue({
  el: "#app-todo",
  data: {
    newTodoText: "",
    todos: [
      {
        id: 1,
        title: "Помыть посуду"
      },
      {
        id: 2,
        title: "Сварить суп"
      },
      {
        id: 3,
        title: "Забрать посылку"
      },
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ""
    }
  }
})
