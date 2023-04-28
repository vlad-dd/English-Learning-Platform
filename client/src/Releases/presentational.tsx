import React from 'react'
import { Tag } from 'antd';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useReleasesTimeLineWidget } from './use-releases-timeline';
import { ContentSection } from '../Tenses/styled';
import { LoadingProgress } from '../Сommon';
import { size } from 'lodash';
interface IVerticalTimelineElement {
  id: string
  date: string
  version: string
  isLastUpdate: boolean
  title: string
  description: string
}

const renderVerticalTimelineElements = ({ id, date, version, isLastUpdate, title, description }: IVerticalTimelineElement) => {
  return (
    <VerticalTimelineElement
      key={id}
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(0, 21, 41)', color: '#fff', opacity: 0.8 }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(0, 21, 41)' }}
      date={date}
      iconStyle={{ background: 'rgb(0, 21, 41)', color: '#fff' }}
    >
      <Tag color="geekblue">Version: {version}</Tag>
      {isLastUpdate && <Tag color="red">Last Update</Tag>}
      <div>
        <p>
          {title}
        </p>
        <div>{description}</div>
      </div>
    </VerticalTimelineElement>
  );
}

const Releases = () => {
  const { data, isLoading, error } = useReleasesTimeLineWidget();

  if (isLoading || !size(data.releases)) {
    return <LoadingProgress />;
  }

  if (error) {
    return <h1>Something happened with request, {error.name}</h1>
  }

  return (
    <ContentSection data-testid="content-section-wrapper">
      <VerticalTimeline layout='1-column-left'>
        {data.releases.map(renderVerticalTimelineElements)}
      </VerticalTimeline>
    </ContentSection>
  )
}

export default Releases;
