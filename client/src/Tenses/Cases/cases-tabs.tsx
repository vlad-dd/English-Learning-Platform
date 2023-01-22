import React from "react";
import { Title, CasesTabs } from "../../Сommon";
import { ICases } from "../types";

const MostCommonCases = ({ tense = '', cases = []}: { tense: string, cases: ICases[]}) => {
    return (
        <>
        <Title styles={{ paddingTop: '25px' }}>What cases tell us that it is {tense}?</Title>
        <CasesTabs config={cases} />
        </>
    )
}

export default MostCommonCases;