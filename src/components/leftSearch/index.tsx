
import { useContext } from "react";
import { filterTypeGroup } from "./type";
import { Checkbox } from 'antd';
// import Checkbox from "@/components/CheckBox";
import { ConditionContext } from "@/reducers/conditionContext";

import "./style/index.scss";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const LeftSearch = ({ options }: {
  options: Array<filterTypeGroup>
}) => {
  const { dispatch } = useContext(ConditionContext);
  const onChange = (e: CheckboxChangeEvent, label: string) => {
    dispatch({ checked: e.target.checked, label });
  };

  return (
    <div className="search-type">
      <div className="search-header">过滤</div>
      {options.map((option) => (
        <div className="job-time" key={option.label}>
          <div className="job-time-title">{option.label}</div>
          <div className="job-wrapper">
            {option.children.map((item) => (
              <div className="checkbox-group" key={item.label}>
                <Checkbox onChange={(e: CheckboxChangeEvent) => onChange(e, item.label)} checked={item.checked}>{item.label}</Checkbox>
                <span className="job-number">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSearch;
