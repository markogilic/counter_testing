import { render, screen, cleanup } from '@testing-library/react';
import { Header } from '../Header';

test('test', () => {
   render(<Header />);
   expect(screen.getByText('Employees - Api')).toBeInTheDocument();
});
