import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import MyButton from './MyButton'

storiesOf('ui/MyButton', module)
  .add('default', () => {
    return {
      components: { MyButton },
      data() {
        return {
          text: text('text', 'click me!')
        }
      },
      template: `
        <MyButton
          :text='text'
          @onClick='onClick'
        >
          Click Me
        </MyButton>
      `,
      methods: {
        onClick: action('clicked!')
      }
    }
  }, { info: { summary: 'A ui button!' } })
