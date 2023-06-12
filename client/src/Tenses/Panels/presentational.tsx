import { Collapse } from 'antd';
import { IExamplePanel } from '..';
import { useRenderPanelWidget } from './use-render-panel';

const ExamplePanels = ({ examples }: { examples: IExamplePanel[] }) => {

  const { renderPanel } = useRenderPanelWidget();

  return (
      <Collapse>
        {examples?.map(renderPanel)}
      </Collapse>
  );
};

export default ExamplePanels;
