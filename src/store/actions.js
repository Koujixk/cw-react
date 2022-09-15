export const COUNTING_TIMER = "COUNTING_TIMER"
export const SET_USERNAME = 'SET_USERNAME'

export const timer_count = (timer) => ({
  type: COUNTING_TIMER,
  payload: timer
})
export const setUserName = (userName) => ({
  type: SET_USERNAME,
  payload: userName
})