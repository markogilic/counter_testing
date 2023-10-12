import { render, screen } from '@testing-library/react';
import {MemoryRouter} from "react-router";

import Header from '../Header';

const mocks = vi.hoisted(() => ({
   get: vi.fn().mockResolvedValue([
      "Manchester",
      "London",
      "Leeds",
      "Stoke-on-Trent",
      "Dublin",
      "Cardiff"
   ]),
}));

vi.mock('axios', async(importActual) => {
   const actual = await importActual();

   const mockAxios = {
      default: {
         ...actual.default,
         create: vi.fn(() => ({
            ...actual.default.create(),
            get: mocks.get,
         })),
      },
   };

   return mockAxios;
});

afterEach(() => {
   vi.clearAllMocks()
})

test('test', () => {
   render(<MemoryRouter><Header /></MemoryRouter>);

   expect(screen.getByText('Employees - Api')).toBeInTheDocument();
});
