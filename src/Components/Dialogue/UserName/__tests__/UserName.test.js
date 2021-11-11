import { render, screen, fireEvent } from '@testing-library/react';

import UserName from '../UserName';

const mockSetName = jest.fn()

describe('UserName Component', () => {
    test('arrow button submits name works', () => {
        render(<UserName setName={mockSetName} name={''} />);
        const submitNameHandler = jest.fn()

        const submitAvatar = screen.getByTestId('name-submit-avatar');

        fireEvent.click(submitAvatar);

        expect(submitNameHandler).toBeCalled;
    });

    test('user introduction is displayed after submitting name', () => {
        render(<UserName setName={mockSetName} name={''} />);

        const submitAvatar = screen.getByTestId('name-submit-avatar');
        const inputElement = screen.getByTestId('name-input');

        fireEvent.change(inputElement, { target: { value: 'John' } });
        fireEvent.click(submitAvatar);

        expect('Hi Tapply Bot! My name is').toBeInTheDocument;
        expect('John').toBeInTheDocument;
    })

    test(`introduction doesn't show for empty input`, () => {
        render(<UserName setName={mockSetName} name={''} />);

        const submitAvatar = screen.getByTestId('name-submit-avatar');

        fireEvent.click(submitAvatar);

        expect('Hi Tapply Bot! My name is').not.toBeInTheDocument;
    })
})