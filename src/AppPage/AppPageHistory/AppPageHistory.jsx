import React from "react";
import "./AppPageHistory.css";

export const AppPageHistory = (props) => {
  // Получаем нужную иконку
  const titleIcon = (title) => {
    // Назначаем ссылки на изображение(потому что в API нерабочие ссылки)
    const images = {
      Netflix:
        "https://cdn0.iconfinder.com/data/icons/circle-icons/512/netflix.png",
      Facebook:
        "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png",
      Dropbox:
        "https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/dropbox-512.png",
      Tesla:
        "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/tesla-512.png",
      Apple:
        "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/apple-512.png",
    };

    switch (title) {
      case "Netflix":
        return images.Netflix;
      case "Dropbox":
        return images.Dropbox;
      case "Facebook":
        return images.Facebook;
      case "Apple":
        return images.Apple;
      case "Tesla":
        return images.Tesla;
      default:
        return null;
    }
  };
  // Конвертируем значени расходов, под нужную валюту
  const valuteSymbol = (type, value) => {
    const tempRES = value;
    const RUBres = (tempRES * props.valute["USD"]).toFixed(2);
    const EURres = (RUBres / props.valute["EUR"]).toFixed(2);
    const GBPres = (RUBres / props.valute["GBP"]).toFixed(2);
    switch (type) {
      case "GBP":
        return (
          <span>
            <span className="app_history_container__list_element_amount_block__convert_amount_val">
              - &#163;{" "}
            </span>
            {GBPres * -1}
          </span>
        );
      case "EUR":
        return (
          <span>
            <span className="app_history_container__list_element_amount_block__convert_amount_val">
              - &#8364;{" "}
            </span>
            {EURres * -1}
          </span>
        );
      case "RUB":
        return (
          <span>
            <span className="app_history_container__list_element_amount_block__convert_amount_val">
              - &#8381;{" "}
            </span>
            {RUBres * -1}
          </span>
        );
      default:
        return (
          <span>
            <span className="app_history_container__list_element_amount_block__convert_amount_val">
              - &#163;{" "}
            </span>
            {GBPres * -1}
          </span>
        );
    }
  };
  
  return (
    <div className="app_history_container">
      <h3>History</h3>
      <ul>
        {props.history.map((hist, index) => {
          return (
            <li className="app_history_container__list_element" key={index}>
              <div className="app_history_container__list_element_img_block">
                <img
                  id="HistIcon"
                  src={titleIcon(hist["title"])}
                  alt="histIMG"
                />
                <div className="app_history_container__list_element_title_block">
                  <span className="app_history_container__list_element_title_block_name">
                    {hist["title"]}
                  </span>
                  <span className="app_history_container__list_element_title_block_date">
                    {hist["date"]}
                  </span>
                </div>
              </div>
              <div className="app_history_container__list_element_amount_block">
                <span className="app_history_container__list_element_amount_block__convert_amount">
                  {valuteSymbol(props.tempType, hist["amount"])}
                </span>
                <span className="app_history_container__list_element_amount_block__amount">
                  &#36; {hist["amount"] * -1}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
