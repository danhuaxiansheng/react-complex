import Checkbox from "../checkbox/index";

import "./style/index.scss";

export default function CheckboxGroup({ list }) {
  return (
    <>
      {list.map((item) => {
        return (
          <div className="checkbox-group" key={item.label}>
            <Checkbox
              label={item.label}
              checked={item.checked}
              className={item.className}
            />
            <span className="job-number">{item.count}</span>
          </div>
        );
      })}
    </>
  );
}
