export const COUNTING_TIMER = "COUNTING_TIMER"
export const SET_USERNAME = 'SET_USERNAME'
export const COUNT_CORRECT_ANSWERS = 'COUNT_CORRECT_ANSWERS'

export const timer_count = (timer) => ({
  type: COUNTING_TIMER,
  payload: timer
})
export const setUserName = (userName) => ({
  type: SET_USERNAME,
  payload: userName
})
export const setCorrectAnswers = (correctAnswersNumb) => ({
  type: COUNT_CORRECT_ANSWERS,
  payload: correctAnswersNumb
})