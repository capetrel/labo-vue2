<style lang="scss">
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>

<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <slot name="header">
            default header
          </slot>
          <button class="delete" @click="$emit('close')" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <slot name="body">
            default body
          </slot>
        </section>
        <footer class="modal-card-foot">
          <slot name="footer">
            <button class="button is-success">Ajouter</button>
            <button class="button" @click="$emit('close')">Annuler</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      showModal: false
    }
  }
}
</script>
