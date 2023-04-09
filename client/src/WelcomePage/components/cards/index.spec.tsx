import React from "react";
import { render, screen } from "@testing-library/react";
import PlatformCards from ".";
import { BrowserRouter } from "react-router-dom";
import { CARDS_INFORMATION_LIST } from "../../constants";

describe('StepsGuideline', () => {
    it('should render component', () => {
       render(<BrowserRouter><PlatformCards /></BrowserRouter>);
       expect(screen.getByTestId("platform-cards")).toBeInTheDocument();
       expect(screen.getByText("Our Goal 🎯")).toBeInTheDocument();
       expect(screen.getByText("Our platform is designed to provide comprehensive resources and tools that will help you enhance your English language proficiency.")).toBeInTheDocument();
       expect(screen.getByText("Always Up-to-Date 🔄")).toBeInTheDocument();
       expect(screen.getByText("Our grammar information and dictionary are regularly updated to ensure that you have access to the latest and most accurate information.")).toBeInTheDocument();
       expect(screen.getByText("Platform Structure 🗂")).toBeInTheDocument();
       CARDS_INFORMATION_LIST.map(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    });
})