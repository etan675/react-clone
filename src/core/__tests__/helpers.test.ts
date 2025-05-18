import { hasChildren, nodeIsElement, propsHasKey } from "../../core/helpers";
import { ReactDNode } from "../../core/reactd-types";

describe('testing helpers and utils', () => {
    test('prop has key', () => {
        const props = { className: 'class1' };

        expect(propsHasKey(props, 'className')).toBe(true);
        expect(propsHasKey(props, 'name')).toBe(false);
    })

    test('el has children', () => {
        const el = {
            type: 'div',
            props: {
                children: {
                    type: 'div',
                    props: {}
                }
            }
        };

        expect(hasChildren(el)).toBe(true);
    })

    test('node is element', () => {
        const el: ReactDNode = {
            type: 'div',
            props: {}
        };

        expect(nodeIsElement(el)).toBe(true);
    })
})