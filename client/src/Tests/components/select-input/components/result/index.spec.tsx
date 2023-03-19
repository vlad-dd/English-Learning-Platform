import React from "react";
import { render, screen } from "@testing-library/react";
import AnswerResult from ".";

describe('AnswerResult', () => {
    const props = {
        index: 0,
        selectedOptions: { 0: 0 }
    }
    const images = {
        correct: 'https://cdn-icons-png.flaticon.com/128/4315/4315445.png',
        incorrect: 'https://cdn-icons-png.flaticon.com/128/7699/7699001.png'
    }

    it('should render case for false index value', () => {
        render(<AnswerResult {...{...props, selectedOptions: { 0: 1 }}}/>)
        const icon = screen.getByRole('img');
        expect(screen.getByText("Correct")).toBeInTheDocument();
        expect(icon.getAttribute("src")).toBe(images.correct);
        expect(icon.getAttribute("style")).toBe("height: 15px;")
    })


    it('should render case for false index value', () => {
        render(<AnswerResult {...props}/>)
        const icon = screen.getByRole('img');
        expect(screen.getByText("Incorrect")).toBeInTheDocument();
        expect(icon.getAttribute("src")).toBe(images.incorrect);
        expect(icon.getAttribute("style")).toBe("height: 15px;")
    })
})