import React from 'react';

import { action } from '@storybook/addon-actions';

// import { ThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'



// const theme = {
//   color: 'red'
// }
// // Wrap each story component with the base theme
// const withTheme = Story => (
//   <ThemeProvider theme={theme}>
//     <Story />
//   </ThemeProvider>
// );


export default {
  title: 'Material UI Button',
};

export const Default = () => (
  <Button onClick={action('Default button clicked')} variant="contained">
    Default
  </Button>
);

export const Primary = () => (
  <Button color="primary" onClick={action('Primary button clicked')} variant="contained">
    Primary
  </Button>
);

export const Secondary = () => (
  <Button color="secondary" onClick={action('Secondary button clicked')} variant="contained">
    Secondary
  </Button>
);
