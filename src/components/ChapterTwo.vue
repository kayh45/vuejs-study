<template>
  <div id="ch2">
    <h3>목록 가져오기</h3>
      <ul class="w3-ul w3-hoverable w3-border">
        <li v-for="item in items" :key="item.id">
          {{ item.message }}
        </li>
      </ul>
    <hr />
    <h3>객체 가져오기</h3>
    <ul class="w3-ul w3-hoverable w3-border">
      <li v-for="(key, value) in object" :key="value.id">
          {{value}} : {{key}}
      </li>
    </ul>
    <hr />
    <h3>Todo 리스트 만들기</h3>
    <ul class="w3-ul w3-border" id="ul-todo">
      <li is="todo-item" v-for="(todo, index) in todos" :key="todo.id"
          :title="todo.title" v-on:remove="todos.splice(index, 1)">
      </li>
    </ul>
    <br>
    <tr>
      <td><input v-model="todoTitle" class="w3-input w3-border" type="text"></td>
      <td><button @click="addNewTodo" class="w3-button w3-blue">추가</button></td>
    </tr>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('todo-item', {
  // eslint-disable-next-line
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')" class="w3-button w3-red button-del">x</button>\
    </li>\
  ',
  props: ['title']
})

export default {
  name: 'ChapterTwo',
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.todoId++,
        title: this.todoTitle
      })
      this.todoTitle = ''
    }
  },
  data () {
    return {
      items: [
        {message: 'Foo'},
        {message: 'Bar'},
        {message: 'Baz'}
      ],
      object: {
        firstName: 'hyeon',
        lastName: 'kang',
        age: 27
      },
      todoId: 3,
      todoTitle: '',
      todos: [
        {
          id: 1,
          title: 'Vue.js 공부하기'
        },
        {
          id: 2,
          title: 'w3.css 공부하기'
        }
      ]
    }
  }
}
</script>

<style>
  .button-del {
    width: 20px;
    height: 20px;
    padding: 0 !important;
    float: right;
  }

  #ul-todo {
    width: 50%;
  }
</style>
