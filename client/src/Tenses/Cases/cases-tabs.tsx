import { FormattedMessage } from "react-intl";
import { Title, CasesTabs } from "../../Сommon";
import { ICases } from "../types";
import { MOST_COMMON_CASES_TITLE_ID } from "../constants";

const MostCommonCases = ({ tense, cases }: { tense: string, cases: ICases[] }) => {
    return (
        <>
            <Title styles={{ paddingTop: '25px' }}>
                <FormattedMessage id={MOST_COMMON_CASES_TITLE_ID} /> {tense}?
            </Title>
            <CasesTabs config={cases} />
        </>
    )
}

export default MostCommonCases;