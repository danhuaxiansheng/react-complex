
import { useContext } from "react";
import { filterTypeGroup } from "./type";
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from "antd/es/checkbox";
import "./style/index.scss";

const LeftSearch = ({ options, context }: {
  options: Array<filterTypeGroup>,
  context: React.Context<any>
}) => {
  const { dispatch } = useContext(context);
  const onChange = (e: CheckboxChangeEvent, label: any) => {
    dispatch({ checked: e.target.checked, label });
  };

  return (
    <div className="filter-list">
      {options.map((option) => (
        <div className="filter-item" key={option.label}>
          <div className="filter-title">{option.label}</div>
          <div className="filter-content">
            {option.children.map((item) => (
              <div className="checkbox-group" key={item.label}>
                <Checkbox onChange={(e: CheckboxChangeEvent) => onChange(e, item.label)} checked={item.checked}>{item.label}</Checkbox>
                <span className="check-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSearch;
