import React from 'react'
import { Tag } from 'antd';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface IVerticalTimelineElement {
  date: string
  version: string
  isLastUpdate: boolean
  title: string
  description: string
}

const elements: IVerticalTimelineElement[] = [
  {
    date: '14.02.2023',
    version: '0.0.1',
    isLastUpdate: true,
    title: ' - Added Dictionary Page ✨',
    description: 'From now on you are able to search for words and receive correct pronounce.'
  }
]

const renderVerticalTimelineElements = ({ date, version, isLastUpdate, title, description }: IVerticalTimelineElement) => {
  return (
      <VerticalTimelineElement
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
  return (
    <VerticalTimeline layout='1-column-left'>
      {elements.map(renderVerticalTimelineElements)}
    </VerticalTimeline>
  )
}

export default Releases;
