import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppPageCardsList } from "./AppPageCardsList/AppPageCardsList";
import backIcon from "./../../Icons/back.svg";
import "./AppPageCards.css";

export const AppPageCards = (props) => {
  const [tempUsNum, setTempUsNum] = useState(props.numberOfUser);
  
  return (
    <div className="cards_container">
      <header className="cards_container__header">
        <Link className="cards_container__header_back" to="/">
          <img src={backIcon} alt="back" />{" "}
        </Link>
        <span className="cards_container__header_info">Мои карты</span>
      </header>
      <AppPageCardsList userNum={tempUsNum} />
    </div>
  );
};
