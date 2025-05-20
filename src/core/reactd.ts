import { hasChildren, nodeIsElement } from "./helpers";
import { ReactDElement, ReactDElementProps, ReactDNode } from "./reactd-types";

//TODO: type should support functional component
const createElement = (type: string, props: ReactDElementProps|null, ...children: ReactDNode[]): ReactDElement => {
    let p = {};

    if (props !== null) {
        p = props;
    }

    return {
        type,
        props: {
            ...p,
            ...children.length && { children }
        }
    }
}

const renderElement = (el: ReactDElement, parent: HTMLElement): void => {
    const domEl = document.createElement(el.type);

    Object.entries(el.props).forEach(([propName, value]) => {
        if (propName === 'className') {
            domEl.setAttribute('class', value as string);

        } else if (propName.startsWith('on')) {
            const eventName = propName.slice(2).toLowerCase();
            domEl.addEventListener(eventName, value);
        }
    });

    if (hasChildren(el)) {
        const childrenOfEl = (el.props as { children: ReactDNode }).children;

        if (Array.isArray(childrenOfEl)) {
            childrenOfEl.forEach(child => {
                renderNode(child, domEl);
            })
        } else {
            renderNode(childrenOfEl, domEl);
        }
    }

    parent.appendChild(domEl);
}

const renderNode = (node: ReactDNode, parent: HTMLElement): void => {

    if (nodeIsElement(node)) {
        renderElement(node, parent);

    } else if (Array.isArray(node) ) {
        node.forEach(child => {
            renderNode(child, parent);
        });

    } else if (typeof node === 'function') {
        //TODO: custom functional component
        console.log('function: ', );

    } else if (typeof node === 'string') {
        const textNode = document.createTextNode(node);
        parent.appendChild(textNode);

    } else if (typeof node === 'number') {
        const textNode = document.createTextNode(node.toString());
        parent.appendChild(textNode);

    }
}

const ReactD = {
    createElement,
    renderElement,
}

export default ReactD;