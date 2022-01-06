<style src="../../assets/sass/parts/lightbox.scss" lang="scss"></style>

<template>
  <div class="lightbox" v-if="image" @click="close">
    <div class="lightbox__close" @click="close"></div>
    <transition :name="transition">
      <lightbox-image :image="image" :key="image"></lightbox-image>
    </transition>
    <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"></div>
    <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"></div>
  </div>
</template>

<script>
import './LightboxDirective'
import store from './LightboxStore'
import LightboxImage from './LightboxImage'

export default {
  name: 'Lightbox',
  data () {
    return {
      state: store.state,
      direction: 'next'
    }
  },
  components: {
    LightboxImage
  },
  methods: {
    close () {
      store.close()
    },
    prev () {
      this.direction = 'prev'
      store.prev()
    },
    next () {
      this.direction = 'next'
      store.next()
    }
  },
  computed: {
    image () {
      if (this.state.index !== false) {
        return this.state.images[this.state.index]
      }
      return false
    },
    transition () {
      return 'lightbox-' + this.direction
    }
  }
}
</script>
