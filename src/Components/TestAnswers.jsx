import React from 'react';
import {VideoCameraIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const TestAnswers = ({ question, userAnswer }) => {

    return (
        <div className="question-container">
            <div className="question-text">
                {question.id}. {question.question}
            </div>
            {question.options.map((option) => {
                const isUserChoice = userAnswer === option.letter;
                const isRightAnswer = question.correctAnswer === option.letter;
                let optionClass = 'option-text';
                if (isUserChoice && isRightAnswer) {
                    optionClass += ' correct';
                } else if (isUserChoice && !isRightAnswer) {
                    optionClass += ' incorrect';
                } else if (!isUserChoice && isRightAnswer) {
                    optionClass += ' correct';
                }
                return (
                    <div key={option.letter} className='answer-option'>
                        <div className={optionClass}>{option.letter}</div>
                        <div className={optionClass}>{option.content}</div>
                    </div>
                );
            })}
            <Link to={`/`} className="video-link-button">
                <VideoCameraIcon className="icon"/>Видеошешімін қараңыз
            </Link> {/* videoTime қосуға болады массивқа */}
        </div>
    );
};

export default TestAnswers;