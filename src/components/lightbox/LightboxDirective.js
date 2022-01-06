import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
  bind (el) {
    store.addImage(el.getAttribute('href'))
    el.addEventListener('click', (e) => {
      e.preventDefault()
      store.open(el.getAttribute('href'))
    })
  },
  unbind (el) {
    store.remove(el.getAttribute('href'))
  }
})
