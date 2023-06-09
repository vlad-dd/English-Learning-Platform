import { render, screen } from "@testing-library/react";
import AnswerResult from ".";
import { CORRECT_ANSWER_URL, INCORRECT_ANSWER_URL } from "../../../../constants";

describe('AnswerResult', () => {
    const props = {
        index: 0,
        selectedOptions: { 0: 0 }
    }

    it('should render case for false index value', () => {
        render(<AnswerResult {...{...props, selectedOptions: { 0: 1 }}}/>)
        const icon = screen.getByRole('img');
        expect(screen.getByText("Correct")).toBeInTheDocument();
        expect(icon.getAttribute("src")).toBe(CORRECT_ANSWER_URL);
        expect(icon.getAttribute("style")).toBe("height: 15px;")
    })


    it('should render case for false index value', () => {
        render(<AnswerResult {...props}/>)
        const icon = screen.getByRole('img');
        expect(screen.getByText("Incorrect")).toBeInTheDocument();
        expect(icon.getAttribute("src")).toBe(INCORRECT_ANSWER_URL);
        expect(icon.getAttribute("style")).toBe("height: 15px;")
    })
})