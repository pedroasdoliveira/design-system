import { StoryObj, Meta } from "@storybook/react";

import { Button, ButtonProps } from "@design-ui/react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Enviar",
  },
  tags: ["autodocs"],
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: "small",
  },
};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: "big",
  },
};
