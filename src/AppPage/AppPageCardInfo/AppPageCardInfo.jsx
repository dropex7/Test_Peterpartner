import React from "react";
import MasterCardIcon from "./../../Icons/masterCard.svg";
import VisaCardIcon from "./../../Icons/Visa.svg";
import UnionpayCardIcon from "./../../Icons/Unionpay.svg";
import UserIcon from "./../../Icons/User.svg";
import "./AppPageCardInfo.css";

export const AppPageCardInfo = (props) => {
  // Конвертируем значения баланса под выбранную валюту
  const valuteSymbol = (valute) => {
    const tempBalance = props.Users[props.numberOfUser]["balance"];
    const RUBbalance = (tempBalance * props.valutes["USD"]).toFixed(2);
    const EURbalance = (RUBbalance / props.valutes["EUR"]).toFixed(2);
    const GBPbalance = (RUBbalance / props.valutes["GBP"]).toFixed(2);

    switch (valute) {
      case "GBP":
        return <span>&#163;{GBPbalance}</span>;
      case "EUR":
        return <span>&#8364;{EURbalance}</span>;
      case "RUB":
        return <span>&#8381;{RUBbalance}</span>;
      default:
        return <span>&#163;{GBPbalance}</span>;
    }
  };
  // Получаем инонку под тип карты
  const getBankIcon = () => {
    if (props.Users[props.numberOfUser]["type"] === "mastercard") {
      return MasterCardIcon;
    } else if (props.Users[props.numberOfUser]["type"] === "visa") {
      return VisaCardIcon;
    } else if (props.Users[props.numberOfUser]["type"] === "unionpay") {
      return UnionpayCardIcon;
    }
  };

  return (
    <div className="card_info">
      <div className="card_info_container">
        <div className="card_info_container__number">
          <img
            className="card_info_container__masterCardIcon"
            src={getBankIcon()}
            alt="MasterCard"
          />
          <span>
            <b>{props.Users[props.numberOfUser]["card_number"]}</b>
          </span>
        </div>
        <div className="card_info__user">
          <img className="card_info__user_icon" src={UserIcon} alt="UserIcon" />
          <span className="card_info__user_name">
            {props.Users[props.numberOfUser]["cardholder_name"]}
          </span>
          <div className="card_info__user_valid">
            <span className="card_info__user_valid_thru">VALID THRU</span>
            <span className="card_info__user_valid_data">
              {props.Users[props.numberOfUser]["valid"]}
            </span>
          </div>
        </div>
        <div className="card_info__balance">
          <span className="card_info__balance_conver_value">
            <b>{valuteSymbol(props.valType)}</b>
          </span>
          <div className="card_info__balance_info">
            <span className="card_info__balance_title">
              Your balance <br />
            </span>
            <span className="card_info__balance_value">
              <b>&#36;{props.Users[props.numberOfUser]["balance"]}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
