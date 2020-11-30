import React from "react";

export const AppPageButton = (props) => {
  // Меняем значение типа валюты в родителе через пропс
  function onClickBtn(value) {
    const { handleChange } = props;
    handleChange(value);
  }

  return props.btnVal.map((v, index) => {
    return (
      <button
        key={index}
        onClick={() => onClickBtn(v["name"])}
        className="app_container__converter_button"
      >
        <div className="app_container__converter_button_valut">
          <div className="app_container__converter_button_symbol">{`${v["value"]}`}</div>
          <div className="app_container__converter_button_name">
            {v["name"]}
          </div>
        </div>
      </button>
    );
  });
};
