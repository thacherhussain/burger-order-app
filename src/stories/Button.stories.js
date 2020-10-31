import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from "react-bootstrap";
import { Button } from "@storybook/react/demo";

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button
    onClick={action('clicked')}>Primary Button
  </Button>
);

// export const Secondary = () => (
//   <Button
//     variant="secondary" 
//     onClick={action('clicked')}>Secondary Button
//   </Button>
// );
