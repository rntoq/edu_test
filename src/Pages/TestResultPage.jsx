import React from 'react';
import Sidebar from '../Components/Sidebar';
import MainHeader from '../Components/Main_header';
import TestAnswers from '../Components/TestAnswers';
import '../Styles/testResult.css';
import { useState } from "react";
import CircularStatistics from "../Components/CircularStatistics";
import NavigationPath from "../Components/NavigationPath";

const testData = [
    {id: 1,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 2,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 3,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 4,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 5,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 6,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 7,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 8,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 9,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'},
    {id: 10,
        question: 'Сумма четырех различных натуральных чисел равна 169. Наименьшее из этих чисел равно 30. Среди остальных чисел найдите наибольшее возможное число.',
        options: [
            {letter: 'A', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'B', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'C', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'},
            {letter: 'D', content: 'Рейтингке тек алғашқы тапсырған емтихан нәтижесі есепке алынады'}
        ],
        correctAnswer: 'A'}
];

const userAnswers = {
    1: 'A',
    2: 'C',
    3: 'A',
    4: 'B',
    5: 'A',
    6: 'D',
    7: 'A',
    8: 'B',
    9: 'C',
    10: 'A'
};

const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;

    testData.forEach(question => {
        if (userAnswers[question.id] === question.correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });

    return {
        correct,
        incorrect,
        percentage: Math.round((correct / testData.length) * 100)
    };
};

const results = calculateResults();

const TestResultPage = () => {
    const globalTopic = "Цифрлар";
    const topic = "Натурал сандар";
    const subtopic = "Сандар разряды";
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };
    return (
        <div className="test-result-page">
            <Sidebar isOpen={isSidebarOpen}/>
            <div className={`main-body ${isSidebarOpen ? 'shifted' : ''}`}>
                <MainHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
                <div className="results">
                    <NavigationPath subject={"Mатематика"} />
                    <h2> {globalTopic}. {topic}. {subtopic}</h2>
                    <h1>Cіздің жауаптарыңыз</h1>
                    <div className="test-container">
                        {testData.map((question) => (
                            <TestAnswers
                                key={question.id}
                                question={question}
                                userAnswer={userAnswers[question.id]}
                            />
                        ))}
                    </div>
                </div>
                <aside className="test-results">
                    <div className="topic-section">
                        <h2 className="topic-title">{globalTopic}. {topic}. <br/>{subtopic}</h2>
                        <div className="progress-section">
                            <CircularStatistics correctPercent={results.percentage}></CircularStatistics>
                            <div className="stats-section">
                                <div className="stat-item">
                                    <span className="stat-label">Дұрыс жауап саны:</span>
                                    <span className="stat-value" style={{ color: '#0D894F' }}>{results.correct}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Қате жауап саны:</span>
                                    <span className="stat-value" style={{ color: '#F22D01' }}>{results.incorrect}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topic-section">
                        <h3 className="topic-title">Сұрақтар</h3>
                        <div className="question-numbers">
                            {testData.map((question, index) => {
                                const isCorrect = userAnswers[question.id] === question.correctAnswer;
                                return (
                                    <div
                                        key={question.id}
                                        className={`question-number ${isCorrect ? 'correct' : 'incorrect'}`}
                                    >
                                        {index + 1}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TestResultPage;
