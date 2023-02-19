import styles from "./selectInput.module.css";

interface SelectInputProps {
  options: any[];
  value: any;
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ value, options, onSelect }: SelectInputProps) => {
  return (
    <div className={styles.selectContainer}>
      <select value={value} onChange={onSelect}>
        <option value="" disabled selected>
          Select Project
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
