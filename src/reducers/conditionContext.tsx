// context.js
import { ProjectType } from "@/type/BaseModel";
import { ReactNode, createContext, useReducer } from "react";

function reducer(tasks: any, action: any) {
  switch (action.type) {
    case 'added': {
      if (tasks.includes(action.id)) {
        return tasks;
      } else {
        return [...tasks, action.id]
      }
    }
    // case 'changed': {
    //   return tasks.map((t: any) => {
    //     if (t.id === action.task.id) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    case 'deleted': {
      return tasks.filter((t: any) => t !== action.id);
    }
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}

const initialState: Array<Number> = Object.values(ProjectType).filter(value => typeof value === 'number') as Array<Number>;

export const ConditionContext = createContext({ state: initialState, dispatch: (action: any) => { } });

export const ConditionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (<ConditionContext.Provider value={{ state, dispatch }}>
    {children}
  </ ConditionContext.Provider>);
};
