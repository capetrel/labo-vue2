<style src="../../assets/sass/parts/slider.scss" lang="scss"></style>

<template>
  <div class="slider">
    <slot></slot>
    <div class="slider-nav">
      <button class="slider-nav_prev" @click.prevent="prev" title="Précédent"></button>
      <button class="slider-nav_next" @click.prevent="next" title="Suivant"></button>
    </div>
    <div class="slider-pagination">
      <button v-for="n in slidesCount" v-bind:key="n" @click="goto(n-1)" :class="{active: n - 1 === index}"></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Slider',
  data () {
    return {
      index: 0,
      slides: [],
      direction: 'right'
    }
  },
  watch: {
    slides () {
      if (this.index >= this.slidesCount) {
        this.index = this.slidesCount - 1
      }
    }
  },
  computed: {
    slidesCount () {
      return this.slides.length
    }
  },
  methods: {
    prev () {
      this.index--
      this.direction = 'left'
      if (this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    next () {
      this.index++
      this.direction = 'right'
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    goto (index) {
      this.direction = index > this.index ? 'right' : 'left'
      this.index = index
    }
  },
  mounted () {
    this.slides = this.$children
  }
}
</script>
