import { render, screen } from '@testing-library/react';

import BotPronouns from '../BotPronouns';

describe('BotPronouns Component', () => {
    test('BotPronouns renders correct text', () => {
        render(<BotPronouns />);

        expect(screen.getByText(`Now that I know you a little better;`)).toBeInTheDocument;
        expect(screen.getByText(`What are your pronouns?`)).toBeInTheDocument;
    })
})