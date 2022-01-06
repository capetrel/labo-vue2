<template>
  <div class="users column columns is-flex-wrap-wrap">

    <progress class="progress is-small is-primary" max="100" v-if="loading"></progress>

    <div class="column" v-for="(user, i) in users" :key="i">
      <div class="card">
        <header class="card-header">
          <input class="input is-rounded m-1" type="text" v-model="user.name">
        </header>
        <div class="card-content">
          <div class="content">
            <p class="title">
              Friends
            </p>
            <p class="subtitle">
              <router-link :to="{name: 'user', params: {id: user.id}}" class="navbar-item">
              {{ user.name }}
              </router-link>
            </p>
            <address>
              {{ user.address.street }}<br>
              {{ user.address.zipcode }}&nbsp;{{ user.address.city }}<br>
            </address>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item is-primary has-background-primary has-text-success-light" @click="save(user)">Modifier</a>
          <a href="#" class="card-footer-item is-danger has-background-danger has-text-danger-light" @click="destroy(user)">Supprimer</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Users',
  data () {
    return {
      users: [],
      loading: false
    }
  },
  methods: {
    save (user) {
      this.$user.update({ id: user.id }, { name: user.name }).then((response) => {
        console.log('update', response.ok)
      }, (response) => {
        console.warn('erreur pendant la modification', response.message)
      })
    },
    destroy (user) {
      this.$user.remove({ id: user.id }).then((response) => {
        console.log('delete', response.ok)
        this.users = this.users.filter(u => u !== user)
      }, (response) => {
        console.warn('erreur pendant la suppresion', response.message)
      })
    }
  },
  mounted () {
    this.$user = this.$resource('users{/id}', {}, {}, {
      before: () => { this.loading = true },
      after: () => { this.loading = false }
    })
    this.$user.query().then((response) => {
      this.users = response.data
    }, (response) => {
      console.warn('erreur pendant la récupération', response)
    })
  }
}
</script>
