import { Tag } from "antd";
import { IUserAchievements } from "../../types";

const UserAchievements = ({ achievements }: { achievements: IUserAchievements[] }): JSX.Element => {
    return (
        <>
            {achievements.map(({ achievement, color }) => <Tag color={color} children={achievement} />)}
        </>
    )
}

export default UserAchievements;