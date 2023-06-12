import { List, Collapse } from 'antd';
import { Image } from '../../../Сommon';
import { IExamplePanel, IResponseDataSentence } from "../../types";

const { Panel } = Collapse;
const { Item: { Meta } } = List;

export const useRenderPanelWidget = () => {
    const renderPanel = ({ key, header, icon, sentences }: IExamplePanel) => {
        return (
            <Panel header={header} key={key}>
                {sentences?.map(({ id, sentence }: IResponseDataSentence) => {
                    return (
                        <Meta
                            key={id}
                            description={sentence}
                            style={{ padding: '15px' }}
                            avatar={<Image url={icon} styles={{ objectFit: "cover", height: "16px", width: "16px" }} />}
                        />
                    );
                })}
            </Panel>
        );
    };
    return {
        renderPanel
    };
}