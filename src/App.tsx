import React,{createContext} from 'react';
import TodoList from './TodoList';
import { todoStore } from './store';

export const Store = createContext(todoStore)

function App() {
  return (
    <div className="App">
      <Store.Provider value={todoStore}>
        <TodoList />
      </Store.Provider>
      
    </div>
  );
}

export default App;
