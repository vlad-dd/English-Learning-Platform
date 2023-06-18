import { ReactNode } from "react"
import { IconType } from "react-icons/lib"

export interface ITabActionLabel {
    label: string | ReactNode
    Icon: IconType
};

export interface IUserAchievements {
    id: string
    achievement: string
    color: string
};

export interface IUserProgress {
    id: string
    label: string
    percent: number
};
