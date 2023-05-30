import React from 'react';
import { SendReportModal } from '../support-team';
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import {
  WelcomePageHeaderSection,
  PlatformCards,
  StepsGuideline,
  LearnerFeedbacks,
  SocialMedias
} from './components';
import { ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { ContentSection } from '../Tenses/styled';

const WelcomePage = () => {

  if (!window.navigator.onLine) {
    return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.BAD_CONNECTION} />
}

  return (
    <React.Fragment>
      <ContentSection data-testid="welcome-page-section">
        <WelcomePageHeaderSection />
        <PlatformCards />
        <StepsGuideline />
        <LearnerFeedbacks />
        <SendReportModal />
      </ContentSection>
      <SocialMedias />
    </React.Fragment>
  )
}

export default WelcomePage;