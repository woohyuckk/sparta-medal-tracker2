import React, { useState } from "react";

const MedalList = ({ medalRecords, setMedalRecords, handleDelete }) => {
  const [isTotalDescending, setIsTotalDescending] = useState(true); // 총합 정렬 상태
  const [isGoldDescending, setIsGoldDescending] = useState(true); // 금메달 정렬 상태

  // 총합 정렬
  const handleTotalSort = () => {
    const sortedRecords = [...medalRecords].sort((a, b) => {
      return isTotalDescending ? b.sumMedals - a.sumMedals : a.sumMedals - b.sumMedals;
    });
    setMedalRecords(sortedRecords); // 부모 상태 업데이트
    setIsTotalDescending(!isTotalDescending); // 정렬 방향 토글
  };

  // 금메달 정렬
  const handleGoldSort = () => {
    const sortedRecords = [...medalRecords].sort((a, b) => {
      if (b.goldMedal !== a.goldMedal) {
        return isGoldDescending ? b.goldMedal - a.goldMedal : a.goldMedal - b.goldMedal;
      }
      // 금메달이 같을 경우 총합으로 정렬
      return isGoldDescending ? b.sumMedals - a.sumMedals : a.sumMedals - b.sumMedals;
    });
    setMedalRecords(sortedRecords); // 부모 상태 업데이트
    setIsGoldDescending(!isGoldDescending); // 정렬 방향 토글
  };

  const medalListBtn = {
  backgroundColor: "transparent",
  border: "0",
  cursor: "pointer",
  marginLeft: "5px",
}

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>
              금메달
              <button
                style={medalListBtn}
                onClick={handleGoldSort}
              >
                {isGoldDescending ? "▼" : "▲"}
              </button>
            </th>
            <th>은메달</th>
            <th>동메달</th>
            <th>
              총 합
              <button
                style={medalListBtn}
                onClick={handleTotalSort}
              >
                {isTotalDescending ? "▼" : "▲"}
              </button>
            </th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {medalRecords.map((record) => (
            <tr key={record.nation}>
              <td>{record.nation}</td>
              <td>{record.goldMedal}</td>
              <td>{record.silverMedal}</td>
              <td>{record.bronzeMedal}</td>
              <td>{record.sumMedals}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(record.nation)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
