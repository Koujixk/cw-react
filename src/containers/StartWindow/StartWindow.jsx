import React from 'react'
import { QuestionContainer } from '../../components/QuestionContainer/QuestionContainer'

export const StartWindow = () => {
  return (
    <div>
        <QuestionContainer isStartWindow={true} isResult={false}/>
    </div>
  )
}
