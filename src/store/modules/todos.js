const state = {
  todos: [{
    name: 'Première tâche',
    completed: true
  }]
}

const mutations = {
  ADD_TODO: (state, name) => {
    state.todos.push({
      name: name,
      completed: false
    })
  },
  DELETE_TODO: (state, todo) => {
    state.todos.splice(state.todos.indexOf(todo))
  },
  EDIT_TODO: (state, todo, oldTodo) => {
    oldTodo = todo.name
  }
}

const actions = {
  addTodo: (store, name) => {
    store.commit('ADD_TODO', name)
  },
  deleteTodo: (store, todo) => {
    store.commit('DELETE_TODO', todo)
  },
  editTodo: (store, todo, oldTodo) => {
    store.commit('EDIT_TODO', todo)
  }
}

const getters = {
  todos: (state) => state.todos,
  completedTodos: state => state.todos.filter(todo => todo.completed),
  remainingTodos: state => state.todos.filter(todo => !todo.completed),
  remainingTodosCount: state => getters.remainingTodos(state).length,
  completedTodosCount: state => getters.completedTodos(state).length
}

export default { state, mutations, actions, getters }
