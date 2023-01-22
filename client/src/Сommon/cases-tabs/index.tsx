import React, { useCallback } from 'react';
import { Tabs, List } from 'antd';
import { ICases } from '../../Tenses';
import Image from '../Image';

const CasesTabs: React.FC<{ config: ICases[] }> = ({ config }) => {
  const renderCaseItems = useCallback(
    ({ key, label, icon, titles }: ICases) => ({
      label,
      key,
      children: (
        <>
          <List
            itemLayout="horizontal"
            dataSource={titles}
            renderItem={({ description }: { description: string }) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Image url={icon} styles={{ objectFit: "cover", height: "16px", width: "16px" }} />}
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

  return <Tabs style={{ marginLeft: "8px" }} data-testid="cases-tabs-id" defaultActiveKey="1" items={config?.map(renderCaseItems)} />;
};

export default CasesTabs;
