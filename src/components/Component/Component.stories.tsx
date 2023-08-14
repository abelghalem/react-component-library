import { Meta, StoryObj } from "@storybook/react";
import Component from "./Component";

const meta: Meta<typeof Component> = {
    component: Component
};

export default meta;

export const Primary: StoryObj<typeof Component> = {
  args: {
    title: "Primary",
  },
};
