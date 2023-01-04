import React from "react";
import { Title, CasesTabs } from "../../../../Сommon";


const MostCommonCases = ({ tense, cases }: any) => {
    return (
        <>
        <Title>What cases tell us that it is {tense}?</Title>
        <CasesTabs config={cases} />
        </>
    )
}

export default MostCommonCases;