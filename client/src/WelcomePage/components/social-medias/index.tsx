import React from "react";
import { Tag } from "antd";
import { StyledSpace } from "./styled";
import { SOCIAL_MEDIAS } from "../../constants";

const SocialMedias = () => {
    return (
        <StyledSpace wrap>
            {SOCIAL_MEDIAS.map(({ id, media, icon, color }) => {
                return (
                    <Tag key={id} icon={icon} color={color}>
                        {media}
                    </Tag>
                )
            })}
        </StyledSpace>
    )
}

export default SocialMedias;