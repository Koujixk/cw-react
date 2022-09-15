import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Radio, Space } from 'antd';

import { setCorrectAnswers, setUserName } from '../../store/actions'
import './QuestionContainer.scss'
import { store } from '../../store/store';

export const QuestionContainer = (props) => {
    const dispatch = useDispatch()
    const {isStartWindow, timer} = props
    
    const questions = useSelector((store) => store.questions)

    const [userName, setUsername] = useState('')
    const [questionCounter, setQuestionCounter] = useState(0)
    const [value, setValue] = useState(questions[questionCounter].answers[0])
    const [correctAnswers, setCorrect] = useState(0)
    

    const setNickName = (user) => {
        setUsername(user)
    }
    const setUser = () => {
        dispatch(setUserName(userName))
    }
    const questionCounting = (current) => {
        if(value){
            if(current < questions.length){
                setQuestionCounter(current + 1)
            }
            if(value.correct){
                setCorrect(correctAnswers + 1)
            }
            dispatch(setCorrectAnswers(correctAnswers))
        }else{
            alert('Ты чё дурак? Как ты не выбрал ответ?')
        }
    }
    const onChanging = (e) => {
        setValue(e.target.value)
    }
 
    return (
        <div className='question-wrapper'>
            {isStartWindow &&
                <div className='test'>
                    <h1 className='header-test'>Test</h1>
                    <input placeholder='Type ur name here before start game' onChange={(e) => setNickName(e.target.value)}/>
                    <p className='test-text'>You have 60 seconds to finish test</p>
                    <Link to={questionCounter > 10 ? '/questions' : '/results'}><button onClick={() => setUser()} className='question-button'>Start</button></Link>
                </div>
            }
            {questionCounter <= 10 && !isStartWindow &&
                <div className='questions'>
                    <h1>Question {questionCounter+1}</h1>
                    <p className='test-text'>{questions[questionCounter].title}</p>
                    <Radio.Group onChange={(e) => onChanging(e)} value={value}>
                        <Space direction="vertical">
                            {questions[questionCounter].answers.map((a, index) => {
                                return (
                                    <Radio key={a.name} value={a}>{a.name}</Radio>
                                )
                            })}
                        </Space>
                    </Radio.Group>
                
        
                    <button className='question-button' onClick={() => questionCounting(questionCounter)}>Next</button>
                </div>
            }
        </div>
    )
}
