import { FormattedMessage } from 'react-intl';
import { Title } from '../../Сommon';
import ExamplePanels from '../Panels/presentational';
import { IExamplePanel } from '../types';
import { EXAMPLES_TITLE_ID, EXAMPLE_TITLE_DATA_TEST_ID } from '../constants';

const TenseExamplePanels = ({ examples }: { examples: IExamplePanel[] }) => {
  return (
    <>
      <Title data-testid={EXAMPLE_TITLE_DATA_TEST_ID} styles={{ paddingTop: '25px' }}>
        <FormattedMessage id={EXAMPLES_TITLE_ID} />
      </Title>
      <ExamplePanels examples={examples} />
    </>
  );
};

export default TenseExamplePanels;
