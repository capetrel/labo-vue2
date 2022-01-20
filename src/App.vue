<style>
.router-link-exact-active {
  background-color: #292929;
  color: #fff;
}
</style>
<template>

  <div>

    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand is-flex is-justify-content-center is-align-content-center">
        <div class="navbar-item is-size-3 has-text-weight-bold">
          Labo Vue
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{name: 'home'}" class="navbar-item">Accueil</router-link>

          <router-link :to="{name: 'quizz'}" class="navbar-item">Quizz</router-link>

          <router-link :to="{name: 'todo'}" class="navbar-item">Todo</router-link>

          <router-link :to="{name: 'users'}" class="navbar-item">Utilisateurs</router-link>

          <router-link :to="{name: 'a'}" class="navbar-item">Page A</router-link>

          <router-link :to="{name: 'd'}" class="navbar-item">Page async</router-link>

        </div>

      </div>
    </nav>

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

    <section class="columns">

      <router-view name="sidebar"></router-view>

      <router-view></router-view>

    </section>

  </div>

</template>

<script>
import Slider from './components/slider/Slider'
import Slide from './components/slider/Slide'

export default {
  name: 'App',
  data () {
    return {
      slides: 5
    }
  },
  components: {
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
