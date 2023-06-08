import { StyledMedia, StyledSocialMediaTag, StyledSpace } from "./styled";
import { SOCIAL_MEDIAS, SOCIAL_MEDIAS_DATA_TEST_ID } from "../../constants";

const SocialMedias = () => {
    return (
        <StyledSpace data-testid={SOCIAL_MEDIAS_DATA_TEST_ID}>
            {SOCIAL_MEDIAS.map(({ id, media, icon, color }) => {
                return (
                    <StyledSocialMediaTag key={id} icon={icon} color={color}>
                        <StyledMedia>{media}</StyledMedia>
                    </StyledSocialMediaTag>
                )
            })}
        </StyledSpace>
    )
}

export default SocialMedias;