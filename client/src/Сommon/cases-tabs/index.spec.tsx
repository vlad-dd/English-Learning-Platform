import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CasesTabs from ".";
import { ICases } from "../../Tenses";

const props: ICases[] = [
  {
    icon: "affirmative-img.jpg",
    key: "1",
    label: "Affirmative",
    titles: [{ description: "Affirmative description" }],
  },
  {
    icon: "question-img.jpg",
    key: "2",
    label: "Question",
    titles: [{ description: "Question description" }],
  },
  {
    icon: "negative-img.jpg",
    key: "3",
    label: "Negative",
    titles: [{ description: "Negative description" }],
  },
];

describe("CasesTabs", () => {
  beforeEach(() => {
    render(<CasesTabs config={props} />);
  });
  
  it("should be in the document", () => {
    expect(screen.getByTestId("cases-tabs-id")).toBeInTheDocument();
  });

  it("should render affirmative part", () => {
    expect(screen.getByRole("img").getAttribute("src")).toBe("affirmative-img.jpg");
    expect(screen.getByText("Affirmative")).toBeInTheDocument();
    expect(screen.getByText("Affirmative description")).toBeInTheDocument();
  });

  it("should render question part", () => {
    fireEvent.click(screen.getByText("Question"))
    expect(screen.getByText("Question")).toBeInTheDocument();
    expect(screen.getByRole("img").getAttribute("src")).toBe("question-img.jpg");
    expect(screen.getByText("Question description")).toBeInTheDocument();
  });

  it("should render negative part", () => {
    fireEvent.click(screen.getByText("Negative"))
    expect(screen.getByText("Negative")).toBeInTheDocument();
    expect(screen.getByRole("img").getAttribute("src")).toBe("negative-img.jpg");
    expect(screen.getByText("Negative description")).toBeInTheDocument();
  });

});
