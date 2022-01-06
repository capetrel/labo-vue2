<template>
    <main class="column is-three-fifths">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://fakeimg.pl/350x200/?text=Hello" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ user.name }}</p>
              <p class="subtitle is-6">@{{ user.username }}</p>
            </div>
          </div>
          <div class="content">
            <address>
              {{ user.address.street }}<br>
              {{ user.address.suite }}<br>
              {{ user.address.zipcode }}&nbsp;{{ user.address.city }}<br>
              {{ user.phone }}<br>
              <a href="https://www">{{ user.website }}</a><br>
            </address>
            <p>

            </p>
          </div>
          <footer class="card-footer">
            <blockquote>
              {{ user.company.catchPhrase }}<br>
              {{ user.company.bs }}
            </blockquote>
          </footer>
        </div>
      </div>
    </main>

</template>

<script>
export default {
  name: 'PageUser',
  data () {
    return {
      user: {}
    }
  },
  created () {

  },
  mounted () {
    this.$user = this.$resource('users{/id}', {}, {}, {
      before: () => { this.loading = true },
      after: () => { this.loading = false }
    })
    this.$user.get({ id: this.$route.params.id }).then((response) => {
      this.user = response.data
    }, (response) => {
      console.warn('erreur pendant la récupération', response)
    })
  }
}
</script>
