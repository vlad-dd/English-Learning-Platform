import { SendReportModal } from '../support-team';
import {
  WelcomePageHeaderSection,
  PlatformCards,
  StepsGuideline,
  LearnerFeedbacks,
  SocialMedias
} from './components';
import { WELCOME_PAGE_SECTION_DATA_TEST_ID } from './constants';
import { ContentSection } from '../Tenses/styled';

const WelcomePage = () => {

  return (
    <>
      <ContentSection data-testid={WELCOME_PAGE_SECTION_DATA_TEST_ID}>
        <WelcomePageHeaderSection />
        <PlatformCards />
        <StepsGuideline />
        <LearnerFeedbacks />
        <SendReportModal />
      </ContentSection>
      <SocialMedias />
    </>
  )
}

export default WelcomePage;