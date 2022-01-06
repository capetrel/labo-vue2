<template>
  <main class="column">

    <hr>
    <!-- Lighbox -->
    <section class="section">
      <div class="columns is-centered is-vcentered images-lightbox mt-6 mb-5 is-flex-wrap-wrap">
        <div class="column images-wrapper is-full" v-if="title === '20'">
          <a class="link" :href="'https://picsum.photos/id/2'+n+'/800/400'" v-lightbox v-for="(img, n) in 9" :key="n">
            <img class="image" :src="'https://picsum.photos/id/2'+n+'/150/150'" alt="Image aléatoire">
          </a>
        </div>
        <div class="column images-wrapper is-full" v-if="title === '50'">
          <a class="link" :href="'https://picsum.photos/id/5'+n+'/800/400'" v-lightbox v-for="(img, n) in 9" :key="n">
            <img class="image" :src="'https://picsum.photos/id/5'+n+'/150/150'" alt="Image aléatoire">
          </a>
        </div>
        <div class="column buttons columns is-centered is-full">
          <button @click="title = '20'" class="button">Catégorie 20</button>
          <button @click="title = '50'" class="button">Catégorie 50</button>
        </div>
        <lightbox></lightbox>
      </div>
    </section>

  </main>
</template>

<script>
import Lightbox from '../components/lightbox/Lightbox'

export default {
  name: 'PageHome',
  data () {
    return {
      title: '20'
    }
  },
  components: {
    Lightbox
  }
}
</script>
