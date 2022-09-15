import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserName } from '../../store/actions'
import './QuestionContainer.scss'

export const QuestionContainer = (props) => {
    const dispatch = useDispatch()
    const {isStartWindow, timer} = props

    const [userName, setUsername] = useState('')
    const [questionCounter, setQuestionCounter] = useState(0)

    const questions = useSelector((store) => store.questions)
    

    const setNickName = (user) => {
        setUsername(user)
    }
    const setUser = () => {
        dispatch(setUserName(userName))
    }
    const questionCounting = (current) => {
        setQuestionCounter(current + 1)
    } 
    return (
        <div className='question-wrapper'>
            {isStartWindow &&
                <div className='test'>
                    <h1 className='header-test'>Test</h1>
                    <input placeholder='Type ur name here before start game' onChange={(e) => setNickName(e.target.value)}/>
                    <p className='test-text'>You have 60 seconds to finish test</p>
                    <Link to='/questions'><button onClick={() => setUser()} className='question-button'>Start</button></Link>
                </div>
            }
            <div className='questions'>
                <h1 className='header-test'>{questions[questionCounter].title}</h1>
                {questions[questionCounter].answers.map((a) => {
                    return (
                        <div key={a.name}>{a.name}</div>
                    )
                })}
                <button className='question-button' onClick={() => questionCounting(questionCounter)}>Next</button>
            </div>
        </div>
    )
}
