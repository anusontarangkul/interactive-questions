import { render, screen, fireEvent } from '@testing-library/react';

import UserPronouns from '../UserPronouns';

describe('UserPronouns', () => {
    test('renders currect text', () => {
        render(<UserPronouns />)

        expect(screen.getByText('👨')).toBeInTheDocument;
        expect(screen.getByText('👩')).toBeInTheDocument;
        expect(screen.getByText('😊')).toBeInTheDocument;

        expect(screen.getByText('He /')).toBeInTheDocument;
        expect(screen.getByText('She /')).toBeInTheDocument;
        expect(screen.getByText('They /')).toBeInTheDocument;

        expect(screen.getByText('Him')).toBeInTheDocument;
        expect(screen.getByText('Her')).toBeInTheDocument;
        expect(screen.getByText('Them')).toBeInTheDocument;

        expect(screen.getByText('Select One')).toBeInTheDocument;
    })

    test('submit button is called', () => {
        render(<UserPronouns />)
        const submitGenderHandler = jest.fn()

        const heElement = screen.getByText('👩');
        const submitAvatar = screen.getByTestId('name-gender-avatar');

        fireEvent.click(heElement);
        fireEvent.click(submitAvatar);

        expect(submitGenderHandler).toBeCalled;
    })
})