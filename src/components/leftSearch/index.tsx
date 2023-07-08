
import { useContext } from "react";
import { filterTypeGroup } from "@/components/LeftSearch/type";

import Checkbox from "@/components/CheckBox";
import { ConditionContext } from "@/reducers/conditionContext";

import "./style/index.scss";

const LeftSearch = ({ options }: {
  options: Array<filterTypeGroup>
}) => {
  const { dispatch } = useContext(ConditionContext);

  const handleChange = (id: any, checked: boolean) => {
    dispatch({ type: checked ? "added" : "deleted", id });
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
                <Checkbox
                  label={item.label}
                  checked={item.checked}
                  className={item.className}
                  value={item.value}
                  onChange={handleChange}
                />
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
