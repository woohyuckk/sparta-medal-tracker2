

const ActionButtons = ({ inputFormBtnStyle, handleUpdate }) => {
  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      {" "}
      {/* 버튼 간격 줄임 */}
      <button type="submit" style={inputFormBtnStyle}>
        국가 추가
      </button>
      <button type="button" onClick={handleUpdate} style={inputFormBtnStyle}>
        업데이트
      </button>
    </div>
  );
};
// inline style 자제할것 
// button 컴포넌트화 
// https://ofcourse.kr/css-course/%EC%A0%81%EC%9A%A9-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84
export default ActionButtons;
