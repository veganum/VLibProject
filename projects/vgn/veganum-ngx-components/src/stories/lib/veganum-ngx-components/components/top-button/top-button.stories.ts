import { componentWrapperDecorator, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TopButton } from '../../../../../components/top-button/top-button';



const meta: Meta<TopButton> = {
  title: 'veganum-ngx-components/Components/TopButton',
  component: TopButton,
  decorators: [
    moduleMetadata({
      imports: [TopButton],
    }),
    componentWrapperDecorator(
      (story) =>
        `${story}<div style="min-height: 1500px; background: #e8e8e8;">Scroll to show up top-button</div>`
    ),
  ],
};

export default meta;


type Story = StoryObj<TopButton>;

export const TEXT: Story = {
  name: 'Text',
  args: {
    showIcon: false,
    text: 'Top',
  },
}

export const ICON: Story = {
  name: 'Icon',
  args: {
    showIcon: true,
    text: 'Top',
  },
};

export const COLOR: Story = {
  name: 'Color',
  args: {
    showIcon: true,
    color: '#cb1818',
  },
};


