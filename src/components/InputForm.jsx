import React, { useState } from "react";
import InputField from "./InputField";
import ActionButtons from "./ActionButtons";

// formStyle을 컨포넌트안에다 선언하면 실행할때마다 재로드 하는 불필요하는 과정을 겪음
const formStyle = {
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
};

const inputFormBtnStyle = {
  backgroundColor: "#555", // 어두운 회색
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "4px",
  padding: "8px 16px", // 패딩 줄임
  cursor: "pointer",
};

const InputForm = ({ medalRecords, setMedalRecords }) => {
  // InpurForm은 국가명, 금메달, 은메달, 동메달 정보를 받아
  const [nation, setNation] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  // form tag  handler 함수
  const handleSubmit = (e) => {
    // 새로고침 방지 
    e.preventDefault();

    //  예외조건 처리 1. 메달수는 0이상 양수 
    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0) {
      alert("메달 수는 0 이상이어야 합니다.");
      return;
    }
    //  예외조건 처리 2. 업데이트 시도시 국가 기록 있는지 확인
    const isDuplicate = medalRecords.some((record) => record.nation === nation);
    if (isDuplicate) {
      alert("이미 등록된 국가입니다.");
      return;
    }
    //  총합 메달 수 계산 및 
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
    // 국가가 있는지 없는지 탐색하는 조건문 실행 default를 false로 
    let nationFound = false;
    // 해당하는 국가가 있으면 true로 변경하고 이전의 데이터를 스프레드 연산자로 불러오고
    // 새로 입력된 데이터로 변환후 return
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
    // 해당 하는 국가가 존재하지않으면 false -> true로 변경되고 존재하지 않는 국가 반환이 되며
    //  map함수를 통해 변경된 국가가 있으면 nationFound가 true로 변경되어 else문으로 이동 하면서 금메달 순서로 다시 정렬
 
    if (!nationFound) {
      alert("존재하지 않는 국가입니다.");
    } else {
      setMedalRecords(updatedRecords.sort((a, b) => b.goldMedal - a.goldMedal));
      alert("국가 정보가 업데이트되었습니다.");
    }
    // 입력칸 초기화 
    setNation("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
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
      {/* 버튼 2개 컴포넌트  */}
      <ActionButtons
        handleUpdate={handleUpdate}
        inputFormBtnStyle={inputFormBtnStyle}
      ></ActionButtons>
    </form>
  );
};

export default InputForm;
