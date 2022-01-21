<template>
    <aside class="column is-one-fifth">
      <nav class="panel">
        <p class="panel-heading">
          {{ reviews.title }}
        </p>
        <div class="panel-block">
          <div class="control reviews">
            <reviews :note="reviews.average" :totalReviews="reviews.total">
              <review v-for="(testimony, n) in reviews.testimonies" :key="n" :index="n" :stars="testimony.note" :author="testimony.author">{{ testimony.message }}</review>
            </reviews>
          </div>
        </div>
      </nav>
    </aside>
</template>

<script>
import reviewsData from '../../components/reviews/reviews-data.json'
import Reviews from '../../components/reviews/Reviews'
import Review from '../../components/reviews/Review'

export default {
  name: 'Sidebar',
  components: {
    Reviews,
    Review
  },
  data () {
    return {
      reviews: reviewsData
    }
  }
}
</script>
