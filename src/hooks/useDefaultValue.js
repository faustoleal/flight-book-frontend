import { useState } from "react";

const useDefaultValue = (type) => {
  const [value, setValue] = useState("0");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onReset = () => {
    setValue("0");
  };

  return {
    type,
    value,
    onChange,
    onReset,
  };
};

export default useDefaultValue;
