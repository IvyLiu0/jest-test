import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

const MesssageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('MessageComponent', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MesssageComponent, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})