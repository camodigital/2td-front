import { Story, Meta } from '@storybook/react/types-6-0'
import SecClients from '.'

export default {
  title: 'SecProducts',
  component: SecClients
} as Meta

export const Default: Story = () => <SecClients />
