import { render, screen } from "@testing-library/react";
import { withIntlProvider, withReduxProvider, withRouterProvider } from "../test-utils/hocs";
import { APPLICATION_LAYOUT_DATA_TEST_ID } from "./constants";
import ApplicationRoot from "./presentational";

const MockTree = () => {
  return (
    <div>
      <h1>Mock Tree</h1>
      <div>App</div>
    </div>
  );
};

const ApplicationRootWithProviders = withRouterProvider(withReduxProvider(withIntlProvider(ApplicationRoot)));
const MockTreeWithProviders = withRouterProvider(withReduxProvider(MockTree));

describe("ApplicationRoot", () => {
  beforeEach(() => {
    render(
      <>
        <ApplicationRootWithProviders />
        <MockTreeWithProviders />
      </>
    );
  });

  it("should render sider menu", () => {
    expect(screen.getByTestId(APPLICATION_LAYOUT_DATA_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText("Tenses")).toBeInTheDocument();
    expect(screen.getByText("Grammar Levels")).toBeInTheDocument();
    expect(screen.getByText("Dictionary")).toBeInTheDocument();
    expect(screen.getByText("Releases")).toBeInTheDocument();
  });

  it("should render application tree", () => {
    expect(screen.getByText("Mock Tree")).toBeInTheDocument();
    expect(screen.getByText("App")).toBeInTheDocument();
  });
});
