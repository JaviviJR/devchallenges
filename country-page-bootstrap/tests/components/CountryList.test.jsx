import { render, screen, within } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import CountryList from "../../src/components/CountryList";

const countries = Array.from({ length: 20 }, (_, i) => (
    {
        ccn3: `ABC${i}`,
        name: `Country ${i + 1}`,
        population: `${(i + 1) * 10000}`,
        area: `${(i + 1)*10}`,
        region: `regionTest${i}`,
        subregion: `subregionTest${i}`,
        flag: `https://example.com/flags/test${i}.svg`,
        independent: true,
        unMember: true,
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));

describe('testing CountryList component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should match with snapshot', () => {
        const { container } = render(
            <CountryList countries={ countries }/>
        );

        expect(container).toMatchSnapshot();
    })

    test('should render table and pagination', () => {
        render(
            <CountryList countries={ countries }/>
        );
        
        const table = screen.getByRole('table');
        const rows = screen.getAllByRole('row');
        const nextButton = screen.getByRole('button', {name: 'Next'});
        const previousButton = screen.getByRole('button', {name: 'Next'});

        expect(table).toBeInTheDocument();
        expect(rows.length).toEqual(11); // +1 from row header
        expect(nextButton).toBeInTheDocument();
        expect(previousButton).toBeInTheDocument();
    });

    test('should paginate country list', () => {
        render(
            <CountryList countries={ countries }/>
        );
        const rows = screen.getAllByRole('row');
        expect(rows.length).toEqual(11); // +1 from row header
    })

    test('should displays different countries on next page', async () => {
        const user = userEvent.setup();
      
        render(<CountryList countries={countries} />);
      
        const firstPageRows = screen.getAllByRole('row');        
        let cells = within(firstPageRows[1]).getAllByRole('cell');        
        const firstCountryName = cells[1].innerHTML;

        const nextButton = screen.getByRole('button', {name: 'Next'});
        await user.click(nextButton);
        
        const secondPageRows = screen.getAllByRole('row');        
        cells = within(secondPageRows[1]).getAllByRole('cell');        
        const secondCountryName = cells[1].innerHTML;
      
        expect(firstCountryName).not.toEqual(secondCountryName);
      });
})