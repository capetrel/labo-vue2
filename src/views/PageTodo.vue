<template>

  <section class="section column is-full">
    <todos></todos>
    <todos></todos>
  </section>

</template>

<script>
import Todos from '../components/todos/Todos'

export default {
  name: 'PageTodo',
  components: { Todos }
}
</script>
