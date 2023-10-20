import { render, screen } from '@testing-library/react';
import ShowCount from '../ShowCount';

test('simple test', () => {
   render(<ShowCount count="result" />);
   const headingElement = screen.getByText(/result/i);
   expect(headingElement).toBeInTheDocument();
});

test('simple test', () => {
   render(<ShowCount count="result" />);
   const headingElement = screen.getByRole('heading');
   expect(headingElement).toBeInTheDocument();
});

test('conditional testing', () => {
   render(<ShowCount count="6" />);
   const headignElemnt = screen.getByTitle('marko');
   expect(headignElemnt).toContainHTML('h3');
   expect(headignElemnt).toHaveTextContent('Count is greater than 3');
});

test('conditional testing', () => {
   render(<ShowCount count="2" />);
   const headignElemnt = screen.getByTitle('marko');
   expect(headignElemnt).not.toContainHTML('h3');
});
