import { useState } from 'react';
import { LoadingSpinner, Title } from '../Сommon'
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { useReportsWidget } from './use-user-reports-widget';
import ReportGridSelector from './report-grid-selector';
import { SELECT_REPORT_OPTIONS } from './constants';
import { StyledSupportPanelContainer, StyledSupportPanelHeader } from './styled';
import { FormattedMessage } from 'react-intl';
import { SUPPORT_PANEL } from '../translations/constants';

const SupportPanel = () => {
  const [selectedReportOptions, selectReportOption] = useState(SELECT_REPORT_OPTIONS[0]);

  const { DATA_GRIDS, isLoading, error } = useReportsWidget();

  if (error) {
    if (error.networkError) {
      return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR} />
    } else {
      return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK} />
    }
  }

  if (isLoading) {
    return <LoadingSpinner size='large' />
  }

  return (
    <StyledSupportPanelContainer>
      <StyledSupportPanelHeader>
        <Title styles={{ fontSize: "2.5rem", margin: "20px" }}>
          <FormattedMessage id={SUPPORT_PANEL.TITLE} />
        </Title>
        <ReportGridSelector options={SELECT_REPORT_OPTIONS} selectReportOption={selectReportOption} />
      </StyledSupportPanelHeader>
      {DATA_GRIDS[selectedReportOptions]}
    </StyledSupportPanelContainer>
  )
}

export default SupportPanel