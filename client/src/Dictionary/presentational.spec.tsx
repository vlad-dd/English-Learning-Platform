import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import Dictionary from "./presentational";

describe('Dictionary', () => {
    it('should', () => {
        render(<Dictionary />)
        expect(screen.getByText('123')).toBeInTheDocument();
    })
})