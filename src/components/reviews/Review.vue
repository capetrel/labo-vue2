<style lang="scss">
.review {
  width: 100%;
  .vue-star-rating {
    margin: 10px auto 0 auto;
  }
  figure:not(:first-child) {
    margin-top: 1em;
    blockquote {
      padding: 0.75em 1em;
    }
    figcaption {
      text-align: right;
    }
  }
}

.review-slide-left-leave-active,
.review-slide-right-leave-active {
  position: absolute;
  top: 89px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

.review-slide-right-enter-active {
  animation: slideRightIn 1s;
}

.review-slide-left-enter-active {
  animation: slideLeftIn 1s;
}

.review-slide-right-leave-active {
  animation: slideRightOut 1s;
}

.review-slide-left-leave-active {
  animation: slideLeftOut 1s;
}

@keyframes slideLeftIn {
  from {transform: translateX(-100%);}
  to {transform: translateX(0);}
}
@keyframes slideLeftOut {
  from {transform: translateX(0);}
  to {transform: translateX(100%);}
}
@keyframes slideRightIn {
  from {transform: translateX(100%);}
  to {transform: translateX(0);}
}
@keyframes slideRightOut {
  from {transform: translateX(0);}
  to {transform: translateX(-100%);}
}
</style>

<template>
  <transition :name="transition">
    <div class="review" v-show="visible">
      <star-rating v-model="stars" :star-size="25" :read-only="true" :increment="0.01" :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>
      <figure>
        <blockquote class="testimony">
          <p><slot></slot></p>
        </blockquote>
        <figcaption class="author">— {{ author }}</figcaption>
      </figure>
    </div>
  </transition>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'Review',
  components: {
    StarRating
  },
  props: {
    index: { type: Number, default: 0 }
  },
  data () {
    return {
      stars: this.$attrs.stars ? this.$attrs.stars : 0,
      author: this.$attrs.author ? this.$attrs.author : '',
      maxStars: this.$attrs.maxStars ? this.$attrs.maxStars : 5
    }
  },
  computed: {
    transition () {
      return 'review-slide-' + this.$parent.direction
    },
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>
