import React from 'react'
import { Tag } from 'antd';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useReleasesTimeLine } from './use-releases-timeline';
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
        {isLastUpdate && <Tag color="red">Last Update</Tag> }
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
  const { data, isLoading, error } = useReleasesTimeLine();

  return (
    <VerticalTimeline layout='1-column-left'>
      {(data && !isLoading && !error) && data?.releases?.map(renderVerticalTimelineElements) }
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something happened with request, {error.name}</h1>}
    </VerticalTimeline>
  )
}

export default Releases;
