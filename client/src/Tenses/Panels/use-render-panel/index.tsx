import { Collapse } from 'antd';
import { IExamplePanel, IResponseDataSentence } from "../../types";
import { StyledMeta, StyledPanelIcon } from '../../styled';

const { Panel } = Collapse;

export const useRenderPanelWidget = () => {
    const renderPanel = ({ key, header, icon, sentences }: IExamplePanel) => {
        return (
            <Panel header={header} key={key}>
                {sentences?.map(({ id, sentence }: IResponseDataSentence) => {
                    return (
                        <StyledMeta
                            key={id}
                            description={sentence}
                            avatar={<StyledPanelIcon src={icon} />}
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