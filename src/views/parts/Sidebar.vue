<template>
    <aside class="column is-one-fifth is-full-height">
      <nav class="panel">
        <p class="panel-heading">
          {{ reviews.title }}
        </p>
        <div class="panel-block">
          <div class="control reviews">
            <reviews :note="reviews.average" :totalReviews="reviews.total" :pagination="true">
              <review v-for="(testimony, n) in reviews.testimonies" :key="n" :index="n" :stars="testimony.note" :author="testimony.author">{{ testimony.message }}</review>
            </reviews>
          </div>
        </div>
        <div class="panel-block">
          <button class="button mt-3 mb-2 mx-auto" @click="showModal = true">Commenter</button>
        </div>
      </nav>

      <modal v-if="showModal" @close="showModal = false" :class="{'is-active': showModal}">
        <p class="modal-card-title" slot="header">Ajouter un commentaire</p>
        <div slot="body">
          <form @submit.prevent="checkForm">
            <div class="field">
              <label class="label" for="username">Username</label>
              <div class="control">
                <input id="username" class="input" type="text" placeholder="Votre nom ou pseudo" v-model="testimony.author">
              </div>
              <p class="help is-danger" v-if="errors.author">Pas bien</p>
            </div>

            <div class="field">
              <label for="note" class="label">Note</label>
              <!-- TODO Utiliser le composant rating-star -->
              <input id="note" class="input" type="number" min="0" max="5" placeholder="Note" v-model.number="testimony.note">
              <p class="help is-danger" v-if="errors.note">Pas Bien</p>
            </div>

            <div class="field">
              <label for="message" class="label">Message</label>
              <div class="control">
                <textarea id="message" class="textarea" placeholder="Message" v-model="testimony.message"></textarea>
              </div>
              <p class="help is-danger" v-if="errors.message">Pas Bien</p>
            </div>

            <div class="field">
              <div class="control">
                <label for="consent" class="checkbox">
                  <input id="consent" type="checkbox">
                  J'accepte les <a href="#">termes et conditions</a>
                </label>
              </div>
            </div>

            <button class="button is-success" type="submit">Ajouter</button>

          </form>
        </div>
        <div slot="footer">
          <button class="button" @click="$emit('close')">Annuler</button>
        </div>
      </modal>

    </aside>
</template>

<script>
import reviewsData from '../../components/reviews/reviews-data.json'
import Reviews from '../../components/reviews/Reviews'
import Review from '../../components/reviews/Review'
import Modal from '@/components/modal/Modal'

export default {
  name: 'Sidebar',
  components: {
    Reviews,
    Review,
    Modal
  },
  data () {
    return {
      reviews: reviewsData,
      testimony: {},
      showModal: false,
      errors: []
    }
  },
  methods: {
    checkForm () {
      // TODO finish validation
      console.log(this.testimony)
      if (this.testimony.author && this.testimony.note && this.testimony.message) {
        this.save(this.testimony)
      }

      this.errors = []

      if (!this.testimony.author) {
        this.errors.author = 'Name required.'
      }
      if (!this.testimony.note) {
        this.errors.note = 'Age required.'
      }
      if (!this.testimony.message) {
        this.errors.message = 'Message required.'
      }
      console.log(this.errors)
    },
    save (data) {
      this.reviews.testimonies.push(data)
      // TODO close modal after save
    }
  }
}
</script>
