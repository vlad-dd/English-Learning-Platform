import { VerticalTimeline } from 'react-vertical-timeline-component';
import { size } from 'lodash';
import { LoadingProgress } from '../Сommon';
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { useReleasesTimeLineWidget } from './use-releases-timeline';
import { useRenderTimelineWidget } from './use-render-timeline';
import { CONTENT_SECTION_DATA_TEST_ID, VERTICAL_TIMELINE_ELEMENT_LAYOUT } from './constants';
import { ContentSection } from '../Tenses/styled';

const Releases = () => {
  const { data, isLoading, error } = useReleasesTimeLineWidget();
  const { renderVerticalTimelineElements } = useRenderTimelineWidget();

  if ((isLoading || !size(data.releases)) && !error) {
    return <LoadingProgress />;
  };

  if (error) {
    if (error.networkError) {
      return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR} />
    } else {
      return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK} />
    }
  };

  return (
    <ContentSection data-testid={CONTENT_SECTION_DATA_TEST_ID}>
      <VerticalTimeline layout={VERTICAL_TIMELINE_ELEMENT_LAYOUT}>
        {data.releases.map(renderVerticalTimelineElements)}
      </VerticalTimeline>
    </ContentSection>
  )
};

export default Releases;
