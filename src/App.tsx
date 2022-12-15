import React from 'react';
import {Action, legacy_createStore} from "redux";
import './App.css';

interface State {
  counter: number;
}

interface ActionWithPayload extends Action {
  payload?: number;
}

const initialState: State = {
  counter: 0,
}

const rootReducer = (state = initialState, action: ActionWithPayload) => {
  if (action.type === 'INCREMENT') {
    return {...state, counter: state.counter + 1};
  }

  if (action.type === 'ADD' && action.payload !== undefined) {
    return {...state, counter: state.counter + action.payload};
  }

  return state;
};

const store = legacy_createStore(rootReducer);
store.subscribe(() => {
  console.log('[subscription]', store.getState());
})

console.log('before', store.getState());

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'ADD', payload: 10});
store.dispatch({type: 'INCREMENT'});

console.log('after', store.getState());


function App() {
  return (
    <div className="App">
      App here!
    </div>
  );
}

export default App;
