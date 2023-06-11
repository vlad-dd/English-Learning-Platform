export interface ISubmittedAnswers {
    title: string
    [key: number]: boolean
}
export interface ISubmittedAnswer {
    isCorrect: boolean
    userAnswer: number
    question: Record<string, string>
}

export interface IPreviousAnswer {
    [key: number]: boolean
    title: string
}
export interface IEnglishLevel {
    min: number
    max: number
    label: string
};