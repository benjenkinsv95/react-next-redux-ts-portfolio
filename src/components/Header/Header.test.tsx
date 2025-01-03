import '@testing-library/jest-dom';
import { screen, render, within } from '@testing-library/react'

import Header from './Header';

describe('Header', () => {
    it('Has the correct author and links in navbar', async () => {
        render(<Header />)
        
        const navigation = screen.getByRole('navigation');
        // Needed to select "Ben Jenkins" in the navbar, not drawer on smaller screens
        const author = within(navigation).getByText('Ben Jenkins')
        within(navigation).getByRole('button', { name: /contact/i })
        within(navigation).getByRole('button', { name: /about/i })
        within(navigation).getByRole('button', { name: /projects/i })
        within(navigation).getByRole('button', { name: /skills/i })

        // Not technically necessary, since getByText would fail if it didn't find Ben Jenkins
        expect(author).toBeInTheDocument();
    })

    it('Has the correct author and links in drawer', async () => {
        render(<Header initialMobileOpen={true} />)
        
        const presentation = screen.getByRole('presentation');
        // Needed to select "Ben Jenkins" in the drawer on smaller screens
        const author = within(presentation).getByText('Ben Jenkins')
        within(presentation).getByRole('button', { name: /contact/i })
        within(presentation).getByRole('button', { name: /about/i })
        within(presentation).getByRole('button', { name: /projects/i })
        within(presentation).getByRole('button', { name: /skills/i })

        // Not technically necessary, since getByText would fail if it didn't find Ben Jenkins
        expect(author).toBeInTheDocument();
    })
})