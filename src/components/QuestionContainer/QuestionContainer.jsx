import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Radio, Result, Space, Alert } from 'antd';

import { setCorrectAnswers, setUserName } from '../../store/actions'
import './QuestionContainer.scss'
import { store } from '../../store/store';


export const QuestionContainer = (props) => {
    const dispatch = useDispatch()
    const {isStartWindow, timer, isResult} = props
    
    const questions = useSelector((store) => store.questions)
    const correctAnswered = useSelector((store) => store.correctAnswered)
    const name = useSelector((store) => store.userName)

    const [userName, setUsername] = useState('')
    const [RadioAlert, setRadioAlert] = useState(false)
    const [userAlert, setUserAlert] = useState(false)
    const [questionCounter, setQuestionCounter] = useState(0)
    const [value, setValue] = useState(0)
    const [correctAnswers, setCorrect] = useState(0)
    

    const setNickName = (user) => {
        setUsername(user)
        setUserAlert(false)
    }
    const setUser = () => {
        if(userName){
            dispatch(setUserName(userName))
        }else{
            setUserAlert(true)
        }
    }
    const questionCounting = (current) => {
        if(value){
            if(current < questions.length){
                setQuestionCounter(current + 1)
            }
            if(value.correct){
                console.log('correct')
                const gg = correctAnswers + 1 
                setCorrect(gg)
            }
            dispatch(setCorrectAnswers(correctAnswers))
            console.log(value)
            setValue(0)
        } else{
            setRadioAlert(true)
        }
    }
    const onChanging = (e) => {
        setRadioAlert(false)
        setValue(e.target.value)
    }
    const restart = () => {
        setUserName('')
        setQuestionCounter(0)
        setValue(0)

    }
 
    return (
        <div className='question-wrapper'>
            {isStartWindow && !isResult &&

                <div className='test'>
                    {userAlert && 
                        <Alert
                            message="Error"
                            description="Choose answer before going to next question"
                            type="error"
                            showIcon
                        />                    
                    }
                    <h1 className='header-test'>Test</h1>
                    <input placeholder='Type ur name here' onChange={(e) => setNickName(e.target.value)} className='input-username'/>
                    <p className='test-text'>You have 60 seconds to finish test</p>
                    {userName ? <Link to='/questions'><button onClick={() => setUser()} className='question-button'>Start</button></Link> : <button onClick={() => setUser()} className='question-button'>Start</button>}
                </div>
            }
            {!isStartWindow && !isResult &&
                <div className='questions'>
                    {RadioAlert && 
                        <Alert
                            message="Error"
                            description="Choose answer before going to next question"
                            type="error"
                            showIcon
                        />                    
                    }
                    <h1>Question {questionCounter+1}</h1>
                    <p className='test-text'>{questions[questionCounter].title}</p>
                    <Radio.Group onChange={(e) => onChanging(e)} value={value}>
                        <Space direction="vertical">
                            {questions[questionCounter].answers.map((a) => {
                                return (
                                    <Radio className='radio-item' key={a.name} value={a}>{a.name}</Radio>
                                )
                            })}
                        </Space>
                    </Radio.Group>
                {questionCounter == 9  && value ? <Link to='/results'><button className='question-button' onClick={() => questionCounting(questionCounter) }>Next</button></Link> : <button className='question-button' onClick={() => questionCounting(questionCounter) }>Next</button>}
                </div>
            }
            {isResult && 
                <div className='test'>
                    <h1 className='header-test'>{name} your result is</h1>
                    <p className='test-text'>Correct answers: {correctAnswered} / 10</p>
                    <Link to='/'><button onClick={() => restart()} className='question-button'>Restart</button></Link>
                </div>            
            }
        </div>
    )
}
