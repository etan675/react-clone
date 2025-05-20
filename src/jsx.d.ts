import { ReactDNode } from "./core/reactd-types";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: JSXDivProps;
        }
    }
}

interface JSXDivProps {
    className?: string,
    onClick?: (e: MouseEvent) => void,
    children?: ReactDNode,
    // other HTML attributes...
}

export default {};