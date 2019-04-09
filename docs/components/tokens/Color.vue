<template>
  <b-row>
    <b-col v-for="(group, index) in colors"
           :key="index"
           sm="6"
           md="4"
           lg="3"
    >
      <ul v-if="group" class="colors" :class="group.category">
        <li v-for="(color, i) in group" :key="i" class="color">
          <div class="swatch" :style="{ backgroundColor: color.value, color: getContrast(color.value) }">
            <!-- <p>{{ color.name.replace(/_/g, " ").replace(/color/g, "") }}</p> -->
            <span>
              <!-- <em>HEX:</em> -->
              {{ color.value }}
            </span>
            <span>
              <!-- <em>SCSS:</em> -->
              ${{ color.name.replace(/_/g, "-") }}
            </span>
          </div>
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import designTokens from '../../../src/assets/tokens/tokens.raw.json'
import orderBy from 'lodash/orderBy'
import groupBy from 'lodash/groupBy'

/**
 * The color palette comes with 5 different weights for each hue. These hues
 * should be used purposefully to communicate how things function in the
 * interface. Keep in mind that `vermilion` is only used in special cases
 * like destructive actions and error messages. To edit the colors, see
 * [/src/tokens/color.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/color.yml).
 */
export default {
  name: 'Color',
  data () {
    return {
      tokens: this.orderData(designTokens.props)
    }
  },
  computed: {
    colors () {
      let colorGroup = this.tokens
        .filter(color => color.category.includes('color_group'))
      let colors = colorGroup.slice().sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }))
      let color = groupBy(colors, ('category'))
      console.log(color)
      // let col = color.slice().sort((a, b) => a.color.localeCompare(b.color, undefined, { numeric: true }))
      // let col = color.localeCompare('100', undefined, { numeric: true, sensitivity: 'base' })
      return color
    }
  },
  methods: {
    orderData: function (data) {
      let byName = orderBy(data, 'name', 'desc')
      let byCategoryAndName = orderBy(byName, 'category')
      return byCategoryAndName
    },
    getContrast (hex) {
      let r = parseInt(hex.substr(1, 2), 16)
      let g = parseInt(hex.substr(3, 2), 16)
      let b = parseInt(hex.substr(5, 2), 16)
      let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000
      return (yiq >= 128) ? designTokens.props.color_surface_100.value : designTokens.props.color_surface_10.value
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/docs.toolbox.scss";

.colors {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}

.swatch {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.color {
  span {
    font-size: $size-s;
  }
}
</style>

<docs>
  ```jsx
  <color />
  ```
</docs>
