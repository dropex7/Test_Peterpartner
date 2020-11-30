import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppPageCardInfo } from "./AppPageCardInfo/AppPageCardInfo";
import { AppPageHistory } from "./AppPageHistory/AppPageHistory";
import { getUsers, getValute } from "./../DataLoader";
import { AppPageButton } from "./AppPageButton/AppPageButton";
import "./AppPage.css";

export const AppPage = (props) => {
  const [valuteType, setValuteType] = useState("GBP");
  const [userNumber, setUserNumber] = useState(props.numberOfUser);
  const [users, setUsers] = useState(null);
  const [EUR, setEUR] = useState(0);
  const [GBP, setGBP] = useState(0);
  const [USD, setUSD] = useState(0);
  const val = { GBP: GBP, EUR: EUR, USD: USD };
  const btnVal = [
    { name: "GBP", value: "£" },
    { name: "EUR", value: "€" },
    { name: "RUB", value: "₽" },
  ];

  useEffect(() => {
    const load = async () => {
      // Получаем пользователей
      const Users = await getUsers();
      setUsers(Users);
      // Получаем значения валют
      const valutes = await getValute();
      valutes.map((valute) => {
        if (valute["CharCode"] === "USD") {
          setUSD(valute["Value"]);
        } else if (valute["CharCode"] === "EUR") {
          setEUR(valute["Value"]);
        } else if (valute["CharCode"] === "GBP") {
          setGBP(valute["Value"]);
        }
        return 0;
      });
    };
    load();
  }, []);

  if (!users) return <div>Loading...</div>;
  else
    return (
      <div className="app_container">
        <header className="app_container__header">
          <div className="app_container__header_main">
            <b>Главная</b>
          </div>
        </header>
        <Link
          to={`/allcards?index=${userNumber}`}
          className="app_container__card"
        >
          <AppPageCardInfo
            numberOfUser={userNumber}
            Users={users}
            valType={valuteType}
            valutes={val}
          />
        </Link>
        <div className="app_container__converter">
          <h3>Change currency</h3>
          <div className="app_container__converter_buttons">
            <AppPageButton btnVal={btnVal} handleChange={setValuteType} />
          </div>
        </div>
        <AppPageHistory
          valute={val}
          tempType={valuteType}
          history={users[userNumber]["transaction_history"]}
        />
      </div>
    );
};

