<template>
  <div class="all-tokens">
    <table>
      <thead>
        <tr>
          <th>Token Name</th>
          <th>Value</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(token, index) in tokens" :key="index" class="token">
          <td v-if="token.name">
            <code class="name">
              ${{ token.name.replace(/_/g, "-") }}
            </code>
          </td>
          <td v-else>
            N/A
          </td>
          <td v-if="token.value">
            <div
              v-if="token.type === 'color/hex'"
              class="example color"
              :style="{ backgroundColor: token.value }"
            />
            <div
              v-if="token.category === 'border-radius'"
              class="example border-radius"
              :style="{ borderRadius: token.value }"
            />
            <div
              v-if="token.category === 'box-shadow'"
              class="example box-shadow"
              :style="{ boxShadow: token.value }"
            />
            <code class="type">
              {{ token.value }}
            </code>
          </td>
          <td v-else>
            N/A
          </td>
          <td v-if="token.category">
            {{ token.category }}
          </td>
          <td v-else>
            N/A
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import designTokens from '@/assets/tokens/tokens.raw.json'
import orderBy from 'lodash/orderBy'

/**
 * A list of available tokens in Vue Design System. Use these tokens in place
 * of hard-coded values in order to maintain a scalable and consistent system.
 * To edit these tokens and add more, see
 * [/src/tokens/](https://github.com/viljamis/vue-design-system/blob/master/src/tokens).
 */
export default {
  name: 'All',
  data () {
    return {
      tokens: this.orderData(designTokens.props)
    }
  },
  methods: {
    orderData: function (data) {
      let byName = orderBy(data, 'name', 'asc')
      let byCategoryAndName = orderBy(byName, 'category')
      return byCategoryAndName
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.all-tokens {
  @include reset;
  color: $color-rich-black;
  font-family: $font-heading;
  font-style: normal;
  font-weight: $weight-normal;
  line-height: $line-height-xs;
  margin-bottom: $space-s;
  margin-top: $space-l;

  @media (max-width: 1000px) {
    overflow-x: auto;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }

  thead th {
    background: $color-cloud;
    color: $color-oxford-blue;
    font-size: $size-s;
    // font-weight: $weight-bold;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: $weight-semi-bold;
    letter-spacing: 1px;
    padding: $space-s $space-l $space-s $space-s;
    // Chrome has a bug related to thead, this only works on th:
    // position: -webkit-sticky;
    position: sticky;
    text-align: left;
    text-transform: uppercase;
    top: -1px;

    &:first-child {
      border-bottom-left-radius: $radius-default;
      border-top-left-radius: $radius-default;
    }

    &:last-child {
      border-bottom-right-radius: $radius-default;
      border-top-right-radius: $radius-default;
    }
  }

  tr {
    border-bottom: 1px solid #dfe3e6;

    &:last-child {
      border: 0;
    }
  }

  td {
    font-size: $size-s;
    padding: $space-s $space-l $space-s $space-s;

    &:first-child {
      font-weight: $weight-bold;
      white-space: nowrap;
    }
  }

  .type {
    float: left;
    line-height: $line-height-s;
    max-width: calc(100% - #{$space-m});
  }

  .example {
    @include inline-space($space-xs);
    background: $color-white;
    border-radius: $radius-default;
    box-shadow: $shadow-s-inset, $shadow-s-inset, $shadow-s-inset;
    float: left;
    height: $space-s;
    margin-top: $space-xx-small;
    width: $space-s;
  }
}
</style>

<docs>
  ```jsx
  <all/>
  ```
</docs>
