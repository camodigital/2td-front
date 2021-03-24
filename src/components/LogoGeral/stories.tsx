import { Story, Meta } from '@storybook/react/types-6-0'
import LogoGeral, { LogoProps } from '.'

export default {
  title: 'LogoGeral',
  component: LogoGeral,
  argTypes: {
    types: {
      color1: 'string',
      color2: 'string'
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <LogoGeral {...args} />
