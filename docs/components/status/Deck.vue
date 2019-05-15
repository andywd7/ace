<template>
  <b-row align-v="center" class="align-items-stretch">
    <b-col
      v-for="(card, index) in cards"
      :key="index"
      lg="6"
      xl="3"
      class="mb-4"
    >
      <b-card class="h-100">
        <h4 v-if="card && card.name">
          {{ splitPascalCase(card.name) }}
        </h4>
        <h4 v-else>
          -
        </h4>
        <p v-if="card && card.description">
          {{ card.description }}
        </p>
        <p v-else>
          -
        </p>
        <div v-if="card && card.release || card && card.status" class="d-flex justify-content-between">
          <span v-if="card && card.release">
            {{ card.release }}
          </span>
          <span v-else>
            N/A
          </span>
          <span v-if="card && card.status">
            <nt-icon
              v-if="card.status === 'ready'"
              icon="check-circle"
              icon-class="text-success"
            />
            <nt-icon
              v-if="card.status === 'under-review' || card.status === 'review'"
              icon="exclamation-circle"
              icon-class="text-warning"
            />
            <nt-icon
              v-if="card.status === 'deprecated'"
              icon="times-circle"
              icon-class="text-danger"
            />
            <nt-icon
              v-if="card.status === 'prototype'"
              icon="pencil-ruler"
              icon-class="text-info"
            />
          </span>
          <span v-else>
            —
          </span>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
// If you want to use your own tokens here, change the following line to:
// import designTokens from "@/assets/tokens/tokens.raw.json"
import designTokens from '../../../src/assets/tokens/tokens.raw.json'
import orderBy from 'lodash/orderBy'
import NtIcon from '../../../src/components/NtIcon/NtIcon'

export default {
  name: 'Deck',
  components: {
    NtIcon
  },
  props: {
    show: {
      type: String,
      default: 'components',
      validator: value => {
        return value.match(/(components|foundations)/)
      }
    }
  },
  data () {
    return {
      cards: this.orderData(this.getCards()),
      tokens: designTokens.props
    }
  },
  methods: {
    splitPascalCase (word) {
      let wordRe = /($[a-z])|[A-Z][^A-Z]+/g
      return word.match(wordRe).join(' ')
    },
    getCards: function () {
      let contexts

      if (this.show === 'components') {
        contexts = [
          require.context('../../../src/components/', true, /\.vue$/)
        ]
      } else if (this.show === 'foundations') {
        contexts = [require.context('../tokens/', true, /\.vue$/)]
      }

      const cards = []
      contexts.forEach(context => {
        context.keys().forEach(key => cards.push(context(key).default))
      })

      return cards
    },
    orderData: function (data) {
      return orderBy(data, 'name', 'asc')
    }
  }
}
</script>

<docs>
  ```jsx noeditor
  <deck />
  ```
</docs>
