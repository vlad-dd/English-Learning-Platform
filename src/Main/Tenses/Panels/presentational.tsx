import React from 'react';
import { List, Collapse } from 'antd';
import { get } from 'lodash';
import * as selectors from '../../../store/selectors';
import { IPanelProps, IResponse } from '../types';
import { IResponseDataSentence } from '../..';
import { useSentenceExamples } from './use-sentence-example';
import { useSelector } from 'react-redux';

const { Panel } = Collapse;

const ExamplePanels = () => {

  const data = useSelector(selectors.tenseConfiguration);

  const renderPanel = ({ key, header, icon, mappingKey, ...sentences }: any) => {
    return (
      <Panel header={header} key={key}>
        {sentences[mappingKey]?.map(({ id, sentence }: IResponseDataSentence) => {
          return (
            <List.Item.Meta
              key={id}
              style={{ padding: '15px' }}
              avatar={<img src={icon} style={{objectFit: "cover", height: "16px", width: "16px"}} />}
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
        {data[0]?.examples.map(renderPanel)}
      </Collapse>
    </>
  );
};

export default ExamplePanels;
