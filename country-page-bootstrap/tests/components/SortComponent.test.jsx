import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import SortComponent from "../../src/components/SortComponent";

describe('testing Sort component', () => {
    const sortTest = [
        { value: 'sort1Value', label: 'sort1Label' },
        { value: 'sort2Value', label: 'sort2Label' }
    ];

    const handlerMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should match with snapshot', () => {
        const { container } = render(
            <SortComponent
                sortByOptions={ sortTest }
                handler={ handlerMock }
            />
        );

        expect(container).toMatchSnapshot();
    })

    test('should show all options', () => {
        render(
            <SortComponent
                sortByOptions={ sortTest }
                handler={ handlerMock }
            />
        );

        const combobox = screen.getByRole('combobox')
        const sort1 = screen.getByRole('option', {name: 'sort1Label'});
        const sort2 = screen.getByRole('option', {name: 'sort2Label'});

        expect( combobox ).toBeInTheDocument();
        expect( sort1 ).toBeInTheDocument();
        expect( sort2 ).toBeInTheDocument();

        expect(sort1.value).toBe('sort1Value');
        expect(sort2.value).toBe('sort2Value');
    });
    
    test('should handle click', async () => {
        const user = userEvent.setup()

        render(
            <SortComponent
                sortByOptions={ sortTest }
                handler={ handlerMock }
            />
        );

        const combobox = screen.getByRole('combobox')
        const sort1 = screen.getByRole('option', {name: 'sort1Label'});

        await user.click(combobox);
        await user.selectOptions(combobox, sort1);

        expect( handlerMock ).toHaveBeenLastCalledWith('sort1Value');
    });
})