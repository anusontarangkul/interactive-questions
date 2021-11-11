import { render, screen, fireEvent } from '@testing-library/react';

import UserBirthday from '../UserBirthday';

const mockSetCompletedBirthday = jest.fn();

describe('UserBirthday Component', () => {
    test('arrow button submits birthday works', () => {
        const { getByTestId } = render(<UserBirthday completedBirthday={false} setCompletedBirthday={mockSetCompletedBirthday} initial='J' />)
        const submitDateHandler = jest.fn();

        const submitAvatar = screen.getByTestId('name-submit-avatar');

        fireEvent.click(submitAvatar);

        expect(submitDateHandler).toBeCalled;
    });

    test('avatar with initial renders after submitting birthday', () => {
        render(<UserBirthday completedBirthday={true} setCompletedBirthday={mockSetCompletedBirthday} initial='J' />)

        const initialsAvatar = screen.getByTestId('initials-avatar')

        expect(initialsAvatar.textContent).toBe('J')
    });

})