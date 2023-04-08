import { List } from "antd";
import React, { useMemo } from "react";
import Avatar from '@mui/material/Avatar';
import { Title } from "../../../Сommon";
import { LEARNERS_FEEDBACK } from "../../constants";

const generateNicknameAvatars = (name: string) => ({ children: `${name.split(' ')[0][0] + name.split(' ')[1][0]}` });
  
const LearnerFeedbacks = () => {
    const feedbacks = useMemo(() => LEARNERS_FEEDBACK.map(({ id, title, description }) => {
        return (
            <List.Item key={id}>
                <List.Item.Meta
                    avatar={<Avatar style={{ border: "1px solid white" }} {...generateNicknameAvatars(title)} />}
                    title={<a href="https://ant.design">{title}</a>}
                    description={description}
                />
            </List.Item>
        )
    }), [LEARNERS_FEEDBACK])

    return (
        <React.Fragment>
            <Title styles={{ paddingTop: "50px" }}>Our Learners Feedback🎓</Title>
           <div data-testid="learner-feedbacks">{feedbacks}</div>
        </React.Fragment>
    )
}

export default LearnerFeedbacks;