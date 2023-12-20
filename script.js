"use strict";


let str = "Очень большой текст будет сокращен обязательно";

function getShortText(str) {
  if (typeof str !== "string") {
    console.log("Введена не строка!");
  }

  if (str.trim().length <= 20) return str.trim();
  return str.trim().substr(0, 30).trim() + "(...)";
}

getShortText(str);

console.log(getShortText(str));
