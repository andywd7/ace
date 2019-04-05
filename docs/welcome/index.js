import { storiesOf } from '@storybook/vue'

import Components from '../components/status/Components'
import Color from '../components/tokens/Color'

// const stories = storiesOf('Welcome', module);

const base = {
  backgrounds: [{
    default: true,
    name: 'white',
    value: '#fff'
  }],
  options: {
    showPanel: false
  }
}

storiesOf('Welcome|Component status', module)
  .addParameters(base)
  .add('Components', () => ({
    components: { Components },
    template: `<components />`
  }))

storiesOf('Welcome|Colors', module)
  .addParameters({
    options: {
      showPanel: true
    }
  })
  .add('Color', () => ({
    components: { Color },
    template: `<color />`
  }))
