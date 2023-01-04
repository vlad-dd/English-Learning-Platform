import React from 'react';
import { List, Collapse } from 'antd';
import { get } from 'lodash';
import { IPanelProps, IResponse } from '../types';
import { IResponseDataSentence } from '../..';
import { useSentenceExamples } from './use-sentence-example';

const { Panel } = Collapse;

const ExamplePanels: React.FC<{ response: IResponse }> = ({ response }) => {
  const { sentenseExamples } = useSentenceExamples();

  const renderPanel = ({ key, header, translationData, Icon }: IPanelProps) => {
    const computedData = get(response, translationData);
    return (
      <Panel header={header} key={key}>
        {computedData?.map(({ id, sentence }: IResponseDataSentence) => {
          return (
            <List.Item.Meta
              key={id}
              style={{ padding: '15px' }}
              avatar={<Icon />}
              description={sentence}
            />
          );
        })}
      </Panel>
    );
  };
  return (
    <>
      <Collapse defaultActiveKey={['1']}>
        {sentenseExamples.map(renderPanel)}
      </Collapse>
    </>
  );
};

export default ExamplePanels;
