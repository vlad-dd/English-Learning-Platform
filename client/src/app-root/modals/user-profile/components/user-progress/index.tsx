import { ProgressBar } from "../../../../../Сommon";
import { StyledUserProgressContainer } from "../../styled";

const UserProgressContainer = ({ progress }: any) => {
    return (
        <StyledUserProgressContainer>
            {progress.map(({ label, percent }: any) => {
                return (
                    <>
                        <span>{label}</span>
                        <ProgressBar type="line" percent={percent} width={40} />
                    </>
                )
            })}
        </StyledUserProgressContainer>
    )
}

export default UserProgressContainer;