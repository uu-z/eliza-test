import type { Plugin } from "@elizaos/core";

import { depinDataProvider } from "./providers/depinData.ts";
import { depinProjects } from "./actions/depinProjects.ts";
import { sentientAI } from "./actions/sentientai.ts";

export const depinPlugin: Plugin = {
    name: "depin",
    description: "DePIN plugin for Sentient AI",
    providers: [depinDataProvider],
    evaluators: [],
    services: [],
    actions: [sentientAI, depinProjects],
};

export default depinPlugin;
