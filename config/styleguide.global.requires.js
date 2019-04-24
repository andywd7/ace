import Vue from 'vue'

Vue.component('RouterLink', {
  props: {
    tag: {
      default: 'a',
      type: String
    }
  },
  render (createElement) {
    return createElement(this.tag, {}, this.$slots.default)
  }
})
