import { ProgressBar } from "../../../../../Сommon";
import { IUserProgress } from "../../types";
import { StyledUserProgressContainer, StyledUserProgressLabel } from "../../styled";

const UserProgressContainer = ({ progress }: { progress: IUserProgress[] }) => {
    return (
        <StyledUserProgressContainer>
            {progress.map(({ label, percent }) => {
                return (
                    <>
                        <StyledUserProgressLabel>{label}</StyledUserProgressLabel>
                        <ProgressBar type="line" percent={percent} width={40} />
                    </>
                )
            })}
        </StyledUserProgressContainer>
    )
}

export default UserProgressContainer;