import React, { useCallback } from 'react';
import { Tabs, List } from 'antd';
import { ICasesTabs } from '../types';

const CasesTabs: React.FC<{ config: ICasesTabs[] }> = ({ config = [] }) => {
  const renderCaseItems = useCallback(
    ({ key, label, icon, titles }: ICasesTabs) => ({
      label,
      key,
      children: (
        <>
          <List
            itemLayout="horizontal"
            dataSource={titles}
            renderItem={({ description }) => (
              <List.Item>
                <List.Item.Meta
                  avatar={icon}
                  description={description}
                />
              </List.Item>
            )}
          />
        </>
      ),
    }),
    [config]
  );

  return <Tabs defaultActiveKey="1" items={config?.map(renderCaseItems)} />;
};

export default CasesTabs;
