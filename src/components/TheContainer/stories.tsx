import { Story, Meta } from '@storybook/react/types-6-0'
import TheContainer, { TheContainerProps } from '.'

export default {
  title: 'TheContainer',
  component: TheContainer,
  argTypes: {
    types: {
      children: 'string',
      size: 'string'
    }
  }
} as Meta

export const Default: Story<TheContainerProps> = (args) => (
  <TheContainer {...args} />
)
