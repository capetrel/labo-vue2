<template>
    <aside class="column is-one-fifth">
      <nav class="panel">
        <p class="panel-heading">
          Les avis Google
        </p>
        <div class="panel-block">
          <div class="control reviews">
            <reviews title="Titre de test" :note="4.9" :total-reviews="123">
              <review :stars="4" autor="John doe1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis distinctio ducimus earum eos, error est fugit in, incidunt ipsum itaque mollitia natus nesciunt possimus qui recusandae rem unde!</review>
              <review :stars="3" autor="John doe2">Consectetur adipisicing elit. Accusamus accusantium animi asperiores aut beatae eos, error minima nam non omnis perferendis possimus qui rem. Consequuntur distinctio dolor fugiat praesentium tempore.</review>
              <review :stars="5" autor="John doe3">Cumque cupiditate debitis deserunt ducimus eveniet excepturi labore laudantium, maiores nobis non nostrum quas repudiandae, sint sunt voluptate voluptatibus?</review>
              <review :stars="5" autor="John doe4">Deserunt eum facilis ipsa labore veritatis. Delectus excepturi fugit ipsum nihil, officia possimus soluta. Facilis, maiores totam</review>
            </reviews>
          </div>
        </div>
      </nav>
    </aside>
</template>

<script>
import Reviews from '../../components/reviews/Reviews'
import Review from '../../components/reviews/Review'

export default {
  name: 'Sidebar',
  components: {
    Reviews,
    Review
  }
}
</script>
