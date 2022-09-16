import { COUNTING_TIMER, COUNT_CORRECT_ANSWERS, SET_USERNAME } from './actions';

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
  },
  {
    id:3,
    title: ' What gets wetter the more it dries?',
    answers: [
      {
        name: "Pc",
        correct: false
      },
      {
        name: "Hand",
        correct: false
      },
      {
        name: "Towel",
        correct: false
      }
    ]
  },
  {
    id:4,
    title: "What is it that lives if it is fed, and dies if you give it a drink?",
    answers: [
        {
            name: 'Fire',
            correct: true
        },
        {
            name: 'dog',
            correct: false
        },
        {
            name: 'your drunk friend',
            correct: false
        }
    ]
  },
  {
    id:5,
    title: 'How many months in 1 year?',
    answers: [
      {
        name: "12",
        correct: true
      },
      {
        name: "13",
        correct: false
      },
      {
        name: "11",
        correct: false
      }
    ]
  },
  {
    id:6,
    title: " Which weighs more, a pound of feathers or a pound of bricks?",
    answers: [
        {
            name: 'feathers',
            correct: false
        },
        {
            name: 'bricks',
            correct: true
        },
        {
            name: 'neither',
            correct: false
        }
    ]
  },
  {
    id:7,
    title: 'What gets sharper the more you use it?',
    answers: [
      {
        name: "brain",
        correct: true
      },
      {
        name: "sword",
        correct: false
      },
      {
        name: "fork",
        correct: false
      }
    ]
  },
  {
    id:8,
    title: "How much dirt is there in a hole that is 3 feet deep, 6 feet long, and 4 feet wide?",
    answers: [
        {
            name: '40kg',
            correct: false
        },
        {
            name: "it's not dirt it's sand",
            correct: false
        },
        {
            name: 'there is no dirt',
            correct: true
        }
    ]
  },
  {
    id:9,
    title: 'What gets bigger and bigger the more you take away from it?',
    answers: [
      {
        name: "hole",
        correct: true
      },
      {
        name: "idk",
        correct: false
      },
      {
        name: "sugar",
        correct: false
      }
    ]
  },
  {
    id:10,
    title: "What is capital of USA?",
    answers: [
        {
            name: 'Detroit',
            correct: false
        },
        {
            name: 'New York',
            correct: false
        },
        {
            name: 'Washington',
            correct: true
        }
    ]
  }
]

const initialState = {
  questions: questions,
  timer: 0,
  userName: '',
  correctAnswered: 0
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
    case COUNT_CORRECT_ANSWERS:
      return{
        ...state,
        correctAnswered: action.payload
      }
    default:
      return state;
  }
}