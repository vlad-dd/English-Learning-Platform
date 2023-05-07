import Quiz from 'react-quiz-component';
import { StyledTitle } from "./styled";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { size } from 'lodash';
import { useState } from 'react';
import { FcOk } from 'react-icons/fc'
import CloudDoneIcon from '@mui/icons-material/CloudDone';

export const quiz = {
    "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    "nrOfQuestions": "4",
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
            "question": "ReactJS is developed by _____?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Google Engineers",
                "Facebook Engineers"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "ReactJS is an MVC based framework?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "True",
                "False"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "10"
        },
        {
            "question": "Which of the following concepts is/are key to ReactJS?",
            "questionType": "text",
            "answerSelectionType": "single",
            "answers": [
                "Component-oriented design",
                "Event delegation model",
                "Both of the above",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "30"
        },
        {
            "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "questionType": "photo",
            "answerSelectionType": "single",
            "answers": [
                "https://dummyimage.com/600x400/000/fff&text=A",
                "https://dummyimage.com/600x400/000/fff&text=B",
                "https://dummyimage.com/600x400/000/fff&text=C",
                "https://dummyimage.com/600x400/000/fff&text=D"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
        {
            "question": "What are the advantages of React JS?",
            "questionType": "text",
            "answerSelectionType": "multiple",
            "answers": [
                "React can be used on client and as well as server side too",
                "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
                "React components have lifecycle events that fall into State/Property Updates",
                "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
            ],
            "correctAnswer": [1, 2, 4],
            "messageForCorrectAnswer": "Correct answer. Good job.",
            "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
            "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "point": "20"
        },
    ]
}

const EnglishLevelRoot = () => {
    const [counter, setCounter] = useState(0);
    const [indexes, setIndex] = useState([{}]);
    const [total, setTotal] = useState([{}])
    const [view, setView] = useState<any>()

    const checkIsAnswered = (ew: any) => {
        const { userAnswer, question: { correctAnswer } } = ew;
        setIndex((prev: any) => ({
            ...prev,
            [counter]: 1
        }))
        setTotal((prev: any) => ({
            ...prev,
            [counter]: userAnswer === parseInt(correctAnswer)
        }))
        setCounter((prev: number) => prev + 1)
    }

    const setQuizResult = (obj: any) => {
        console.log(obj);
        setView(total)
    }

    console.log('view: ', view)


    console.log('INDEXES: ', indexes)
    console.log('total: ', total)

    return (
        <div>
            <StyledTitle className="elp-title">English Proficiency Level Test</StyledTitle>
            <div style={{ display: "flex" }}>
                <Quiz quiz={quiz} onQuestionSubmit={checkIsAnswered} onComplete={setQuizResult} />
                <div style={{ display: "flex", height: "100%" }}>
                    {new Array(size(quiz.questions)).fill(0).map((el: any, index: number) => {
                        return !(!!size(view)) ? (
                            <div style={{ border: "1px solid white", marginLeft: "1vw" }}>
                                {indexes[index] === 1 ? <div style={{ padding: "15px" }}><CloudDoneIcon /></div> : <div style={{ padding: "15px" }}>{index}</div>}
                                {/* <div  style={{ background: "green", padding: "5px" }}><CheckIcon /></div> */}
                            </div>
                        ) : <div style={{ border: "1px solid white", marginLeft: "1vw" }}>
                            {view[index] === true ? <div style={{ padding: "15px", display: "flex", flexDirection: "column"}}><FcOk size={25} /></div> : <div style={{ padding: "15px" }}><CloseIcon /></div>}
                            {/* <div  style={{ background: "green", padding: "5px" }}><CheckIcon /></div> */}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default EnglishLevelRoot;