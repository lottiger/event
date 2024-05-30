import Footer from '@/app/(root)/_components/footer';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';


describe('Footer component', () => {
  it('renders "Contact" heading', () => {
    const { getByText } = render(<Footer />);
    const contactHeading = getByText('Contact');
    expect(contactHeading).toBeInTheDocument();
  });
});
