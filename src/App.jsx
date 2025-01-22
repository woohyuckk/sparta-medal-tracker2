import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import MedalList from "./components/MedalList";

const App = () => {
  const getInitialMedalRecords = () => {
    const storedRecords = localStorage.getItem("medalRecords");
    return storedRecords ? JSON.parse(storedRecords) : [];
  };

  const [medalRecords, setMedalRecords] = useState(getInitialMedalRecords);

  useEffect(() => {
    localStorage.setItem("medalRecords", JSON.stringify(medalRecords));
  }, [medalRecords]);

  const handleDelete = (nation) => {
    const updatedRecords = medalRecords.filter((record) => record.nation !== nation);
    setMedalRecords(updatedRecords);
  };

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
