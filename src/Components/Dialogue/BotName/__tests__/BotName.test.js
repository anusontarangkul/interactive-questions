import { render, screen } from '@testing-library/react';

import BotName from '../BotName';

describe('BotName Component', () => {
    test('BotName renders correct text', () => {
        render(<BotName />);

        expect(screen.getByText(`Welcome to Tapply. Let’s start off by introducing ourselves. I’m Tapply Bot.`)).toBeInTheDocument;
    })

    test('BotName renders 🤖', () => {
        render(<BotName />);

        expect(screen.getByText(`🤖`)).toBeInTheDocument;
    })
})
