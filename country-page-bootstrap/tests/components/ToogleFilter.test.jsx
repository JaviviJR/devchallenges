import { fireEvent, render, screen } from "@testing-library/react"
import ToogleFilter from "../../src/components/ToogleFilter"

describe('testing CheckFilter component', () => {
    const filtersTest = [
        { value: 'filter1Value', label: 'filter1Label' },
        { value: 'filter2Value', label: 'filter2Label' }
    ];

    const handlerMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should match with snapshot', () => {
        const { container } = render(
            <ToogleFilter
                label='labelTest'
                filters={ filtersTest }
                handler={ handlerMock }
            />
        );

        expect(container).toMatchSnapshot();
    })

    test('should show all filters', () => {
        render(
            <ToogleFilter
                label='labelTest'
                filters={ filtersTest }
                handler={ handlerMock }
            />
        );
        
        const filter1 = screen.getByRole('button', {name: 'filter1Label'});
        const filter2 = screen.getByRole('button', {name: 'filter2Label'});
        expect( filter1 ).toBeInTheDocument();
        expect( filter2 ).toBeInTheDocument();

        expect(filter1.name).toBe('filter1Value');
        expect(filter2.name).toBe('filter2Value');
    });

    test('should handle click', () => {
        render(
            <ToogleFilter
                label='labelTest'
                filters={ filtersTest }
                handler={ handlerMock }
            />
        );

        const filter1 = screen.getByRole('button', {name: 'filter1Label'});
        fireEvent.click(filter1);

        expect( filter1 ).toHaveClass('active')
        expect( handlerMock ).toHaveBeenLastCalledWith(['filter1Value']);
    });
})