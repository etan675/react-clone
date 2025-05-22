
interface ReactDElement {
    type: string|Function,
    props: ReactDElementProps
}

type ReactDNode = ReactDElement | string | number | null | undefined | ReactDNode[];

interface ReactDElementProps {
    className?: string,
    onClick?: (e: MouseEvent) => void,
    children?: ReactDNode,
    // other HTML attributes...
}

export type {
    ReactDElement,
    ReactDNode,
    ReactDElementProps,
}