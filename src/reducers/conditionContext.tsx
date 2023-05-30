import { ProjectType } from "@/type/BaseModel";
import { ReactNode, createContext, useReducer, Dispatch } from "react";

type ActionType = 'added' | 'deleted';
type Action = { type: ActionType; id: number; };
type ConditionState = number[];
type ConditionContextType = { state: ConditionState; dispatch: Dispatch<Action>; };

export const ConditionContext = createContext<ConditionContextType>({ state: [], dispatch: () => { } });

function reducer(state: number[], action: any): number[] {
  switch (action.type) {
    case "added":
      if (state.includes(action.id)) {
        return state;
      } else {
        return [...state, action.id];
      }
    case "deleted":
      return state.filter((id: any) => id !== action.id);
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const initialState = Object.values(ProjectType).filter((value) => typeof value === "number") as number[];

export const ConditionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ConditionContext.Provider value={{ state, dispatch }}>
      {children}
    </ConditionContext.Provider>
  );
};
