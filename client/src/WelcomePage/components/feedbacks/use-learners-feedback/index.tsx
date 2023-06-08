import { useMemo } from "react";
import { List } from "antd";
import { Avatar } from "@mui/material";
import { LEARNERS_FEEDBACK } from "../../../constants";

const { Item } = List;
const { Meta } = Item;

export const useLearnersFeedbackWidget = () => {

    const generateNicknameAvatars = (name: string) => ({ children: `${name.split(' ')[0][0] + name.split(' ')[1][0]}` });

    const feedbacks = LEARNERS_FEEDBACK.map(({ id, title, description }) => {
        return (
            <Item key={id}>
                <Meta
                    avatar={<Avatar style={{ border: "1px solid white" }} {...generateNicknameAvatars(title)} />}
                    title={<a href="https://ant.design">{title}</a>}
                    description={description}
                />
            </Item>
        )
    });

    return { feedbacks };
}
