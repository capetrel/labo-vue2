<template>
    <div class="column container">
      <h1>Page D</h1>
      <p>{{ message }}</p>
      <p>
        Leo a diam sollicitudin tempor. Velit egestas dui id ornare arcu odio ut sem. In est ante in nibh mauris cursus mattis molestie. Nec ultrices dui sapien eget. Tortor aliquam nulla facilisi cras fermentum. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet nulla malesuada. Luctus accumsan tortor posuere ac ut. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Odio facilisis mauris sit amet massa vitae tortor. Sodales ut eu sem integer vitae. Bibendum neque egestas congue quisque.
      </p>
    </div>

</template>

<script>
export default {
  name: 'PageD',
  data () {
    return {
      message: 'salut'
    }
  },
  beforeRouteEnter (route, redirect, next) {
    const confirm = window.confirm('Voulez vous vraiment vous rendre sur la page D ?')
    if (confirm) {
      next(current => {
        current.message = 'La route est chargé'
      })
    } else {
      // redirect to page actually on
      redirect()
      // redirect to home page
      // window.location.replace('/')
    }
  },
  beforeRouteLeave (route, redirect, next) {
    if (window.confirm('Voulez vous vraiment quitter ?')) {
      next()
    }
  }
}
</script>
