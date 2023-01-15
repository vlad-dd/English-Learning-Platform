import React from 'react';
import { List, Collapse } from 'antd';
import { ExamplePanel, IExamples, IResponseDataSentence } from '../..';
import { useSentenceExamples } from './use-sentence-example';

const { Panel } = Collapse;

const ExamplePanels = () => {

  const { examples } = useSentenceExamples();

  const renderPanel = ({ key, header, icon, mappingKey, ...sentences }: ExamplePanel) => {
    return (
      <Panel header={header} key={key}>
        {sentences[mappingKey as keyof IExamples]?.map(({ id, sentence }: IResponseDataSentence) => {
          return (
            <List.Item.Meta
              key={id}
              style={{ padding: '15px' }}
              avatar={<img src={icon} style={{ objectFit: "cover", height: "16px", width: "16px" }}  />}
              description={sentence}
            />
          );
        })}
      </Panel>
    );
  };
  return (
      <Collapse defaultActiveKey={['1']}>
        {examples?.map(renderPanel)}
      </Collapse>
  );
};

export default ExamplePanels;
