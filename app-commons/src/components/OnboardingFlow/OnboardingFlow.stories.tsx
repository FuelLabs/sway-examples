import type { Meta, StoryObj } from "@storybook/react";

import { OnboardingFlow } from "./OnboardingFlow";

const meta: Meta<typeof OnboardingFlow> = {
    component: OnboardingFlow,
};

export default meta;
type Story = StoryObj<typeof OnboardingFlow>;

export const Primary: Story = {
    args: {
        primary: true,
        label: "Onboarding Flow",
    }
}
