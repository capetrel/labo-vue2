<style src="../../assets/sass/parts/slider.scss" lang="scss"></style>

<template>
  <transition :name="transition">
    <div class="slide" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    index: { type: Number, default: 0 }
  },
  data () {
    return {}
  },
  computed: {
    transition () {
      if (this.$parent.direction) {
        return 'slide-' + this.$parent.direction
      } else {
        return null
      }
    },
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>
