import { useContext } from "react";
import { size } from "lodash";
import { extractByPath } from "../../../../utils/utils";
import { DictionaryConfigurationContext } from "../../../Context";
import { IDefinitions, IMeanings } from "../../../types";
import { columns } from "../constants";
import { StyledDefinition, StyledTable } from "../styled";
import { DEFINITIONS_TABLE_DATA_TEST_ID } from "../../../constants";

export const useMeaningsWidget = () => {
    const { data } = useContext(DictionaryConfigurationContext);
    const { meanings } = extractByPath(data, "dictionary[0]");

    const renderDefinitionsAndExample = ({ definition }: IDefinitions) => {
        return !!size(definition) && <StyledDefinition>{definition}</StyledDefinition>;
    };

    const renderDictionaryContent = (content: IMeanings) => {
        const { partOfSpeech, definitions } = content;

        const dataSource = [
            {
                partOfSpeech,
                definitions: definitions.map(renderDefinitionsAndExample),
            },
        ];

        return <StyledTable data-testid={DEFINITIONS_TABLE_DATA_TEST_ID} columns={columns} dataSource={dataSource} />;
    };

    return {
        meanings,
        renderDictionaryContent
    };
}