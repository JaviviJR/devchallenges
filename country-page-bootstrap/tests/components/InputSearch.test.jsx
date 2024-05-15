import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import InputSearch from "../../src/components/InputSearch";

jest.mock('../../src/assets/Search.svg', () => 'Search icon');

describe('testing InputSearch component', () => {
    const handlerMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should match with snapshot', () => {
        const { container } = render(
            <InputSearch handler={ handlerMock } />
        );

        expect(container).toMatchSnapshot();
    })

    test('should show input text', () => {
        render(
            <InputSearch handler={ handlerMock } />
        );
        
        const input = screen.getByRole('textbox');
        expect( input ).toBeInTheDocument();
    });

    test('should handle search text', async () => {
        render(
            <InputSearch handler={ handlerMock } />
        );

        const input = screen.getByRole('textbox');
        
        await userEvent.type(input, 't');
        await new Promise((resolve) => setTimeout(resolve, 50));
        await userEvent.type(input, 'e');
        await new Promise((resolve) => setTimeout(resolve, 50));
        await userEvent.type(input, 's');
        await new Promise((resolve) => setTimeout(resolve, 50));
        await userEvent.type(input, 't');

        // Wait for the debounce timeout to finish
        await waitFor(() => expect(handlerMock).toHaveBeenCalledTimes(1));
        expect(handlerMock).toHaveBeenCalledWith('test');
    });
})