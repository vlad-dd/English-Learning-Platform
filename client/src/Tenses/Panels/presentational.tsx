import React from 'react';
import { List, Collapse } from 'antd';
import { Image } from '../../Сommon';
import { IExamplePanel, IResponseDataSentence } from '..';

const { Panel } = Collapse;

const ExamplePanels = ({ examples }: { examples: IExamplePanel[] }) => {

  const renderPanel = ({ key, header, icon, sentences }: IExamplePanel) => {
    return (
      <Panel header={header} key={key}>
        {sentences?.map(({ id, sentence }: IResponseDataSentence) => {
          return (
            <List.Item.Meta
              key={id}
              style={{ padding: '15px' }}
              avatar={<Image url={icon} styles={{ objectFit: "cover", height: "16px", width: "16px" }} />}
              description={sentence}
            />
          );
        })}
      </Panel>
    );
  };
  return (
      <Collapse>
        {examples?.map(renderPanel)}
      </Collapse>
  );
};

export default ExamplePanels;
