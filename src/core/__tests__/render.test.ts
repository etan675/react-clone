import ReactD from "../reactd"

describe('test rendering reactd element to dom', () => {
    test('an empty div', () => {
        const reactDEl = ReactD.createElement('div', null);
        const parent = document.createElement('div');

        ReactD.renderElement(reactDEl, parent);

        expect(parent.innerHTML).toBe(
            `<div></div>`
        )
    })

    test('nested div', () => {
        const childEl = ReactD.createElement('div', null);
        const el = ReactD.createElement('div', null, childEl);

        const parent = document.createElement('div');

        ReactD.renderElement(el, parent);

        expect(parent.innerHTML).toBe(
            `<div><div></div></div>`  
        );
    })

    test('div with multiple children', () => {
        const childEl = ReactD.createElement('div', null);
        const childE2 = ReactD.createElement('div', null);
        const el = ReactD.createElement('div', null, [childEl, childE2]);

        const parent = document.createElement('div');

        ReactD.renderElement(el, parent);

        expect(parent.innerHTML).toBe(
            '<div>' + 
                '<div></div>' + 
                '<div></div>' + 
            '</div>'
        );
    })

    test('div with className and onClick props', () => {
        const mockOnClick = jest.fn();
        const el = ReactD.createElement(
            'div',
            {
                className: 'myClassName',
                onClick: mockOnClick
            }
        );
        const parent = document.createElement('div');
        
        ReactD.renderElement(el, parent);
        const domEl: HTMLDivElement|null = parent.querySelector('.myClassName');
        domEl && domEl.click();

        expect(parent.innerHTML).toBe(
            '<div class="myClassName"></div>'
        );

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    })

    test('div with a string child', () => {
        const el = ReactD.createElement('div', null, 'hello');

        const parent = document.createElement('div');
        ReactD.renderElement(el, parent);

        expect(parent.innerHTML).toBe(
            `<div>hello</div>`  
        );
    })

    test('div with a number child', () => {
        const el = ReactD.createElement('div', null, 100);

        const parent = document.createElement('div');
        ReactD.renderElement(el, parent);

        expect(parent.innerHTML).toBe(
            `<div>100</div>`  
        );
    })
})