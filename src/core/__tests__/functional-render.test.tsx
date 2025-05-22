import ReactD from "../reactd"

describe('functional components render to dom', () => { 
    test('simple div', () => {
        const fc = () => {
            return (
                <div></div>
            )
        }

        const el = ReactD.createElement(fc, null);
        const parent = document.createElement('div');

        ReactD.renderElement(el, parent);

        expect(parent.innerHTML).toBe(
            '<div></div>'
        )
    })

    test('nested div', () => {
        const fc = () => {
            return (
                <div>
                    <div></div>
                </div>
            )
        }

        const el = ReactD.createElement(fc, null);
        const parent = document.createElement('div');

        ReactD.renderElement(el, parent);

        expect(parent.innerHTML).toBe(
            '<div><div></div></div>'
        )
    })

    test('nested div with simple props', () => {
        const fc = () => {
            return (
                <div className="class1">
                    <div className="class2"></div>
                </div>
            )
        }

        const el = ReactD.createElement(fc, null);
        const parent = document.createElement('div');

        ReactD.renderElement(el, parent);

        expect(parent.innerHTML).toBe(
            '<div class="class1">' +
                '<div class="class2"></div>' +
            '</div>'
        )
    })

    test('event handlers', () => {
        const mockOnClick = jest.fn();
        const fc = () => {
            return (
                <div className="class1" onClick={mockOnClick}></div>
            )
        }

        const el = ReactD.createElement(fc, null);
        const parent = document.createElement('div');

        ReactD.renderElement(el, parent);
        const domEl: HTMLDivElement|null = parent.querySelector('.class1');
        domEl && domEl.click();

        expect(parent.innerHTML).toBe(
            '<div class="class1"></div>'
        );
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    })
})