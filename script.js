`use strict`;
// * selector
const dayEl = document.querySelector(`.days`);
const hourEl = document.querySelector(`.hours`);
const minuteEl = document.querySelector(`.minutes`);
const secondEL = document.querySelector(`.seconds`);

const time = () => {
  let currentDate = new Date();

  let date = new Date(`1 Jan ${currentDate.getFullYear() + 1}`);

  let totalSecond = Math.trunc((date - currentDate) / 1000);

  let currentDay = Math.trunc(totalSecond / 86400);
  let currentHour = Math.trunc(totalSecond / 3600) % 24;
  let currentMinute = Math.trunc(totalSecond / 60) % 60;
  let currentSecond = totalSecond % 60;

  dayEl.textContent = currentDay < 10 ? `0${currentDay}` : currentDay;
  hourEl.textContent = currentHour < 10 ? `0${currentHour}` : currentHour;
  minuteEl.textContent =
    currentMinute < 10 ? `0${currentMinute}` : currentMinute;
  secondEL.textContent =
    currentSecond < 10 ? `0${currentSecond}` : currentSecond;
};
setInterval(time, 1000);

const date1 = new Date();

// console.log(date1.getDate());
console.log(date1.getFullYear() + 1);
