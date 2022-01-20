<template>
  <div class="review">
    <div class="stars">{{ stars }}</div>
    <p class="testimony"><slot></slot></p>
    <p class="autor">{{ autor }}</p>
  </div>
</template>

<script>
export default {
  name: 'Review',
  data () {
    return {
      stars: this.$attrs.stars ? this.$attrs.stars : 0,
      autor: this.$attrs.autor ? this.$attrs.autor : '',
      maxStars: this.$attrs.maxStars ? this.$attrs.maxStars : 5
    }
  }
  // TODO 1 : Generate stars from the stars var. Allow user to use decimal (ex: 4,2). Manage the maxStars
  // TODO 2 : Testimony with slider (inspiration from slider)
}
</script>
