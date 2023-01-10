import React, { useCallback } from 'react';
import { Tabs, List, Avatar } from 'antd';
import { ICasesTabs } from '../types';

const CasesTabs: React.FC<{ config: any }> = ({ config = [] }) => {
  const renderCaseItems = useCallback(
    ({ key, label, icon, titles }: ICasesTabs) => ({
      label,
      key,
      children: (
        <>
          <List
            itemLayout="horizontal"
            dataSource={[...Object.values(titles)]}
            renderItem={({ description }: any) => (
              <List.Item>
                <List.Item.Meta
                  //@ts-ignore
                  avatar={<img src={icon} style={{objectFit: "cover", height: "16px", width: "16px"}} />}
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
//@ts-ignore
  return <Tabs defaultActiveKey="1" items={config?.map(renderCaseItems)} />;
};

export default CasesTabs;
