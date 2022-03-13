import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NgxMaskModule } from 'ngx-mask';
import { InputTextComponent as InputText } from './input-text.component';

export default {
  title: 'Shared/Inputs/Input Text',
  component: InputText,
  decorators: [
    moduleMetadata({
      imports: [NgxMaskModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story<InputText> = (args: InputText) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Peterson',
  error: false,
  label: 'Campo de texto',
  mask: '',
  val: 'Peterson',
};

export const DateMask = Template.bind({});
DateMask.args = {
  placeholder: '00/00/0000',
  error: false,
  label: 'Campo com mascara',
  mask: '00/00/0000',
  val: '13/03/2022',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'valor invalido',
  error: true,
  label: 'Campo com erro',
  mask: '',
  val: 'valor invalido',
};
