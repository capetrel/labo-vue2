<template>
  <main class="column">

    <!-- Slider -->
    <section class="hero mb-5">
      <slider>
        <slide v-for="(slide, s) in slides" :key="s" :index="slide - 1">
          <div class="slide-title">Image {{ slide }}</div>
          <img :src="'https://picsum.photos/id/100'+ slide +'/630/300'" alt="image au hasard">
        </slide>
      </slider>
      <div class="buttons columns is-centered">
        <button @click="addSlide" class="button">Ajout un slide</button>
        <button @click="removeSlide" class="button">Supprimer un slide</button>
      </div>
    </section>

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
import Slider from '@/components/slider/Slider'
import Slide from '@/components/slider/Slide'

export default {
  name: 'PageHome',
  data () {
    return {
      slides: 5,
      title: '20'
    }
  },
  components: {
    Lightbox,
    Slider,
    Slide
  },
  methods: {
    addSlide () {
      this.slides++
    },
    removeSlide () {
      this.slides--
    }
  }
}
</script>
