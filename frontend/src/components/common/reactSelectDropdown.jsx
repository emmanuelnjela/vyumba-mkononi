import { Controller } from "react-hook-form";
import Select from "react-select";

function ReactSelectDropdown({ name, control, placeholder, rules, options, value=undefined }) {
  console.log(value)
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Select
          placeholder={placeholder}
          defaultInputValue={value}
          styles={{
            control: (provided, state) => ({
              ...provided,
              boxShadow: "none",
              border: "1px solid",
              backgroundColor: "white",
              color: "#000000",
              width: "100%",
              fontSize: ".8rem"
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected
                ? "var(--primary-clr)"
                : "inherit",
                borderBottom: ".5px solid var(--grey-2)"
            }),
          }}
          {...field}
          options={options}
        />
      )}
    />
  );
}

export default ReactSelectDropdown;
