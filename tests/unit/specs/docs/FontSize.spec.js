import Vue from 'vue'
import Typography from '../../../../docs/components/tokens/Typography.vue'

const Constructor = Vue.extend(Typography)
const vm = new Constructor().$mount()

describe('Typography.vue', () => {
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.font')).toBeDefined()
  })

  it('should render multiple sizes', () => {
    expect(vm.$el.querySelectorAll('.font').length).toBeGreaterThan(2)
  })

  it('should create px sizes for copy pasting', () => {
    expect(vm.$el.querySelector('.font span')).toBeDefined()
  })

  it('should create apply inline styles', () => {
    expect(vm.$el.querySelector('.font').style).toBeDefined()
  })
})
