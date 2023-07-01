import * as ReactRedux from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { openSendReportModal } from "../../../../store/reducers/send-report-modal";
import { withReduxProvider } from "../../../../test-utils/hocs";
import { REPORT_SERVICE_ICON_DATA_TEST_ID } from "../../../constants";
import ReportServiceIcon from './index';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
  }));

  const ReportServiceIconWithProvider = withReduxProvider(ReportServiceIcon)
  
  describe("Service icon", () => {
    const useDispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');
    const dispatch = jest.fn();
   
    beforeEach(() => {
        useDispatchSpy.mockReturnValue(dispatch);
        render(<ReportServiceIconWithProvider />);
    });

    it('should render component correctly', () => {
        const iconButton = screen.getByTestId(REPORT_SERVICE_ICON_DATA_TEST_ID);
        expect(iconButton).toBeInTheDocument();
        expect(screen.getByRole("img").getAttribute("aria-label")).toBe("customer-service")
    });

    it('should open the modal', () => {
        const button = screen.getByTestId(REPORT_SERVICE_ICON_DATA_TEST_ID);
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(openSendReportModal());
    });
});