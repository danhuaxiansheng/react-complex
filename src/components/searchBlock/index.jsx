import CheckboxGroup from "@/components/checkboxGroup/index";

import "./style/index.scss";

export default function Page({ title, list }) {
  return (
    <div className="job-time">
      <div className="job-time-title">{title}</div>
      <div className="job-wrapper">
        <CheckboxGroup list={list}></CheckboxGroup>
      </div>
    </div>
  );
}
