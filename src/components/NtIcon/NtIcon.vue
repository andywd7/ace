<template>
  <component
    :is="tagType"
    v-if="iconPosition"
    class="nt-icon"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <i v-if="iconPosition === 'left'" aria-hidden="true" :class="[iconClass, iconName, iconSpacing]" />
    <span :class="[hideTextClasses, textClass]">
      <slot />
    </span>
    <i v-if="iconPosition === 'right'" aria-hidden="true" :class="[iconClass, iconName, iconSpacing]" />
  </component>
  <component
    :is="tagType"
    v-else
    class="nt-icon"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <i aria-hidden="true" :class="[iconClass, iconName]" />
  </component>
</template>

<script>
export default {
  name: 'NtIcon',
  status: 'prototype',
  release: '1.0.0',
  inheritAttrs: false,
  props: {
    hideText: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(sm|md|lg)/)
      }
    },
    icon: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(left|right)/)
      }
    },
    textClass: {
      type: String,
      default: null
    }
  },
  computed: {
    tagType () {
      // if to is used and not href then user wanted a router-link and vice versa else render span
      if (this.$attrs.to && !this.$attrs.href) {
        return 'router-link'
      } else if (!this.$attrs.to && this.$attrs.href) {
        return 'a'
      } else {
        return 'span'
      }
    },
    iconName () {
      return this.icon ? 'fas fa-' + this.icon : ''
    },
    iconSpacing () {
      if (this.iconPosition === 'left') {
        return this.hideText !== null ? 'mr-' + this.hideText + '-1' : 'mr-1'
      } else if (this.iconPosition === 'right') {
        return this.hideText !== null ? 'ml-' + this.hideText + '-1' : 'ml-1'
      } else {
        return ''
      }
    },
    hideTextClasses () {
      if (this.hideText !== null) {
        return 'd-none d-' + this.hideText + '-inline'
      } else {
        return this.hideText
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .nt-icon {
//     display: inline-block;
//     line-height: 1;
// }

// .nt-icon--container {
//     align-items: baseline;
//     display: flex;
// }
</style>
