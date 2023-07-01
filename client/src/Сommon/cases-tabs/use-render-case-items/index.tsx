import { useCallback } from "react";
import { List } from "antd";
import { ICases } from "../../../Tenses";
import { IListRenderItem } from "../types";
import { CASES_TABS_ICON_DATA_TEST_ID } from "../constants";
import { StyledAvatar } from "../styled";

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
                    renderItem={({ description }: IListRenderItem) => (
                        <Item>
                            <Meta
                                avatar={
                                    <StyledAvatar
                                        id={CASES_TABS_ICON_DATA_TEST_ID}
                                        src={icon}
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