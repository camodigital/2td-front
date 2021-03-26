import { Story, Meta } from '@storybook/react/types-6-0'
import IcoRocket from 'icons/IcoRocket'
import CardIconLeft, { CardIconLeftProps } from '.'

export default {
  title: 'CardIconLeft',
  component: CardIconLeft,
  argTypes: {
    types: {
      icon: 'React.ReactNode',
      title: 'string',
      text: 'React.ReactNode'
    }
  }
} as Meta

export const Default: Story<CardIconLeftProps> = (args) => (
  <CardIconLeft {...args} />
)

Default.args = {
  icon: <IcoRocket />,
  title: 'Observality',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet facilisis odio. Integer sollicitudin, nisl mattis congue '
}
