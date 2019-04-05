<template>
  <div class="component-status">
    <ul class="status-list">
      <li>
        <nt-icon icon="check-circle" icon-position="left" icon-class="text-success">
          Ready
        </nt-icon>
      </li>
      <li>
        <nt-icon icon="exclamation-circle" icon-position="left" icon-class="text-warning">
          Under review
        </nt-icon>
      </li>
      <li>
        <nt-icon icon="times-circle" icon-position="left" icon-class="text-danger">
          Deprecated
        </nt-icon>
      </li>
      <li>
        <nt-icon icon="pencil-ruler" icon-position="left" icon-class="text-info">
          Prototype
        </nt-icon>
      </li>
      <li>
        <span>—</span>
        <span class="ml-2">
          Not applicable
        </span>
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th v-if="show === 'all'">
            Component Name
          </th>
          <th v-if="show === 'elements'">
            Element Name
          </th>
          <th>Released in</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(component, index) in components" :key="index" class="component">
          <td v-if="component && component.name">
            <code class="name">
              {{ component.name }}
            </code>
          </td>
          <td v-else>
            N/A
          </td>
          <td v-if="component && component.release">
            {{ component.release }}
          </td>
          <td v-else>
            N/A
          </td>
          <td v-if="component && component.status">
            <nt-icon
              v-if="component.status === 'ready'"
              icon="check-circle"
              icon-class="text-success"
            />
            <nt-icon
              v-if="component.status === 'under-review' || component.status === 'review'"
              icon="exclamation-circle"
              icon-class="text-warning"
            />
            <nt-icon
              v-if="component.status === 'deprecated'"
              icon="times-circle"
              icon-class="text-danger"
            />
            <nt-icon
              v-if="component.status === 'prototype'"
              icon="pencil-ruler"
              icon-class="text-info"
            />
          </td>
          <td v-else>
            —
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <nt-icon icon="check-circle" icon-class="text-success" />
          </td>
          <td>
            Ready
          </td>
          <td>The component is dev and design ready.</td>
        </tr>
        <tr>
          <td>
            <nt-icon icon="exclamation-circle" icon-class="text-warning" />
          </td>
          <td>
            Under review
          </td>
          <td>Indicates that a component’s design, code, or usage is being re-examined or created.</td>
        </tr>
        <tr>
          <td>
            <nt-icon icon="times-circle" icon-class="text-danger" />
          </td>
          <td>
            Deprecated
          </td>
          <td>Deprecated components have either been completely replaced by new components or are no longer being supported in the component library.</td>
        </tr>
        <tr>
          <td>
            <nt-icon icon="pencil-ruler" icon-class="text-info" />
          </td>
          <td>
            Prototype
          </td>
          <td>Indicates that a component’s design, code, or usage is still being built and experimented with and it highly likely to change.</td>
        </tr>
        <tr>
          <td>
            -
          </td>
          <td>
            Not available
          </td>
          <td>Component is not available in this version of the library.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// If you want to use your own tokens here, change the following line to:
// import designTokens from "@/assets/tokens/tokens.raw.json"
import designTokens from '../../../src/assets/tokens/tokens.raw.json'
import orderBy from 'lodash/orderBy'
import NtIcon from '../../../src/components/nt-icon/nt-icon'

export default {
  name: 'Components',
  components: {
    NtIcon
  },
  props: {
    show: {
      type: String,
      default: 'all',
      validator: value => {
        return value.match(/(all|elements)/)
      }
    }
  },
  data () {
    return {
      components: this.orderData(this.getComponents()),
      tokens: designTokens.props
    }
  },
  methods: {
    getComponents: function () {
      let contexts

      if (this.show === 'all') {
        contexts = [
          require.context('../../../src/components/', true, /\.vue$/)
        ]
      } else if (this.show === 'elements') {
        contexts = [require.context('../../../src/components/', true, /\.vue$/)]
      }

      const components = []
      contexts.forEach(context => {
        context.keys().forEach(key => components.push(context(key).default))
      })

      return components
    },
    orderData: function (data) {
      return orderBy(data, 'name', 'asc')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

.component-status {
  @include reset;
  color: $color-rich-black;
  font-style: normal;
  margin-bottom: $space-s;

  @media (max-width: 1000px) {
    overflow-x: auto;
  }

  table {
    border-bottom: 1px solid #dfe3e6;
    border-spacing: 0;
    margin-bottom: 32px;
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
    padding: $space-s;
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
    padding: $space-s;

    &:first-child {
      font-weight: $weight-bold;
      white-space: nowrap;
    }
  }
}

.status-list {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  margin: 0 0 $space-m;
  overflow: hidden;
  padding: 0;

  @media (max-width: 1000px) {
    display: block;
  }

  li {
    align-items: center;
    color: $color-silver;
    display: flex;
    margin: 0 $space-m 0 0;

    @media (max-width: 1000px) {
      float: left;
      margin: 0;
      width: 50%;
    }

    p {
      @media (max-width: 1000px) {
        margin: $space-xs;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <components />
  ```
</docs>
