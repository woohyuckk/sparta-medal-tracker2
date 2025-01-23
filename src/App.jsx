import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import MedalList from "./components/MedalList";

const App = () => {
  // localStorage init
  const getInitialMedalRecords = () => {
    const storedRecords = localStorage.getItem("medalRecords");
    return storedRecords ? JSON.parse(storedRecords) : [];
  };
  // medalRecords State 선언 및 localStorage에 저장된 데이터 초기값
  const [medalRecords, setMedalRecords] = useState(getInitialMedalRecords);

  // useEffect Hook을 사용해 medalRecords가 변경될 때마다 localStorage에 저장 
  useEffect(() => {
    localStorage.setItem("medalRecords", JSON.stringify(medalRecords));
  }, [medalRecords]);

  // 삭제 버튼 Handler filter를 이용해 일치하지 않는 국가들만 선택 
  const handleDelete = (nation) => {
    const updatedRecords = medalRecords.filter((record) => record.nation !== nation);
    setMedalRecords(updatedRecords);
  };


  // 두개의 컴포넌트로 구성 InputForm과 MedalList 
  // InpurForm에는 medalRecords와 setMedalRecords를 props로 전달
  // MedalList에는 medalREcords, setMedalRecords, handleDelete를 props로 전달 
  return (
    <div>
      <InputForm medalRecords={medalRecords} setMedalRecords={setMedalRecords} />
      <MedalList
        medalRecords={medalRecords}
        setMedalRecords={setMedalRecords} // 상태 변경 함수 전달
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
