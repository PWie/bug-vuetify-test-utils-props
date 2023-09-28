import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { VTextField } from 'vuetify/components'
import { vuetify } from '@/main'

describe('HelloWorld', () => {
  it('should recognize Vuetify color prop', () => {
    const wrapper = mount(
      HelloWorld,
      { 
        props: { msg: 'Hello Vitest' }, 
        global: {
          components: { HelloWorld },
          plugins: [vuetify],
        },
      },
    )

    const textField = wrapper.getComponent(VTextField);

    // label prop is recognised correctly
    expect(textField.props('label')).toBe('Test field')

    // color prop value is passed to component vm
    expect(textField.vm.color).toBe('primary')

    // but color prop itself is not recognized :( (it is undefined here)
    // this works fine for vuetify@3.1.12 but breaks since vuetify@3.1.13
    expect(textField.props('color')).toBe('primary')
  })
})
