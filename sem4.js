/* Задача

Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage */

"use strict";
const url = "https://jsonplaceholder.typicode.com/users";
const body = document.querySelector("body");
const users = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
let a = 0;
let b = [];
try {
  const data = await users(url);
  console.log(data);
  data.forEach((el) => {
    body.insertAdjacentHTML(
      "beforeend",
      `
        <div onclick="this.remove(''), localStorage.removeItem('${a}')", class = "${a++}">
        ${b}
        </div>
        <br><br>
    `
    );

    localStorage[a] = JSON.stringify(el);
    b.length = 0;
    for (const key in el) {
      if (typeof el[key] != "object") {
        b.push(`${key}: ${el[key]} <br>`);
        b.push(`<br>`);
      } else
        for (const i in el[key]) {
          if (typeof el[key][i] != "object") {
            b.push(`${i}: ${el[key][i]} <br>`);
            b.push(`<br>`);
          } else {
            for (const k in el[key][i]) {
              b.push(`${k}: ${el[key][i][k]} <br>`);
              b.push(`<br>`);
            }
          }
        }
    }
  });
} catch (error) {
  console.log("ой");
}

body.insertAdjacentHTML(
  "beforeend",
  `
      <div onclick="this.remove(''), localStorage.removeItem('${a}')", class = "${a++}">
      ${b}
      </div>
    <br><br>
 `
);
