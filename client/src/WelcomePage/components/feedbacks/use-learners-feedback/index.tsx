import { List } from "antd";
import { LEARNERS_FEEDBACK } from "../../../constants";
import { StyledUserFeedbackAvatar } from "../../../styled";

const { Item } = List;
const { Meta } = Item;

export const useLearnersFeedbackWidget = () => {

    const generateNicknameAvatars = (name: string) => ({ children: `${name.split(' ')[0][0] + name.split(' ')[1][0]}` });

    const feedbacks = LEARNERS_FEEDBACK.map(({ id, title, description }) => {
        return (
            <Item key={id}>
                <Meta
                    avatar={<StyledUserFeedbackAvatar {...generateNicknameAvatars(title)} />}
                    title={<a href="https://ant.design">{title}</a>}
                    description={description}
                />
            </Item>
        )
    });

    return { feedbacks };
}
