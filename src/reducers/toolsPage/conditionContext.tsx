import { filterType } from "@/components/LeftSearch/type";
import { ProjectType } from "@/type/ToolsModel";
import { ReactNode, createContext, useReducer, Dispatch } from "react";

type Action = { checked: boolean; label: string; };
type ConditionContextType = { state: filterType[]; dispatch: Dispatch<Action>; };

export const ConditionContext = createContext<ConditionContextType>({ state: [], dispatch: () => { } });

function reducer(state: filterType[], action: any): filterType[] {
  let mapState = state.map(item => {
    return { ...item }
  });
  mapState.some(item => {
    if (item.label == action.label) {
      item.checked = action.checked
    };
    return item.label == action.label
  })
  return mapState;
}

const initialState: filterType[] = Object.values(ProjectType).filter((value) => typeof value === "string").map((d, index) => {
  return {
    label: d.toString(),
    value: index,
    checked: true,
  }
});

export const ConditionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ConditionContext.Provider value={{ state, dispatch }}>
      {children}
    </ConditionContext.Provider>
  );
};

