import { Story, Meta } from '@storybook/react/types-6-0'
import HeadingArea, { HeadingAreaProps } from '.'

export default {
  title: 'HeadingArea',
  component: HeadingArea,
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: 'Title Area'
  }
} as Meta

export const Default: Story<HeadingAreaProps> = (args) => (
  <HeadingArea {...args} />
)
