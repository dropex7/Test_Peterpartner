const fetch = require("node-fetch");
// Загружаем значения валют
export const getValute = () => {
  return fetch("https://www.cbr-xml-daily.ru/daily_json.js").then((response) =>
    response
      .json()
      .then((data) => {
        const fullData = Object.entries(data);
        const valutes = fullData[4];
        const res = Object.values(valutes[1]);
        return res;
      })
      .catch((error) => {
        return error.message;
      })
  );
};

// Загружаем пользователей, также с помощью ключа можем получить либо только номера карт и их тип,
// либо историю транзакций пользователя
export const getUsers = (key) => {
  var cors_api_url = "https://cors-anywhere.herokuapp.com/";
  return fetch(
    `${cors_api_url}https://hr.peterpartner.net/test/android/v1/users.json`,
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      const users = data["users"];
      var numbers = [];
      var history = [];
      if (key === "numbers") {
        users.map((user) =>
          numbers.push({ number: user["card_number"], type: user["type"] })
        );
        return numbers;
      } else if (key === history) {
        users.map((user) => history.push(user["transaction_history"]));
        return history;
      }
      return users;
    })
    .catch((error) => {
      console.log(error);
    });
};
