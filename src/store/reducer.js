import { 

} from './actions';

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
  questions: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  
    default:
      return state;
  }
}