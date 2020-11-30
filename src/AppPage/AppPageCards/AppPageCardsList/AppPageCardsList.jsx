import React, { useEffect } from "react";
import { AppPageCardELement } from "./../AppPageCardsList/AppPageCardElement/AppPageCardElement";
import { useState } from "react";
import { getUsers } from "./../../../DataLoader";
import "./AppPageCardsList.css";

export const AppPageCardsList = (props) => {
  const [numbersAndTypes, setNumbersAndTypes] = useState([]);
  
  useEffect(() => {
    // Получаем номера карт пользователей с их типами 
    async function getNumbsAndTypes() {
      setNumbersAndTypes(await getUsers("numbers"));
    }
    getNumbsAndTypes();
  }, []);

  return (
    <ul className="cards_list">
      <AppPageCardELement numbers={numbersAndTypes} tempNum={props.userNum} />
    </ul>
  );
};
