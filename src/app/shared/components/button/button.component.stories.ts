import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent as Button } from './button.component';

class ButtonStory extends Button {
  text = '';
}

export default {
  title: 'Shared/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonStory> = (args: ButtonStory) => ({
  props: args,
  template: `
    <app-button
      color="${args.color}"
      [loading]="${args.loading}"
      [disabled]="${args.disabled}"
    >
    ${args.text}
    </app-button>
  `,
});

export const Blue = Template.bind({});
Blue.args = {
  disabled: false,
  loading: false,
  color: 'blue',
  text: 'button',
};

export const Red = Template.bind({});
Red.args = {
  disabled: false,
  loading: false,
  color: 'red',
  text: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  loading: false,
  color: 'red',
  text: 'button',
};

export const Loading = Template.bind({});
Loading.args = {
  disabled: false,
  loading: true,
  color: 'red',
  text: 'button',
};
