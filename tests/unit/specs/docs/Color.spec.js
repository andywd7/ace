import { shallowMount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Color from '../../../../docs/components/tokens/Color.vue'

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('Color.vue', () => {
  // let wrapper
  let wrapper = shallowMount(Color, {
    attachToDocument: true,
    localVue
  })

  it('should render correct contents', () => {
    expect(wrapper.vm.$el.querySelector('.color')).toBeDefined()
  })

  it('should render multiple colors', () => {
    expect(wrapper.vm.$el.querySelectorAll('.color').length).toBeGreaterThan(2)
  })

  it('should create code elements for copy pasting', () => {
    expect(wrapper.vm.$el.querySelector('.color span')).toBeDefined()
  })

  it('should create swatches and apply inline styles', () => {
    expect(wrapper.vm.$el.querySelector('.color .swatch').style).toBeDefined()
  })

  it('should create multiple color groups', () => {
    expect(wrapper.vm.$el.querySelector('.color_group_2')).toBeDefined()
  })
})
