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

      <h2>These will be updated in every window or tab</h2>
      <!-- Oranges -->
      <div>
        <p>🍊: {{ $store.state.fruits.oranges }}</p>
        <button @click="$store.dispatch('commitAddOrange')">Add orange</button>
      </div>

      <!-- Penguins -->
      <div>
        <p>🐧: {{ $store.state.animals.penguins }}</p>
        <button @click="$store.dispatch('commitAddPenguin')">Add penguin</button>
      </div>

      <!-- Random -->
      <div>
        <p>Counter: {{ $store.state.counter }}</p>
        <button @click="$store.commit('increment')">Increment</button>
      </div>

      <!-- Dictionary -->
      <div>
        <p>Object:</p>
        <form>
          <label for="key">Key:</label>
          <input name="key" v-model="key" />
          <label for="value">Value:</label>
          <input name="value" v-model="value" />
          <input type="submit" value="Add key/value" @click.prevent="addKeyValue" />
          <input type="submit" value="Remove key" @click.prevent="removeKey" />
          <input type="submit" value="Set object to null" @click.prevent="nullify" />
          <input type="submit" value="Create new dictionary" @click.prevent="newDictionary" />
        </form>
        <pre>{{ $store.state.dictionary }}</pre>
      </div>
      <hr>
      <h2>These won't be updated in every tab or window</h2>
      <!-- Wolfs -->
      <div>
        <p>🐺: {{ $store.state.animals.wolfs }}</p>
        <button @click="$store.dispatch('commitAddWolf')">Add wolf</button>
      </div>

      <!-- Apples -->
      <div>
        <p>🍎: {{ $store.state.fruits.apples }}</p>
        <button @click="$store.dispatch('commitAddApple')">Add apple</button>
      </div>

      <hr>

      <h2>Sous vue</h2>
      <transition name="bounce" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>

  </div>

</template>

<script>
export default {
  name: 'PageA',
  data () {
    return {
      key: '',
      value: ''
    }
  },
  methods: {
    addKeyValue () {
      this.$store.commit('addKeyValue', { key: this.key, value: this.value })
      this.key = ''
      this.value = ''
    },
    removeKey () {
      this.$store.commit('removeKey', this.key)
      this.key = ''
      this.value = ''
    },
    nullify () {
      this.$store.commit('nullify')
    },
    newDictionary () {
      this.$store.commit('newDictionary')
    }
  }
}
</script>
