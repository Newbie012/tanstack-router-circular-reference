import { ReactRouter } from "@tanstack/react-router";
import { aRoute } from "./a";
import { rootRoute } from "./_root";

export const routeTree = rootRoute.addChildren([aRoute]);

export const router = new ReactRouter({ routeTree });

export type RootRouter = typeof router;

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
