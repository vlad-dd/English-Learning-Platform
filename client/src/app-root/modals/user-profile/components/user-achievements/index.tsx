import { Tag } from "antd";

const UserAchievements = ({ achievements }: any) => {
    return achievements?.map(({ achievement, color }: any) => <Tag color={color}>{achievement}</Tag>)
}

export default UserAchievements;