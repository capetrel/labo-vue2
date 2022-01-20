<style lang="scss">
.quizz {
  position: relative;
  .notification {
    position: absolute;
    top: -80px;
    left: 12px;
    right: 12px;
  }
  .panel {
    transition: all 0.1s ease-in-out;
    .panel-block.disabled-input {
      background-color: #FFF;
      cursor: not-allowed;
    }
    .panel-block.disabled-input {
      background-color: #FFF;
      cursor: not-allowed;
    }
    .panel-block.disabled-input:hover {
      background-color: #FFF;
    }
  }
  .animate__animated.animate__fadeInRight,
  .animate__animated.animate__fadeOutLeft {
    position: absolute;
    width: 97%;
  }
  .animate__animated.animate__fadeOut {
    --animate-duration: .1s;
  }
  .quizz-fade-enter,
  .quizz-fade-leave-to {
    height: 0;
    transition: height .1s ease-in-out;
  }
}

</style>

<template>
  <div class="quizz column is-two-thirds mx-auto">

    <transition name="anecdote-fade" enter-tactive-class="animate__animated animate__flipInX animate__faster" leave-active-class="animate__animated animate__fadeOut animate__faster">
      <div class="notification is-link is-light" v-show="anecdote">
        <button class="delete" @click="closeNotification()"></button>
        {{ questions[index]['anecdote'] }}
      </div>
    </transition>

    <transition name="quizz-fade" appear enter-active-class="animate__animated animate__fadeInRight animate__faster" leave-class="toto" leave-active-class="animate__animated animate__fadeOutLeft animate__faster">
      <div class="panel" v-if="start" key="begin">
        <div class="panel-heading has-text-centered has-text-link-dark is-size-3" v-html="replaceSubString(quizz.theme, false, 'span', 'is-size-5')"></div>
        <header class="modal-card-head">
          <p class="modal-card-title has-text-centered">Choisir la difficulté</p>
        </header>
        <p class="panel-tabs pt-6 pb-6">
          <a class="button is-large is-outlined is-rounded is-primary mx-3" href="#" @click.stop.prevent="startQuizz('beginner')">Débutant</a>
          <a class="button is-large is-outlined is-rounded is-info mx-3" href="#" @click.stop.prevent="startQuizz('confirmed')">Confirmé</a>
          <a class="button is-large is-outlined is-rounded is-danger mx-3" href="#" @click.stop.prevent="startQuizz('expert')">Expert</a>
        </p>
        <footer class="modal-card-foot is-flex-direction-column">
          <p class="is-size-7">Fournisseur : <span v-html="replaceSubString(quizz.provider,true)"></span></p>
          <p class="is-size-7">Rédacteur : {{ quizz.editor }}</p>
        </footer>
      </div>

      <div class="panel" v-else-if="quizzing" :key="questions[index].id">
        <div class="panel-heading">
          <p>{{ questions[index]['question'] }}</p>
        </div>
        <label :for="key" class="panel-block" :class="setResponseClasse(key, questions[index]['correct'])" v-for="(answer,key) in questions[index]['answers']" :key="answer">
          <input type="radio" :id="key" class="is-hidden" :value="key" @change="answered($event)" :disabled="selected !== undefined">
          {{ answer }}
        </label>
      </div>

      <div class="panel" v-else key="end">
        <p class="panel-heading">
          Le quizz est terminé
        </p>
        <p class="panel-block">
          Voici votre résultat : {{ score }} bonne{{ plural }} réponse{{ plural }} / {{ questions.length }}
        </p>
        <div class="panel-block is-flex">
          <button class="button is-primary is-rounded is-align-self-flex-end" @click="reset()">Recommencer</button>
        </div>
      </div>
    </transition>

    <button class="button is-primary is-outlined is-rounded is-small is-align-self-flex-end" v-show="visibleNext" @click="next()">Suivant</button>
    <button class="button is-primary is-outlined is-rounded is-small is-align-self-flex-end" v-show="visibleFinish" @click="results()">Résultat</button>

  </div>
</template>

<script>

import quizz from './quizz.json'

export default {
  name: 'Quizz',
  data () {
    return {
      index: 0,
      score: 0,
      clicked: false,
      selected: undefined,
      anecdote: false,
      start: true,
      quizzing: false,
      finish: false,
      plural: '',
      quizz: quizz,
      questions: quizz.beginner
    }
  },
  computed: {
    visibleNext () {
      return this.selected !== undefined && this.index < this.questions.length - 1
    },
    visibleFinish () {
      return this.selected !== undefined && this.index === this.questions.length - 1 && this.finish === false
    }
  },
  methods: {
    startQuizz (level) {
      this.questions = quizz[level]
      this.start = false
      this.quizzing = true
    },
    answered (e) {
      this.selected = e.target.value
      this.clicked = true
      this.anecdote = true
      if (Number(this.selected) === this.questions[this.index].correct) {
        this.score++
      }
    },
    setResponseClasse (key, correct) {
      const selected = Number(this.selected) === key
      if (this.clicked && selected && key === correct) {
        return 'has-background-success-light'
      } else if (this.clicked && selected && key !== correct) {
        return 'has-background-danger-light'
      } else if (this.clicked && selected === false && key !== correct) {
        return 'disabled-input'
      } else if (this.clicked && selected === false && key === correct) {
        return 'disabled-input has-background-success-light'
      } else {
        return ''
      }
    },
    next () {
      this.index++
      this.clicked = false
      this.quizzing = true
      this.selected = undefined
      this.anecdote = false
      this.finish = false
    },
    results () {
      this.finish = true
      this.quizzing = false
      this.anecdote = false
      if (this.score > 1) {
        this.plural = 's'
      }
    },
    reset () {
      this.index = 0
      this.clicked = false
      this.selected = undefined
      this.anecdote = false
      this.score = 0
      this.start = true
      this.finish = false
    },
    closeNotification () {
      this.anecdote = false
    },
    getStringInParentheses (txt) {
      const newTxt = txt.split('(')
      let result = ''
      for (var i = 1; i < newTxt.length; i++) {
        result += newTxt[i].split(')')[0]
      }
      return result
    },
    replaceSubString (string, isLink = false, tag = 'span', className = null) {
      const sub = this.getStringInParentheses(string)
      const txt = string.replace(sub, '')
      const attr = className !== null ? `class=${className}` : ''
      if (isLink) {
        return txt.replace('()', '(' + sub.link(sub) + ')')
      } else {
        return txt.replace('()', `<${tag} ${attr}>(${sub})</${tag}>`)
      }
    }
  }
}
</script>
