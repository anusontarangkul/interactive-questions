import { render, screen, getByTestId } from '@testing-library/react';

import BotBirthday from '../BotBirthday';

beforeEach(() => {
    Date.now = jest.fn(() => new Date("2020-07-13T12:33:37.000Z"));
})

describe('BotBirthday Component', () => {
    test(`BotBirthday renders user's name`, () => {
        render(<BotBirthday name='John' />);

        expect(screen.getByText(`John`)).toBeInTheDocument;
    })

    test('renders current date in text', () => {
        const { getByTestId } = render(<BotBirthday name='John' />);
        const textEl = getByTestId('bot-birthday');
        expect(textEl.textContent).toContain('July 13th, 2020')
    })

    test(`When's your birthday? is bold`, () => {
        render(<BotBirthday name='John' />);
        const element = screen.getByText(`When's your birthday?`)
        const styles = getComputedStyle(element);
        expect(styles.fontWeight).toBe('bold')

    })
})