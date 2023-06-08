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
import { WELCOME_PAGE_SECTION_DATA_TEST_ID } from './constants';
import { ContentSection } from '../Tenses/styled';

const WelcomePage = () => {

  if (!window.navigator.onLine) {
    return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.BAD_CONNECTION} />
  }

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