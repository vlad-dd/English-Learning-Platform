import React from "react";
import { Title, CasesTabs } from "../../Сommon";
import { ICases } from "../types";
import { FormattedMessage } from "react-intl";

const MostCommonCases = ({ tense = '', cases = [] }: { tense: string, cases: ICases[] }) => {
    return (
        <>
            <Title styles={{ paddingTop: '25px' }}>
                <FormattedMessage id="common_tenses_title" /> {tense}?
            </Title>
            <CasesTabs config={cases} />
        </>
    )
}

export default MostCommonCases;