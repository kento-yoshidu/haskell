import React from 'react';

import Header from './header';

export default {
  component: Header,
  title: 'Task',
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: "Hello"
};
