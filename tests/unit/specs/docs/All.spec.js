import Vue from 'vue'
import DesignTokens from '../../../../docs/components/tokens/DesignTokens.vue'

const Constructor = Vue.extend(DesignTokens)
const vm = new Constructor().$mount()

describe('DesignTokens.vue', () => {
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.token')).toBeDefined()
  })

  it('should render multiple tokens', () => {
    expect(vm.$el.querySelectorAll('.token').length).toBeGreaterThan(10)
  })

  it('should create code elements for copy pasting', () => {
    expect(vm.$el.querySelector('code.name')).toBeDefined()
  })

  it('should create code elements with original values', () => {
    expect(vm.$el.querySelector('code.type')).toBeDefined()
  })

  it('should create examples of usage', () => {
    expect(vm.$el.querySelector('.example')).toBeDefined()
  })

  it('should apply inline styles', () => {
    expect(vm.$el.querySelector('.example.border-radius').style).toBeDefined()
  })
})
