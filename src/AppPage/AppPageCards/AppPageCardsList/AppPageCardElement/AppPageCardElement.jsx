import React, { useState } from "react";
import { Link } from "react-router-dom";
// Загружаем иконки
import MasterCardIcon from "./../../../../Icons/masterCard.svg";
import VisaCardIcon from "./../../../../Icons/Visa.svg";
import UnionpayCardIcon from "./../../../../Icons/Unionpay.svg";
import pointer from "../../../../Icons/Ellipse.svg";
import "./AppPageCardElement.css";

export const AppPageCardELement = (props) => {
  const [tempCard, setTempCard] = useState(parseInt(props.tempNum));
  // Получаем нужную иконку под тип карты
  const getBankIcon = (type) => {
    switch (type) {
      case "visa":
        return VisaCardIcon;
      case "mastercard":
        return MasterCardIcon;
      case "unionpay":
        return UnionpayCardIcon;
      default:
        return MasterCardIcon;
    }
  };

  return props.numbers.map((num, index) => {
    if (index === tempCard) {
      return (
        <Link className="cards_list_link" to={`/cards?index=${index}`}>
          <li className="cards_list_link_el" key={index}>
            <div className="cards_list_link_el_container">
              <img
                className="cards_list_link_el_icon"
                src={getBankIcon(num.type)}
                alt=""
              />
              <span>{num.number}</span>
            </div>
            <img
              className={"cards_list_link_el_pointer"}
              src={pointer}
              alt="pointer"
            />
          </li>
          <hr className="hr-line" />
        </Link>
      );
    } else {
      return (
        <Link className="cards_list_link" to={`/cards?index=${index}`}>
          <li className="cards_list_link_el" key={index}>
            <div className="cards_list_link_el_container">
              <img
                className="cards_list_link_el_icon"
                src={getBankIcon(num.type)}
                alt=""
              />
              <span>{num.number}</span>
            </div>
          </li>
          <hr className="hr-line" />
        </Link>
      );
    }
  });
};
