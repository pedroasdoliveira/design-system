import { StoryObj, Meta } from "@storybook/react";

import { Box, BoxProps, Text } from "@design-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando Box.</Text>
      </>
    ),
  },
  tags: ["autodocs"],
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
