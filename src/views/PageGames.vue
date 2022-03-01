<template>
  <div class="column is-full container">

    <main>
      <section class="section">
        <div class="container has-text-centered mb-4">
            <h1 class="title is-size-1 pb-4">
              Quel prix pouvez vous gagner ?
            </h1>
            <h2 class="subtitle is-size-3">
                Faite tourner la roue
            </h2>
        </div>

        <wheel :segments="options" />

      </section>

      <section class="section">
        <div class="container has-text-centered mb-4">
          <h1 class="title is-size-1 pb-4">
            Quel prix pouvez vous gagner ?
          </h1>
          <h2 class="subtitle is-size-3">
            Faite tourner la roue
          </h2>
        </div>
        <div id="otherGame">
          ici un carousel
        </div>
      </section>


    </main>

  </div>

</template>

<script>
import Wheel from "@/components/Winwheel/Wheel"

export default {
  name: 'PageGames',
  components: {
    Wheel,
  },
  data () {
    return {
      options: [
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 1'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 2'
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 3'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 4'
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 5'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 6'
        },
        {
          textFillStyle: '#fff',
          fillStyle: '#000',
          text: 'Prize 7'
        },
        {
          textFillStyle: '#000',
          fillStyle: '#fadede',
          text: 'Prize 8'
        }
      ]
    }
  },
}
</script>
