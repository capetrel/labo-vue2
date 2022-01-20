<style src="../../assets/sass/parts/reviews.scss" lang="scss"></style>

<template>
  <div class="reviews">
    <header>
      <p class="title">{{ title }}</p>
      <div class="rating">
        <p class="note">{{ note }}<span class="max-note">/{{ maxNote }}</span></p>
        <p class="total-reviews">{{ totalReviews }}<span>&nbsp;{{ reviewName }}</span></p>
      </div>
    </header>
    <footer>
      <slot></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  data () {
    return {
      title: this.$attrs.title ? this.$attrs.title : 'Définir le titre',
      note: this.$attrs.note ? this.$attrs.note : 0,
      maxNote: this.$attrs.maxNote ? this.$attrs.maxNote : 5,
      totalReviews: this.$attrs.totalReviews ? this.$attrs.totalReviews : 0,
      reviewName: this.$attrs.reviewName ? this.$attrs.reviewName : 'avis'
    }
  }
}
</script>
