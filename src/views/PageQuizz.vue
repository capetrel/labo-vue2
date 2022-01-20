<template>
  <div class="column is-full container">

    <main>
      <section class="section">
        <div class="container has-text-centered mb-4">
            <h1 class="title is-size-1 pb-4">
                Quizz
            </h1>
            <h2 class="subtitle is-size-3">
                Testez votre culture sur le thème :
            </h2>
        </div>
      </section>

      <section class="section container columns">
        <quizz></quizz>
      </section>

    </main>

  </div>

</template>

<script>
import Quizz from '../components/quizz/Quizz'

export default {
  name: 'PageQuizz',
  components: { Quizz }
}
</script>
