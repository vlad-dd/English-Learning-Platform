import React, { useCallback } from "react";
import { Tabs, List } from "antd";
import { ICases } from "../../Tenses";
import Image from "../Image";

const CasesTabs: React.FC<{ config: ICases[] }> = ({ config }) => {
  const renderCaseItems = useCallback(
    ({ key, label, icon, titles }: ICases) => ({
      label,
      key,
      children: (
        <List
          itemLayout="vertical"
          dataSource={titles}
          renderItem={({ description }: { description: string }) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Image
                    id="cases-tabs-icon"
                    url={icon}
                    styles={{
                      objectFit: "cover",
                      height: "16px",
                      width: "16px",
                    }}
                  />
                }
                description={description}
              />
            </List.Item>
          )}
        />
      ),
    }),
    [config]
  );

  return (
    <Tabs
      data-testid="cases-tabs-id"
      items={config?.map(renderCaseItems)}
      style={{ marginLeft: "8px" }}
      defaultActiveKey="1"
    />
  );
};

export default CasesTabs;
