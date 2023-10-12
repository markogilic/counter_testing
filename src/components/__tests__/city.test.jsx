import { render, screen } from '@testing-library/react';

import City from '../City';
import {MemoryRouter} from "react-router";

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

test('should render city component', () => {
   render(<MemoryRouter><City /></MemoryRouter>);

   const cityElement = screen.getByText('City');

   expect(cityElement).toBeInTheDocument()
});
