import React, { useState } from 'react'
import './Quiz.css'

const Quiz = () => {
    const questions = [
		{
			questionText: 'Which of the following is the correct name of React.js?',
			answerOptions: [
				{ answerText: 'React', isCorrect: false },
				{ answerText: 'React.js', isCorrect: false },
				{ answerText: 'ReactJs', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'What of the following is used in React.js to increase performance?',
			answerOptions: [
				{ answerText: 'Original DOM', isCorrect: false },
				{ answerText: 'Virtual DOM', isCorrect: true },
				{ answerText: 'Both A and B', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following acts as the input of a class-based component?',
			answerOptions: [
				{ answerText: 'Props', isCorrect: true },
				{ answerText: 'Render', isCorrect: false },
				{ answerText: 'Factory', isCorrect: false },
				{ answerText: 'Class', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following keyword is used to create a class inheritance?',
			answerOptions: [
				{ answerText: 'Create', isCorrect: false },
				{ answerText: 'Inherits', isCorrect: false },
				{ answerText: 'This', isCorrect: false },
				{ answerText: 'Extends', isCorrect: true },
			],
		},
        {
			questionText: 'What is a state in React?',
			answerOptions: [
				{ answerText: 'A permanent storage.', isCorrect: false },
				{ answerText: 'External storage of the component.', isCorrect: false },
				{ answerText: 'Internal storage of the component.', isCorrect: true },
				{ answerText: 'None of the above.', isCorrect: false },
			],
		},
	];

    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [showScore,setShowScore] = useState(false)
    const [score,setScore]=useState(0)

    const handleAnswerClick= (isCorrect) =>{
        if(isCorrect === true){
            
            setScore(score+1)
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
    }
  return (
    <>
    <div className='main-section'>
        {showScore ? (
            <div className='score-section'>Your scored {score} out of {questions.length}</div>
        ):(
            <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {currentQuestion +1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
					
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=>(
                            <button onClick={()=>handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
					</div>
            </div>
            </>
        )}
    </div>
    </>
  )
}

export default Quiz