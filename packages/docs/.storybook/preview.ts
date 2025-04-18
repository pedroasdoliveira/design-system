import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#F7F9F2" },
        // 👇 Add your own
        { name: "Maroon", value: "#400" },
      ],
      // 👇 Specify which background is shown by default
      default: "Dark",
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: "dark" },
  },
  tags: ["autodocs"],
};

export default preview;
