import ReactD from "../reactd"

describe('test creating a ReactD element', () => {
    test('div inside a div', () => {
        const child = {
            type: 'div',
            props: {}
        };

        const el = ReactD.createElement('div', { className: 'class1' }, child);

        expect(el).toEqual({
            type: 'div',
            props: {
                className: 'class1',
                children: [
                    {
                        type: 'div',
                        props: {}
                    }
                ]
            }
        });
    })

    test('div with no props or child', () => {
        const el = ReactD.createElement('div', null);

        expect(el).toEqual({
            type: 'div',
            props: {}
        });
    })
})