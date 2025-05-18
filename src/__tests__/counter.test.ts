import { setupCounter } from "../counter";

describe('counter test', () => {
    test('that counter increments', () => {
        const button = document.createElement('button');
        setupCounter(button);

        button.click();

        expect(button.innerHTML).toBe('count is 1');
    })
})