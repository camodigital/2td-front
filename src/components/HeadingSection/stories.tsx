import { Story, Meta } from '@storybook/react/types-6-0'
import HeadingSection, { HeadingSectionProps } from '.'

export default {
  title: 'HeadingSection',
  component: HeadingSection,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: (
      <span>
        Nossos <strong>Produtos</strong>
      </span>
    )
  }
} as Meta

export const Default: Story<HeadingSectionProps> = (args) => (
  <HeadingSection {...args} />
)
