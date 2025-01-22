import React, { useState } from "react";
import InputField from "./InputField";
import ActionButtons from "./ActionButtons";

const InputForm = ({ medalRecords, setMedalRecords }) => {
  const [nation, setNation] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  const inputFormBtnStyle = {
    backgroundColor: "#555", // 어두운 회색
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px", // 패딩 줄임
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0) {
      alert("메달 수는 0 이상이어야 합니다.");
      return;
    }

    const isDuplicate = medalRecords.some((record) => record.nation === nation);
    if (isDuplicate) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    const sumMedals = goldMedal + silverMedal + bronzeMedal;
    const newRecord = {
      nation,
      goldMedal,
      silverMedal,
      bronzeMedal,
      sumMedals,
    };
    setMedalRecords((prevRecords) =>
      [...prevRecords, newRecord].sort((a, b) => b.goldMedal - a.goldMedal)
    );

    setNation("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };

  const handleUpdate = () => {
    let nationFound = false;

    const updatedRecords = medalRecords.map((record) => {
      if (record.nation === nation) {
        nationFound = true;
        return {
          ...record,
          goldMedal,
          silverMedal,
          bronzeMedal,
          sumMedals: goldMedal + silverMedal + bronzeMedal,
        };
      }
      return record;
    });

    if (!nationFound) {
      alert("존재하지 않는 국가입니다.");
    } else {
      setMedalRecords(updatedRecords.sort((a, b) => b.goldMedal - a.goldMedal));
      alert("국가 정보가 업데이트되었습니다.");
    }

    setNation("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px", // 간격 줄임
        maxWidth: "600px",
        margin: "20px auto",
        padding: "10px 15px", // 패딩 줄임
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // 그림자 조정
      }}
    >
      <InputField
        label="국가명"
        type="text"
        value={nation}
        onChange={(e) => setNation(e.target.value)}
      />
      <InputField
        label="금메달"
        type="number"
        value={goldMedal}
        onChange={(e) => setGoldMedal(Number(e.target.value))}
      />
      <InputField
        label="은메달"
        type="number"
        value={silverMedal}
        onChange={(e) => setSilverMedal(Number(e.target.value))}
      />
      <InputField
        label="동메달"
        type="number"
        value={bronzeMedal}
        onChange={(e) => setBronzeMedal(Number(e.target.value))}
      />
      <ActionButtons handleUpdate={handleUpdate} inputFormBtnStyle={inputFormBtnStyle} ></ActionButtons>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <button type="submit" style={inputFormBtnStyle}>
          국가 추가
        </button>
        <button type="button" onClick={handleUpdate} style={inputFormBtnStyle}>
          업데이트
        </button>
      </div> */}
    </form>
  );
};

export default InputForm;
