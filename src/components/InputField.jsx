const InputField = ({ label, type, value, onChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label for={label} style={{ fontWeight: "bold", marginBottom: "4px" }}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        required
      />
    </div>
  );
};

export default InputField;
