import { Avatar, List } from "antd";
import React, { useMemo } from "react";
import { Title } from "../../../Сommon";
import { LEARNERS_FEEDBACK } from "../../constants";

const LearnerFeedbacks = () => {

    const feedbacks = useMemo(() => LEARNERS_FEEDBACK.map(({ id, title, description }, index) => {
        return (
            <List.Item key={id}>
                <List.Item.Meta
                    avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
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