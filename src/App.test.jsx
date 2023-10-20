import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const add = vi.fn((a, b) => a + b);
const subtract = vi.fn((a, b) => a - b);

test('simple test', () => {
   render(<App />);
   const linkElement = screen.getByText(/test counter/i);
   expect(linkElement).toBeInTheDocument();
});

test('click event increment', () => {
   render(<App />);

   const buttonElement = screen.getByText(/add/i);
   fireEvent.click(buttonElement);
   const linkElement2 = screen.getByTitle(/counter/i).textContent;
   expect(linkElement2).toContain('1');
});

test('click event decrement', () => {
   render(<App />);
   const buttonElement = screen.getByText(/subtract/i);
   fireEvent.click(buttonElement);
   const linkElement2 = screen.getByTitle(/counter/i).textContent;
   expect(linkElement2).toContain('-1');
});

test('click event reset', () => {
   render(<App />);
   const buttonElement = screen.getByText(/reset/i);
   fireEvent.click(buttonElement);
   const linkElement2 = screen.getByTitle(/counter/i).textContent;
   expect(linkElement2).toContain('0');
});

test('add function', () => {
   expect(add(1, 2)).toBe(3);
});

test('subtract function', () => {
   expect(subtract(5, 2)).toBe(3);
});
