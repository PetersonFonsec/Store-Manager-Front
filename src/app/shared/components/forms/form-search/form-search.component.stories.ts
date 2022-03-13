import { FormBuilder } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormSearchComponent as Form } from './form-search.component';

export default {
  title: 'Shared/Forms/FormSearch',
  component: Form,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
      providers: [FormBuilder],
    }),
  ],
} as Meta;

const Template: Story<Form> = (args) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'placeholder',
};
