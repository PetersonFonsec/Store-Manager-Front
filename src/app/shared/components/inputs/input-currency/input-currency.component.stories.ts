import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { NgxCurrencyModule } from 'ngx-currency';
import { InputCurrencyComponent as InputCurrency } from './input-currency.component';

export default {
  title: 'Shared/Inputs/Input Currency',
  component: InputCurrency,
  decorators: [
    moduleMetadata({
      imports: [NgxCurrencyModule],
    }),
  ],
} as Meta;

const Template: Story<InputCurrency> = (args: InputCurrency) => ({
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
