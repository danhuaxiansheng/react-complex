import { useState, useId, useContext } from "react";
import { ConditionContext } from "@/reducers/conditionContext";

const Checkbox = ({ label, checked, className, value }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const { dispatch } = useContext(ConditionContext);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    dispatch({
      type: event.target.checked ? "added" : "deleted",
      id: value,
    });
  };
  const id = useId();
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={className}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default Checkbox;
