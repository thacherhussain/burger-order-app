import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import { Button } from "@storybook/react/demo";
// import { Button } from "react-bootstrap";

const theme = {
  color: 'red'
}
// Wrap each story component with the base theme
const withTheme = Story => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);


export default {
  title: 'Button',
  component: Button,
  decorators: [withTheme],

};

export const Primary = () => (
  <Button
    onClick={action('clicked')}>Primary Button
  </Button>
);

export const Secondary = () => (
  <Button
    variant="secondary" 
    onClick={action('clicked')}>Secondary Button
  </Button>
);
