import { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "@design-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  tags: ["autodocs"],
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
};
