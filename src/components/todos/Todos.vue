<template>
  <div class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input id="todoName" class="new-todo" type="text" placeholder="Ajouter une tâche" v-model="newTodoName" @keyup.enter="addTodo">
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone"><label for="toggle-all">Marqué comme complété</label>
      <ul class="todo-list">
        <li class="todo" v-for="(todo, key) in filteredTodos" :key="key" :class="{completed: todo.completed, editing: todo === editing}">
          <div class="view">
            <label for="completed" style="display: none"></label><input class="toggle" id="completed" type="checkbox" v-model="todo.completed">
            <label for="todoName" @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input id="edit-todo" class="edit" type="text" v-model="todo.name" @keyup.enter="editCompleted" @keyup.esc="editCanceled" @blur="editCompleted" v-focus="todo === editing">
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="hasTodo">
      <span class="todo-count"><b>{{ remaining }}&nbsp;</b>Tâches à faire</span>
      <ul class="filters">
        <li> <a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
        <li> <a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">À&nbsp;faire</a></li>
        <li> <a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
      </ul>
      <button class="clear-completed" v-show="completed" @click.prevent="deleteCompleted">Supprimer finie(s)</button>
    </footer>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  name: 'Todo',
  props: {
    value: { type: Array, default () { return [] } }
  },
  data () {
    return {
      todos: this.value,
      newTodoName: '',
      filter: 'all',
      editing: null,
      oldTodo: ''
    }
  },
  watch: {
    value (value) {
      this.todos = value
    }
  },
  computed: {
    allDone: {
      set (value) {
        this.todos.forEach(todo => {
          todo.completed = value
        })
      },
      get () {
        return this.remaining === 0
      }
    },
    hasTodo () {
      return this.todos.length > 0
    },
    remaining () {
      return this.todos.filter(todo => !todo.completed).length
    },

    completed () {
      return this.todos.filter(todo => todo.completed).length
    },
    filteredTodos () {
      if (this.filter === 'todo') {
        return this.todos.filter(todo => !todo.completed)
      } else if (this.filter === 'done') {
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    }
  },
  methods: {
    addTodo () {
      this.todos.push({ name: this.newTodoName, completed: false })
      this.newTodoName = ''
    },
    editTodo (todo) {
      this.editing = todo
      this.oldTodo = todo.name
    },
    editCompleted () {
      this.editing = null
    },
    editCanceled () {
      this.editing.name = this.oldTodo
      this.editCompleted()
    },
    deleteTodo (todo) {
      this.todos = this.todos.filter(i => i !== todo)
      this.$emit('input', this.todos)
    },
    deleteCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
      this.$emit('input', this.todos)
    }
  },
  directives: {
    focus (el, value) {
      if (value) {
        Vue.nextTick(() => {
          el.focus()
        })
      }
    }
  },
  mounted () {}
}
</script>

<style src="../../assets/css/todo.css"></style>
