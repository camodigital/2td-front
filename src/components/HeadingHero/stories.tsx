import { Story, Meta } from '@storybook/react/types-6-0'
import HeadingHero, { HeadingProps } from '.'

export default {
  title: 'HeadingHero',
  component: HeadingHero,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: (
      <span>
        <strong>Promovemos</strong> Tecnologia e Transformação Digital
      </span>
    )
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <HeadingHero {...args} />
