import Quiz from 'react-quiz-component';
import { StyledTitle } from "./styled";
import { noop, size } from 'lodash';
import { Steps } from 'antd';
import { useState } from 'react';

export const quiz = {
    "quizTitle": <h1>Greetings and welcome to the English proficiency assessment! 🌍</h1>,
    "quizSynopsis":
        <div>
            <h3>✅ Kindly attempt all questions.</h3>
            <h3>👀 The assessment does not have time limits.</h3>
            <h3>🤷🏽 In case you're unsure of the answer, please select the answer you think could be true.</h3>
        </div>,
    "questions": [
        {
            "question": "How can you access the state of a component from inside of a member function?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "this.getState()",
                "this.prototype.stateValue",
                "this.state",
                "this.values"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "How can you access the state of a component from inside of a member function?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "this.getState()",
                "this.prototype.stateValue",
                "this.state",
                "this.values"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "How can you access the state of a component from inside of a member function?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "this.getState()",
                "this.prototype.stateValue",
                "this.state",
                "this.values"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "How can you access the state of a component from inside of a member function?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "this.getState()",
                "this.prototype.stateValue",
                "this.state",
                "this.values"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "How can you access the state of a component from inside of a member function?",
            "questionType": "text",
            "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "this.getState()",
                "this.prototype.stateValue",
                "this.state",
                "this.values"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        }
    ]
}

const EnglishLevelRoot = () => {
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState<any>([{}])

    const checkIsAnswered = (ew: any) => {
        const { userAnswer, question: { correctAnswer } } = ew;
        setTotal((prev: any) => {
            const updatedTotal = {
                title: JSON.stringify(counter),
                [counter]: userAnswer === parseInt(correctAnswer)
            };
            if (counter > 0) {
                return [...prev, updatedTotal];
            } else {
                return [updatedTotal];
            }
        });
        setCounter((prev: number) => prev + 1)
    }

    console.log('counter', counter)
    console.log('total', total)
    console.log('total[counter]', total[counter - 1])

    //to make steps adaptive add to the second div flexWrap: wrap

    return (
        <div>
            <StyledTitle className="elp-title">English Proficiency Level Test</StyledTitle>
            <div style={{ display: "flex", alignItems: "flex-start", overflow: "auto" }}>
                <div>
                    <Quiz quiz={quiz} onQuestionSubmit={checkIsAnswered} />
                </div>
                <Steps
                    current={counter}
                    style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", position: "relative", top: "3vh" }}
                    direction='vertical'
                    responsive
                >
                    {new Array(size(quiz.questions)).fill(0).map((_, i) => {
                        //@ts-ignore
                        return <Steps.Step status={total[i]?.[i] === false && "error"}>{i}</Steps.Step>
                    })}
                </Steps>
            </div>
        </div>
    )
}

export default EnglishLevelRoot;