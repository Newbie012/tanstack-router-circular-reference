import { Route } from "@tanstack/react-router";
import { rootRoute } from "./_root";
import { router } from "./_router";

export const aRoute = new Route({
    getParentRoute: () => rootRoute,
    component: A,
    path: "a",
    beforeLoad: () => {
        console.log(router.basepath);
    }
});

type Props = {};

export default function A({}: Props) {
    return <div>a</div>;
}
