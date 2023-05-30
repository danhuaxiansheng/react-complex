// ------ components/Checkbox.js ------
import { useState } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  className?: string;
  value: any;
  onChange: (value: string, checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, className, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (event: any) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(value, checked);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={className}
      />
      <label>{label}</label>
    </>
  );
};

export default Checkbox;
