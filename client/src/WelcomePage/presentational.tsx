import React from 'react';
import { SendReportModal } from '../support-team';
import {
  WelcomePageHeaderSection,
  PlatformCards,
  StepsGuideline,
  LearnerFeedbacks,
  SocialMedias
} from './components';
import { ContentSection } from '../Tenses/styled';

const WelcomePage = () => {
  return (
    <React.Fragment>
      <ContentSection>
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