import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Tag } from 'antd';
import { IVerticalTimelineElement } from '../types';
import { VERTICAL_TIMELINE_ELEMENT_CLASSNAME } from '../constants';
import {
    StyledTimelineElementBody,
    StyledTimelineElementDescription,
    StyledTimelineElementTitle
} from '../styled';

export const useRenderTimelineWidget = () => {
    const renderVerticalTimelineElements = ({ id, date, version, isLastUpdate, title, description }: IVerticalTimelineElement) => {
        return (
            <VerticalTimelineElement
                key={id}
                className={VERTICAL_TIMELINE_ELEMENT_CLASSNAME}
                contentStyle={{ color: '#fff', opacity: 0.8, border: "0.1px solid white" }}
                contentArrowStyle={{ fill: '7px solid  rgb(0, 21, 41)' }}
                date={date}
                iconStyle={{ background: 'rgb(0, 21, 41)', color: '#fff' }}
            >
                <Tag color="geekblue">Version: {version}</Tag>
                {isLastUpdate && <Tag color="red">Last Update</Tag>}
                <StyledTimelineElementBody>
                    <StyledTimelineElementTitle>
                        {title}
                    </StyledTimelineElementTitle>
                    <StyledTimelineElementDescription>
                        {description}
                    </StyledTimelineElementDescription>
                </StyledTimelineElementBody>
            </VerticalTimelineElement>
        );
    };
    return { renderVerticalTimelineElements };
};