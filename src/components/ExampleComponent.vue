<template>
  <b-btn :style="styles" :class="['example', variation]" @click="handleClick">
    <!-- @slot Use this slot to place the button content -->
    <slot />
  </b-btn>
</template>

<script>
import sizeMixin from './_mixins/sizeMixin'

/**
 * Example component is used to visually communicate core parts of the product
 * and available actions.
 */
export default {
  /**
   * Component names should be short, pronounceable and Capitalized.
   */
  name: 'ExampleComponent',
  /**
   * Components in the system are labelled with status labels that reflect their
   * state of completion. See example below. All available statuses are:
   *
   * STATUS:        COLOR:     DESCRIPTION:
   *
   * deprecated     Red        Component is deprecated
   * prototype      Blue       Prototype, do not implement!
   * under-review   Yellow     Component is currently being reviewed
   * ready          Green      Ready to be used
   */
  status: 'prototype',
  /**
   * Release indicates when this component was added into the system.
   * (in which design system version)
   */
  release: '0.0.1',
  mixins: [sizeMixin],
  /**
   * Prop definitions should be as detailed as possible, specifying at least
   * type(s). See examples below:
   */
  props: {
    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: 'white'
    },
    /** @deprecated Use color instead */
    oldType: {
      type: String,
      default: 'span'
    },
    /**
     * Style variation to give additional meaning.
     * `primary, danger, success`
     */
    variation: {
      type: String,
      default: '',
      validator: value => {
        return value.match(/(|primary|danger|success)/)
      }
    }
  },
  computed: {
    styles () {
      return {
        'font-size': this.size,
        // color: this.color,
        background: this.background
      }
    }
  },
  methods: {
    /** Triggered when button is clicked
     * @event click
     * @type {Event}
     */
    /** Event for Alligator's example
     * @event gator
     * @type {Event}
     */
    handleClick (e) {
      this.$emit('click', e)
      this.$emit('gator', e)
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../docs/styles/docs.toolbox.scss";
/**
 * Styles in a top-level App component and in layout components may be global,
 * but all other components should always be scoped (using either scoped
 * attribute or class based scoping).
 */
.example {
  color: set-text-color($color-primary-50, $color-white);
}
</style>

<docs>
## Examples
Docs section should have an example that is shown in the documentation.

```jsx
<example-component>Push me</example-component>
```
</docs>
