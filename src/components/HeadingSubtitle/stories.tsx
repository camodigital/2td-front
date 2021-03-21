import { Story, Meta } from '@storybook/react/types-6-0'
import HeadingSubtitle, { HeadingSubtitleProps } from '.'

export default {
  title: 'HeadingSubtitle',
  component: HeadingSubtitle,
  argTypes: {
    children: { type: 'string' }
  },
  args: {
    children: 'Subtitle'
  }
} as Meta

export const Default: Story<HeadingSubtitleProps> = (args) => (
  <HeadingSubtitle {...args} />
)
