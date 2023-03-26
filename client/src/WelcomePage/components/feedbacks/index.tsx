import { Avatar, List } from "antd";
import React, { useMemo } from "react";
import { AVATARS } from "../../../Header/strings";
import { Title } from "../../../Сommon";
import { LEARNERS_FEEDBACK } from "../../constants";

const LearnerFeedbacks = () => {

    const feedbacks = useMemo(() => LEARNERS_FEEDBACK.map(({ id, title, description }) => {
        return (
            <List.Item key={id}>
                <List.Item.Meta
                    avatar={<Avatar src={AVATARS.visitor} />}
                    title={<a href="https://ant.design">{title}</a>}
                    description={description}
                />
            </List.Item>
        )
    }), [LEARNERS_FEEDBACK])

    return (
        <React.Fragment>
            <Title styles={{ paddingTop: "50px" }}>Our Learners Feedback🎓</Title>
            {feedbacks}
        </React.Fragment>
    )
}

export default LearnerFeedbacks;