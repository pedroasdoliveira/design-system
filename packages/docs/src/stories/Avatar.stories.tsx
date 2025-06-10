import { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@design-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/pedroasdoliveira.png",
    alt: "Foto de perfil",
  },
  tags: ["autodocs"],
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    scr: undefined,
  },
};
