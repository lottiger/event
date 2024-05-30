import Footer from '@/app/(root)/_components/footer';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';


describe('Footer component', () => {
  it('renders "Kontakt" heading', () => {
    const { getByText } = render(<Footer />);
    const kontaktHeading = getByText('Kontakt');
    expect(kontaktHeading).toBeInTheDocument();
  });
});
