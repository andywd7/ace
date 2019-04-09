<template>
  <div class="font-sizes">
    <div
      v-for="(prop, index) in fontSizeTokens"
      :key="index"
      class="font"
      :style="{ fontSize: prop.value }"
    >
      ${{ prop.name.replace(/_/g, "-") }}
      <span>({{ prop.value }})</span>
    </div>
  </div>
</template>

<script>
import designTokens from '@/assets/tokens/tokens.raw.json'
import orderBy from 'lodash/orderBy'

/**
 * This typographic scale makes it easier to achieve visual harmony in the
 * interface. It’s purposefully designed to keep the number of separate font
 * sizes to a minimum. To edit font-sizes, see
 * [/src/tokens/font-size.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/font-size.yml).
 */
export default {
  name: 'FontSize',
  data () {
    return {
      tokens: this.orderData(designTokens.props)
    }
  },
  computed: {
    fontSizeTokens () {
      return this.tokens.filter(token => token.category.includes('font-size'))
    }
  },
  methods: {
    orderData: function (data) {
      let order = orderBy(data, 'value', 'desc')
      return order
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/docs.toolbox.scss";

/* STYLES
--------------------------------------------- */

.font-sizes {
  margin-top: $space-l;
  overflow: hidden;
  width: 100%;
}

.font {
  @include reset;
  // font-family: $font-heading;
  color: $color-rich-black;
  font-style: normal;
  font-weight: $weight-bold;
  line-height: $line-height-xs;
  margin-bottom: $space-s;

  span {
    color: $color-silver;
    font-style: normal;
    font-weight: $weight-normal;
    letter-spacing: -.02em;
    margin-left: 10px;
    user-select: none;
  }
}
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
