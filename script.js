"use strict";
/* 
Вивести таблицю Піфагора (10×10), проте цього разу таблиця повинна бути створена динамічно
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const tableElement = document.createElement("table");

for (let i = 0; i < 10; i++) {
  const rowElement = document.createElement("tr");

  for (let j = 0; j < 10; j++) {
    const cellElement = document.createElement("td");
    cellElement.classList.add("cell");
    if (i === 0) {
      cellElement.textContent = i === 0 ? j : i * j;
      cellElement.classList.add("border_bottom");
    } else {
      cellElement.textContent = j === 0 ? i : i * j;
    }

    if (j === 0) {
      cellElement.classList.add("border_right");
    }

    rowElement.append(cellElement);
  }

  tableElement.append(rowElement);
}

document.body.append(tableElement);