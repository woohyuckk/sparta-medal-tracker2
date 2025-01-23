const actionBtnStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
}



const ActionButtons = ({ inputFormBtnStyle, handleUpdate }) => {


  return (
    <div
      style={actionBtnStyle}
    >
      <button type="submit" style={inputFormBtnStyle}>
        국가 추가
      </button>
      <button type="button" onClick={handleUpdate} style={inputFormBtnStyle}>
        업데이트
      </button>
    </div>
  );
};

export default ActionButtons;
