import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { InputPasswordComponent as InputPassword } from './input-password.component';

export default {
  title: 'Shared/Inputs/Input Password',
  component: InputPassword,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
} as Meta;

const Template: Story<InputPassword> = (args: InputPassword) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Insira a sua senha',
  error: false,
  label: 'Senha',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'senha invalida',
  error: true,
  label: 'Campo com erro',
};
