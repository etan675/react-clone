import { ReactDElement, ReactDElementProps, ReactDNode } from "./reactd-types";

const propsHasKey = (props: ReactDElementProps, key: string): boolean => {
    return !!props && typeof props === 'object' && key in props;
}

const hasChildren = (el: ReactDElement): boolean => {
    return propsHasKey(el.props, 'children') && !!(el.props as { children: ReactDNode }).children;
}

const nodeIsElement = (node: ReactDNode) => {
    return (
        !!node && typeof node === 'object' &&
        'type' in node &&
        'props' in node
    )
}

export {
    propsHasKey,
    hasChildren,
    nodeIsElement,
}