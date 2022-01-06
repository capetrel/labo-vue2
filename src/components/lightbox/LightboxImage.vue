<template>
  <div @click.stop>
    <progress class="progress is-small is-primary" max="100" v-if="loading">Chargement...</progress>
    <transition name="lightbox-image-fade">
      <img class="lightbox__image" :src="src" :style="style" :key="src" alt="Image">
    </transition>
  </div>
</template>

<script>

export default {
  name: 'LightboxImage',
  props: {
    image: String
  },
  data () {
    return {
      loading: true,
      src: false,
      style: {}
    }
  },
  computed: {},
  methods: {
    resizeImage (image) {
      let width = image.width
      let height = image.height
      if (width > window.innerWidth || height > window.innerHeight) {
        const ratio = width / height
        const windowRatio = window.innerWidth / window.innerHeight
        if (ratio > windowRatio) {
          width = window.innerWidth
          height = width / ratio
        } else {
          height = window.innerHeight
          width = height * ratio
        }
      }
      this.style = {
        width: width + 'px',
        height: height + 'px',
        top: ((window.innerHeight - height) * 0.5) + 'px',
        left: ((window.innerWidth - width) * 0.5) + 'px'
      }
    }
  },
  mounted () {
    const image = new window.Image()
    image.onload = () => {
      this.loading = false
      this.src = this.image
      this.resizeImage(image)
    }
    image.src = this.image
    this.resizeEvent = () => {
      this.resizeImage(image)
    }
    window.addEventListener('resize', this.resizeEvent)
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeEvent)
  }
}
</script>
