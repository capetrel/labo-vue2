<style>

.bounce-enter-active {
  animation: bounce-in .3s;
}
.bounce-leave-active {
  animation: bounce-out .3s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>

<template>
  <div class="columns">
    <aside class="column is-one-fifth">
      <nav class="panel">
        <p class="panel-heading">
          Liste des Sous-vue
        </p>

        <router-link :to="{name: 'a.b'}" class="panel-block">Vue B</router-link>

        <router-link :to="{name: 'a.c'}" class="panel-block">Vue C</router-link>

      </nav>
    </aside>

    <main>
      <h1>Page A</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus cupiditate id minus possimus qui sunt? Alias deserunt doloribus ducimus eos esse fugit magnam, molestias. In non porro repellendus temporibus?
      </p>
      <h2>Sous vue</h2>
      <transition name="bounce" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>

  </div>

</template>

<script>
export default { name: 'PageA' }
</script>
