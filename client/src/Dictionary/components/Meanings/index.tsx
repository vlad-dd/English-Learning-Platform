import React, { useContext } from "react";
import { DictionaryConfigurationContext } from "../../Context";
import { columns } from "./constants";
import { StyledTable, StyledDefinition } from "./styled";
import { IDefinitions, IMeanings } from "../../types";
import { extractByPath } from "../../../utils/utils";

const renderDefinitionsAndExample = ({ definition }: IDefinitions) => {
  return definition && <StyledDefinition>{definition}</StyledDefinition>;
};

const renderWordContent = (content: IMeanings) => {
  const { partOfSpeech, definitions } = content;

  const dataSource = [
    {
      partOfSpeech,
      definitions: definitions.map(renderDefinitionsAndExample),
    },
  ];

  return <StyledTable data-testid="definitions-table" columns={columns} dataSource={dataSource} />;
};

const Meanings = () => {
  const { data } = useContext(DictionaryConfigurationContext);
  const { meanings } = extractByPath(data, "dictionary[0]");
  return meanings?.map(renderWordContent);
};

export default Meanings;
