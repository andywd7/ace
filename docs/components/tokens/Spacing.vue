<template>
  <div class="spacing">
    <div
      v-for="(prop, index) in tokens"
      v-if="prop.category === 'space'"
      :key="index"
      class="space"
      :style="{ lineHeight: prop.value, height: prop.value }"
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
 * A framework for creating a predictable and harmonious spacing system. These
 * tokens are used for padding, margins, and position together with
 * [spacing utilities](https://github.com/viljamis/vue-design-system/wiki/spacing).
 * To edit spacing, see
 * [/src/tokens/spacing.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/spacing.yml).
 */
export default {
  name: 'Spacing',
  data () {
    return {
      tokens: this.orderData(designTokens.props)
    }
  },
  methods: {
    orderData: function (data) {
      let order = orderBy(data, 'category', 'asc')
      return order
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.spacing {
  margin-top: $space-l;
  max-width: 1176px;
  overflow: hidden;
  width: 100%;
}

.space {
  background: tint(#c4cdd5, 85%);
  border-radius: $radius-default;
  box-shadow: $shadow-s-inset;
  color: $color-rich-black;
  float: left;
  font-family: $font-text;
  font-size: $size-s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: $space-xs;
  position: relative;
  text-align: center;
  width: 100%;

  span {
    color: $color-silver;
    font-style: normal;
    margin-left: 5px;
    user-select: none;
  }
}
</style>

<docs>
  ```jsx
  <spacing/>
  ```
</docs>
