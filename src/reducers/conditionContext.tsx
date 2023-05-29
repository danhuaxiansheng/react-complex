// context.js
import { ReactNode, createContext, useReducer } from "react";

function reducer(tasks: any, action: any) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t: any) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t: any) => t.id !== action.id);
    }
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}

const initialState: Array<Number> = [];

export const ConditionContext = createContext({ state: initialState, dispatch: (action: any) => { } });

export const ConditionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<ConditionContext.Provider value={{ state, dispatch }}>
    {children}
  </ ConditionContext.Provider>);
};
