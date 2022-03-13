import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlertComponent as Alert } from './alert.component';

class AlertStory extends Alert {
  text = '';
}

export default {
  title: 'Shared/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertStory> = (args: AlertStory) => ({
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
