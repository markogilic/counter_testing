import { render, screen } from '@testing-library/react';
import {MemoryRouter} from "react-router";

import NavBar from "../NavBar.jsx";

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

describe('NavBar', () => {
    test('Home text appears in component', () => {
        render(<MemoryRouter><NavBar /></MemoryRouter>);

        const homeLinkText = screen.getByText('Home')

        expect(homeLinkText).toBeInTheDocument();
    });
});
