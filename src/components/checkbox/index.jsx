import { useState, useId } from "react";
const Checkbox = ({ label, checked, className }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
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
