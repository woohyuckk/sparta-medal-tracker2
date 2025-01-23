const InputField = ({ label, type, value, onChange }) => {
  const inputFieldContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };
  const inputFieldInputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  return (
    <div style={inputFieldContainerStyle}>
      <label for={label} style={{ fontWeight: "bold", marginBottom: "4px" }}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        style={inputFieldInputStyle}
        required
      />
    </div>
  );
};

export default InputField;
