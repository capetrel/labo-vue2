<style lang="scss">
.reviews {
  position: relative;
  overflow: hidden;
  .reviews-nav {
    position: absolute;
    top: -7px;
    width: 100%;
    .review-nav_prev,
    .review-nav_next {
      position: absolute;
      top: 0;
      border: none;
      background: none;
      width: 60px;
      height: 60px;
      cursor: pointer;
      &:before {
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4em;
        font-weight: 100;
        padding: 0.2em  0.5em;
        color: rgba(#001111, 0.9);
        background: transparent;
        width: 100%;
        height: 100%;
        transition: background 0.2s ease-in-out;
      }
      &:hover {
        &:before {
          color: rgba(#001111, 0.5)
        }
      }
    }
    .review-nav_prev {
      left: 0;
      &:before {
        content: '\02C2';
        left: 0;
        right: auto;
      }
    }
    .review-nav_next {
      right: 0;
      left: auto;
      &:before {
        content: '\02C3';
        right: 0;
        left: auto;
      }
    }
  }
  .reviews-pagination {
    position: absolute;
    top: -10%;
    left: 0;
    right: 0;
    text-align: center;
    button {
      display: inline-block;
      height: 12px;
      width: 10px;
      background: #000000;
      opacity: 0.8;
      border: none;
      border-radius: 5px;
      margin: 0 2px;
      cursor: pointer;
      transition: opacity 0.2s ease-in-out;
      &:hover {
        opacity: 0.5;
      }
      &.active {
        background: #FFFFFF;
        opacity: 0.9;
        cursor: default;
      }
    }
  }
}
</style>

<template>
  <div class="reviews">
    <header>
      <div class="rating has-text-centered">
        <p class="note">{{ note }}<span class="max-note">/{{ maxNote }}</span></p>
        <p class="total-reviews">{{ totalReviews }}<span>&nbsp;{{ reviewName }}</span></p>
      </div>
    </header>
    <footer>
      <slot></slot>
    </footer>
    <div class="reviews-nav">
      <button class="review-nav_prev" @click.prevent="prev" title="Précédent"></button>
      <button class="review-nav_next" @click.prevent="next" title="Suivant"></button>
    </div>
    <div class="reviews-pagination" v-if="pagination">
      <button v-for="n in reviewsCount" v-bind:key="n" @click="goto(n-1)" :class="{active: n - 1 === index}"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  data () {
    return {
      index: 0,
      direction: 'right',
      pagination: false,
      reviews: [],
      note: this.$attrs.note ? this.$attrs.note : 0,
      maxNote: this.$attrs.maxNote ? this.$attrs.maxNote : 5,
      totalReviews: this.$attrs.totalReviews ? this.$attrs.totalReviews : 0,
      reviewName: this.$attrs.reviewName ? this.$attrs.reviewName : 'avis'
    }
  },
  computed: {
    reviewsCount () {
      return this.reviews.length
    }
  },
  methods: {
    prev () {
      this.index--
      this.direction = 'left'
      if (this.index < 0) {
        this.index = this.reviewsCount - 1
      }
    },
    next () {
      this.index++
      this.direction = 'right'
      if (this.index >= this.reviewsCount) {
        this.index = 0
      }
    },
    goto (index) {
      this.direction = index > this.index ? 'right' : 'left'
      this.index = index
    }
  },
  mounted () {
    this.reviews = this.$children
  }
}
</script>
