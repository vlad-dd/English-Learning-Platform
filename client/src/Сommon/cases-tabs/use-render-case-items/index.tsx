import { useCallback } from "react";
import { List } from "antd";
import { ICases } from "../../../Tenses";
import Image from "../../Image";
import { CASES_TABS_ICON_DATA_TEST_ID } from "../constants";

const { Item } = List;
const { Meta } = Item;

export const useRenderCaseItemsWidget = (config: ICases[]) => {
    const renderCaseItems = useCallback(
        ({ key, label, icon, titles }: ICases) => ({
            label,
            key,
            children: (
                <List
                    itemLayout="vertical"
                    dataSource={titles}
                    renderItem={({ description }: { description: string }) => (
                        <Item>
                            <Meta
                                avatar={
                                    <Image
                                        id={CASES_TABS_ICON_DATA_TEST_ID}
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
                        </Item>
                    )}
                />
            ),
        }),
        [config]
    );

    return { renderCaseItems };
}