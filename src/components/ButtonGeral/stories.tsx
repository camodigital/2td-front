import { Story, Meta } from '@storybook/react/types-6-0'
import ButtonGeral, { ButtonGeralProps } from '.'

export default {
  title: 'ButtonGeral',
  component: ButtonGeral,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Button Geral'
  }
} as Meta

export const Default: Story<ButtonGeralProps> = (args) => (
  <ButtonGeral {...args} />
)
