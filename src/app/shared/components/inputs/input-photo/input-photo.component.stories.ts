import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputPhotoComponent as InputPhoto } from '../input-photo/input-photo.component';

export default {
  title: 'Shared/Inputs/Input Photo',
  component: InputPhoto,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
} as Meta;

const Template: Story<InputPhoto> = (args: InputPhoto) => ({
  props: args,
});

export const Basic = Template.bind({});
Template.args = {
  id: 'id',
};
