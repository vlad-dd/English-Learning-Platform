import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import useReportWidget from ".";
import { MAX_TEXT_AREA_LENGTH } from "../../../../constants";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const TestComponent = () => {
    const {
        report,
        setReport,
        isDisabled,
        minLengthError,
        maxLengthError,
        selectApplication,
        handleTextArea,
        setTouchedByMouse,
    } = useReportWidget();

    return (
        <div>
            <select data-testid="application" onChange={(e) => selectApplication(e.target.value)}>
                <option value="">Select an application</option>
                <option value="app1">App 1</option>
                <option value="app2">App 2</option>
            </select>
            <textarea
                data-testid="description"
                value={report.description}
                onChange={(e) => handleTextArea(e.target.value)}
                onBlur={() => setTouchedByMouse(true)}
            ></textarea>
            {minLengthError && <div data-testid="minLengthError">You should write at least 10 symbols!</div>}
            {maxLengthError && <div data-testid="maxLengthError">You have reached max of symbols!</div>}
            <button data-testid="submit" disabled={isDisabled}>
                Submit
            </button>
        </div>
    );
};

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

describe('Report Widget', () => {
    beforeEach(() => render(<ApolloProvider client={client} children={<TestComponent />} />));

    it('should render widget default values', () => {
        const submitButton = screen.getByTestId('submit');
        expect(submitButton).toBeDisabled();
    });

    it('should enable the submit button when valid input is provided', () => {
        fireEvent.change(screen.getByTestId('application'), { target: { value: 'app1' } });
        fireEvent.change(screen.getByTestId('description'), { target: { value: 'This is a valid description' } });
        const submitButton = screen.getByTestId('submit');
        expect(submitButton).not.toBeDisabled();
    });

    it('should display minLengthError when touched and description length is less than MIN_TEXT_AREA_LENGTH', () => {
        fireEvent.blur(screen.getByTestId('description'));
        const minLengthError = screen.queryByTestId('minLengthError');
        expect(minLengthError).toBeInTheDocument();
    });

    it('should display maxLengthError when description length is equal to MAX_TEXT_AREA_LENGTH', () => {
        fireEvent.change(screen.getByTestId('description'), { target: { value: 'a'.repeat(MAX_TEXT_AREA_LENGTH) } });
        const maxLengthError = screen.queryByTestId('maxLengthError');
        expect(maxLengthError).toBeInTheDocument();
    });

    it('should not display maxLengthError when description length is less than MAX_TEXT_AREA_LENGTH', () => {
        fireEvent.change(screen.getByTestId('description'), { target: { value: 'This is a valid description' } });
        const maxLengthError = screen.queryByTestId('maxLengthError');
        expect(maxLengthError).not.toBeInTheDocument();
    });
})