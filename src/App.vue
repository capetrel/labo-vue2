<style>
.router-link-exact-active {
  background-color: #292929;
  color: #fff;
}
</style>
<template>

  <div>

    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand is-flex is-justify-content-center is-align-content-center">
        <div class="navbar-item is-size-3 has-text-weight-bold">
          Labo Vue
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{name: 'home'}" class="navbar-item">Accueil</router-link>

          <router-link :to="{name: 'quizz'}" class="navbar-item">Quizz</router-link>

          <router-link :to="{name: 'games'}" class="navbar-item">Jeux</router-link>

          <router-link :to="{name: 'todo'}" class="navbar-item">Todo</router-link>

          <router-link :to="{name: 'users'}" class="navbar-item">Utilisateurs</router-link>

          <router-link :to="{name: 'a'}" class="navbar-item">Page A</router-link>

          <router-link :to="{name: 'd'}" class="navbar-item">Page async</router-link>

        </div>

      </div>
    </nav>

    <section class="columns">

      <router-view name="sidebar"></router-view>

      <router-view></router-view>

    </section>

  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>
