const initialState = [
    {
      id: 1,
      name: 'Pizza Margarita',
      description: 'Minimalism is key!',
      ingredients: [
        'tomato',
        'mozarella',
        'basil'
      ]
    },
    {
      id: 2,
      name: 'Pizza Napoletana',
      description: 'The mafia knows whats best for you',
      ingredients: [
        'tomato',
        'mozarella'
      ]
    },
    {
      id: 3,
      name: 'Pizza Bianca',
      description: 'Did somebody say oil?',
      ingredients: [
        'olive oil',
        'salt',
        'rosemary'
      ]
    }
  ]
const redux = require('redux')
const reducer = (state = initialState, action = {}) => {
    
      console.log(initialState)
    switch (action.type) {
      case 'ADD_PIZZA':
        return [...state,
          action.payload
        ]
    default:
      return state
    }
  }
  
  const action = {
    type: 'ADD_PIZZA',
    payload: {
      name: '',
      description: ''
    }
  }

  const store = redux.createStore(reducer)

  store.dispatch(action)

  export default reducer
  