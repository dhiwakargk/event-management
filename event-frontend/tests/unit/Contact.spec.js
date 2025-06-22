// import { mount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'



describe('Contact.vue', () => {
  it('renders the enquiry form', () => {
    const wrapper = mount(Contact)
    expect(wrapper.find('h3').text()).toBe('Enquiry Form')
  })
})
