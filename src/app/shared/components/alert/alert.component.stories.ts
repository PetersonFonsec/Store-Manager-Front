// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlertComponent as Alert } from './alert.component';

export default {
  title: 'Shared Component/Alert',
  component: Alert,
} as Meta;

const Template: Story = (args: any) => ({
  props: args,
  template: `
    <app-alert type="${args.type}">
      ${args.text}
    </app-alert>
  `,
});

export const Error = Template.bind({});
Error.args = {
  type: 'Error',
  text: 'Lorem ipsum dolor sit amet',
};

export const Success = Template.bind({});
Success.args = {
  type: 'Success',
  text: 'Lorem ipsum dolor sit amet',
};
