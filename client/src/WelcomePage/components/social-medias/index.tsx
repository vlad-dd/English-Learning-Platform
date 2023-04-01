import React from "react";
import { Tag } from "antd";
import { StyledSpace } from "./styled";
import { SOCIAL_MEDIAS } from "../../constants";

const SocialMedias = () => {
    return (
        <StyledSpace wrap>
            {SOCIAL_MEDIAS.map(({ id, media, icon, color }) => {
                return (
                    <Tag style={{ display: "flex", justifyContent: "center", alignItems: "center"}} key={id} icon={icon} color={color}>
                        <p style={{ margin: "3px" }}>{media}</p>
                    </Tag>
                )
            })}
        </StyledSpace>
    )
}

export default SocialMedias;