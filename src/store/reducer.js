import { COUNTING_TIMER, SET_USERNAME } from './actions';

const questions = [
  {
    id:1,
    title: 'What JS is?',
    answers: [
      {
        name: "Program language",
        correct: true
      },
      {
        name: "Library in Frontend",
        correct: false
      },
      {
        name: "Syntax sugar",
        correct: false
      }
    ]
  },
  {
    id:2,
    title: "What is capital of Britain?",
    answers: [
        {
            name: 'Manchester',
            correct: false
        },
        {
            name: 'London',
            correct: true
        },
        {
            name: 'Washington',
            correct: false
        }
    ]
  }
]

const initialState = {
  questions: questions,
  timer: 0,
  userName: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COUNTING_TIMER:
      return{
        ...state,
        timer: action.payload
      }
    case SET_USERNAME:
      return{
        ...state,
        userName: action.payload
      }
    default:
      return state;
  }
}