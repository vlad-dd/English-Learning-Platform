import React from "react";
import { useRenderCaseItemsWidget } from "./use-render-case-items";
import { ICasesTabsProps } from "./types";
import { CASES_TABS_DATA_TEST_ID } from "./constants";
import { StyledTabs } from "./styled";

const CasesTabs: React.FC<ICasesTabsProps> = ({ config }) => {

  const { renderCaseItems } = useRenderCaseItemsWidget(config);

  return (
    <StyledTabs
      data-testid={CASES_TABS_DATA_TEST_ID}
      items={config.map(renderCaseItems)}
      defaultActiveKey="1"
    />
  );
};

export default CasesTabs;
