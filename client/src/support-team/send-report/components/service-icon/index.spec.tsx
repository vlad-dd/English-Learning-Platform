import * as ReactRedux from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import store from "../../../../store";
import { openSendReportModal } from "../../../../store/reducers/send-report";
import ReportServiceIcon from './index';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));
  
  describe("Service icon", () => {
    const useDispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');
    const dispatch = jest.fn();
   
    beforeEach(() => {
        useDispatchSpy.mockReturnValue(dispatch);
        render(<ReactRedux.Provider store={store}><ReportServiceIcon /></ReactRedux.Provider>);
    });

    it('should render component correctly', () => {
        const iconButton = screen.getByTestId("report-service-icon");
        expect(iconButton).toBeInTheDocument();
        expect(iconButton.getAttribute("style")).toBe("background: rgb(24, 144, 255);");
        expect(screen.getByRole("img").getAttribute("aria-label")).toBe("customer-service")
    });

    it('should open the modal', () => {
        const button = screen.getByTestId('report-service-icon');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(openSendReportModal());
    });
});